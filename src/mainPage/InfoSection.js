import {Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";

function InfoSection(props){
    return (
        <Box>
            <HStack
                    px={32}
                    py={4}>
                <VStack  alignItems={'left'} textAlign={"left"} spacing={"2vh"}>
                    <Heading color={'black'}
                             size={"xl"}
                             lineHeight={"5vh"}
                    >{props.heading}</Heading>
                    <Text color={'gray'}>
                        {props.text}
                    </Text>
                    <Image src={props.img} alignSelf={"center"}></Image>
                </VStack>
            </HStack>
        </Box>
    )
}

export default InfoSection;