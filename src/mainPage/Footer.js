import {Box, HStack, Image, Stack, Text} from "@chakra-ui/react";

function Footer() {
    return (
        <Box backgroundColor={"#FAFCFC"}>
            <Box color="#E5E5E5">
                <Stack
                    direction={['column', 'row']}
                    px={"1vw"}
                    py={"1vh"}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Image
                        src='./logo2.png'
                        alt='Logo'
                        boxSize='5vw'
                        borderRadius='full'/>
                    <Text color={"gray"}>Environmental Education for Kids</Text>
                </Stack>
            </Box>
        </Box>
    )
}

export default Footer;