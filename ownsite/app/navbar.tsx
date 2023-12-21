import { Flex, Image, Text } from "@chakra-ui/react"
import { getImage } from "@/lib/api";

export default async function Navbar() {
    const data = await getImage("landing_page");
    return (
        <Flex direction={'row'} h={'40'} alignItems={'center'} justifyContent={'space-around'} my={'20'}>
            <Flex justifyItems={'start'}>
                {data && <Image src={data} alt={"foto principal"} boxSize={"4rem"} />}
            </Flex>
            <Flex gap={'30'}>
                <Text
                as={'b'}
                >
                    Experiencia laboral
                </Text>
                <Text
                as={'b'}
                >
                    Educación
                </Text>
                <Text
                as={'b'}
                >
                    Voluntariado
                </Text>
            </Flex>
        </Flex>
    );
};