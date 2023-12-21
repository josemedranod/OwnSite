import { getImage, getText } from "@/lib/api";
import { Button, Flex, Image, Text } from "@chakra-ui/react";

export default async function Page() {
  const landing_page = await getImage("landing_page");
  const image_Perfil = await getImage("perfil");
  const text_Perfil = await getText("perfil");

  return (

    <Flex
      direction={"column"}
      gap={"30"}
      mx={"20"}
      my={"10"}
      >
    <Flex
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-around"}
      bgColor={"gray"}
      borderRadius={"32"}
      h={"700"}
      background={'radial-gradient(circle at 75% 50%, hsla(211, 97%, 58%, 1) 0%, hsla(0, 0%, 10%, 1) 50%)'}
    >
      <Flex direction={"column"} px={"20"} alignItems={"start"}>
      <Text
          fontSize={"50"}
          color={"white"}
          mb={'0'}
        >
          Hola, soy
        </Text>
        <Text
          fontSize={"70"}
          as={"b"}
          color={"white"}
        >
          Enrique Medrano
        </Text>
        <Text
          fontSize={"30"}
          color={"white"}
        >
          Ingeniero en Tecnologías Computacionales
        </Text>
        <Button
           variant={'solid'}
           colorScheme={'yellow'}
           size={'lg'}
           >
            Contáctame
        </Button>
      </Flex>
      <Flex>
        {landing_page && <Image src={landing_page} alt={"foto principal"} boxSize={"35rem"} />}
      </Flex>
    </Flex>

    <Flex
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-around"}
      bgColor={"gray"}
      borderRadius={"32"}
      h={"500"}
      background={'radial-gradient(circle at 75% 50%, rgba(157,1,87,1) 0%, hsla(0, 0%, 10%, 1) 50%)'}
    >
      <Flex direction={"column"} px={"20"} alignItems={"start"} >
      <Text
          fontSize={"40"}
          as={"b"}
          color={"white"}
          mb={'0'}
        >
          Perfil
        </Text>
        <Flex maxW={"800"}>
          {text_Perfil.content.json.content.map((values: any) => (
            <Text 
              textColor={'white'}
              lineHeight={'2'}
              key={values.content[0].value}>
              {values.content[0].value}
            </Text>
          ))}
        </Flex>
      </Flex>
      <Flex>
        {image_Perfil && <Image src={image_Perfil} alt={"foto apartado perfil"} boxSize={"20rem"} />}
      </Flex>
    </Flex>
    </Flex>
  );
}