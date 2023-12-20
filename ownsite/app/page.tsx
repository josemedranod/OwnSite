import { getImage } from '@/lib/api'
import { Flex, Image, Text } from '@chakra-ui/react'

export default async function Page() {
  const data = await getImage("landing_page")

  return (
    
    <Flex direction={'row'} alignItems={'center'} justifyContent={'space-around'} bgColor={'gray'} borderRadius={'24'} h={'800'} mx={'20'} my={'10'}>

      <Flex direction={'column'} px={'20'} py={'10'} alignItems={'start'}>
        <Text
          fontSize={'70'}
          as={'b'}
          fontFamily={'sans-serif'}
          color={'white'}
          justifyContent={'center'}>
          Hola a mi sitio
        </Text>

      </Flex>

      <Flex>
          {data && (
          <Image
          src={data}
          alt={'foto principal'}
          boxSize={'35rem'}
          />
          )}
          </Flex>
    </Flex>
  )
}
