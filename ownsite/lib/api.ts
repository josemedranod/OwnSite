const POST_GRAPHQL_FIELDS = `
  name
  content {
    url
  }
`

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ['posts'] },
    }
  ).then((response) => response.json())
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.mediaCollection?.items?.[0].content.url
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.mediaCollection?.items
}

export async function getImage(name: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      mediaCollection(where: { name: "${name}" }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractPost(entry)
}