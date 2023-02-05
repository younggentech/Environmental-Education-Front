import {Box, Button, Heading, HStack, Image, Link, Text, VStack} from "@chakra-ui/react";

function Footer() {
    return (
        <Box backgroundColor={"#FAFCFC"}>
            <Box color="#E5E5E5" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Image
                        src='/logo2.png'
                        alt='Logo'
                        boxSize='5vw'
                        borderRadius='full'/>
                    <Text color={"gray"}>Environmental Education for Kids</Text>
                </HStack>
            </Box>
        </Box>
    )
}

export default Footer;