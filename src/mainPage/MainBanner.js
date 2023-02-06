import {
    Box,
    Button,
    ButtonGroup,
    Heading,
    Highlight,
    HStack,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VStack
} from "@chakra-ui/react";
import { MdOutlinePlayArrow } from 'react-icons/md'

function MainBanner() {
    return(
        <Box
            paddingBottom={"7vh"}
            marginBottom={"5vh"}>
                <HStack
                    px={"6vw"}
                    py={"4vh"}
                    // justifyContent="space-between"
                    >
                    <VStack textAlign={"left"}
                            alignItems={'left'}
                            spacing={"4vh"}
                            >
                        <Heading
                            color={"white"}
                            // textAlign={"left"}
                            size={['md', '2xl', '3xl', '3xl']}
                            // fontSize={['sm', 'md', 'lg', 'xl']}
                            // lineHeight={"100"}

                        >
                                <Highlight
                                query={'Sustainability'}
                                styles={{ px: "2", my: "1", rounded: 'full', bg: 'teal.100' }}>
                                    Environmental Education for Sustainability
                                </Highlight>
                        </Heading>
                        <Text
                        color={"whitesmoke"} fontSize={['xs', 'sm', 'lg', 'xl']}>
                            We educate kids how to interact with environment carefully.
                            The most active kids will get <Link color='green.500'>gifts and souvenirs</Link>.
                        </Text>
                        <Stack direction={['column', 'row']} spacing={5}>
                            <Button colorScheme='green' size={['sm', 'sm', 'md', 'md']}>
                                Start now
                            </Button>
                            <Button leftIcon={<MdOutlinePlayArrow />} colorScheme='green'
                                    variant='outline' size={['sm', 'sm', 'md', 'md']}>
                                What is Environmental Education?
                            </Button>
                        </Stack>
                    </VStack>
                </HStack>
        </Box>
    )
}

export default MainBanner;