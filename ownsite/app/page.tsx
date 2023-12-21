import { getImage } from "@/lib/api";
import { Button, Flex, Image, Text } from "@chakra-ui/react";

export default async function Page() {
  const data = await getImage("landing_page");

  return (
    <Flex
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-around"}
      bgColor={"gray"}
      borderRadius={"32"}
      h={"700"}
      mx={"20"}
      my={"10"}
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
           variant='solid'
           >
            Contáctame
        </Button>
      </Flex>
      <Flex>
        {data && <Image src={data} alt={"foto principal"} boxSize={"35rem"} />}
      </Flex>
    </Flex>
  );
}
