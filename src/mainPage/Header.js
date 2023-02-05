import {
    Box,
    Button,
    HStack, Image, Link,
} from "@chakra-ui/react";

function Header() {
    return (
        <Box
            // position="fixed"
            // top={0}
            // left={0}
            // right={0}
            // translateY={0}
            // transitionProperty="transform"
            // transitionDuration=".3s"
            // transitionTimingFunction="ease-in-out"
            marginBottom={"7vh"}
        >
            <Box color="#E5E5E5" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                            <Image
                                src='/logo2.png'
                                alt='Logo'
                                boxSize='5vw'
                                borderRadius='full'/>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <Link>About</Link>
                            <Link>Projects</Link>
                            <Link>Contact</Link>
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={10}>
                            <Button colorScheme='green' size='md'>
                                Login
                            </Button>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    )
}

export default Header;