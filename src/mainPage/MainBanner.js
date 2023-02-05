import {Box, Button, Heading, Highlight, HStack, Link, Text, VStack} from "@chakra-ui/react";
import { MdOutlinePlayArrow } from 'react-icons/md'

function MainBanner() {
    return(
        <Box
            paddingBottom={"7vh"}
            marginBottom={"5vh"}>
                <HStack
                    px={32}
                    py={4}
                    // justifyContent="space-between"
                    >
                    <VStack textAlign={"left"}
                            alignItems={'left'}
                            spacing={4}
                            >
                        <Heading
                            color={"white"}
                            // textAlign={"left"}
                            size={"2xl"}
                            lineHeight={"10vh"}
                        >
                                <Highlight
                                query={'Sustainability'}
                                styles={{ px: '1', py: '1', rounded: 'full', bg: 'teal.100' }}>
                                    Environmental Education for Sustainability
                                </Highlight>
                        </Heading>
                        <Text
                        color={"whitesmoke"}>
                            We educate kids how to interact with environment carefully.
                            The most active kids will get <Link color='green.500'>gifts and souvenirs</Link>.
                        </Text>
                        <HStack spacing={5}>
                            <Button colorScheme='green' size='md'>
                                Start now
                            </Button>
                            <Button leftIcon={<MdOutlinePlayArrow />} colorScheme='green' variant='outline'>
                                What is Environmental Education?
                            </Button>
                        </HStack>
                    </VStack>
                </HStack>
        </Box>
    )
}

export default MainBanner;