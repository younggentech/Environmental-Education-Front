import {
    Box,
    Button,
    HStack, Image, Link,
} from "@chakra-ui/react";
import { useKeycloak } from "@react-keycloak/web";


function Header() {
    const { keycloak, initialized } = useKeycloak();

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
            size={{
                base: '100%', // 0-48em
                md: '50%', // 48em-80em,
                xl: '25%', // 80em+
            }}
        >
            <Box color="#E5E5E5">
                <HStack
                    px={"2vw"}
                    py={"2vh"}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                            <Image
                                src='./logo2.png'
                                alt='Logo'
                                boxSize='5vw'
                                borderRadius='full'/>
                    </nav>
                    <nav>
                        <HStack spacing={'4vw'}>
                            <Link fontSize={['xs', 'sm', 'lg', 'xl']} href="/secured">About</Link>
                            <Link fontSize={['xs', 'sm', 'lg', 'xl']}>Blog</Link>
                            <Link fontSize={['xs', 'sm', 'lg', 'xl']}>Contact</Link>
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={"2vw"}>
                            {!keycloak.authenticated && (
                                <Button colorScheme='green' size={['sm', 'sm', 'lg', 'md']} onClick={() => keycloak.login()}>
                                    Login
                                </Button>
                            )}

                            {!!keycloak.authenticated && (
                                <button
                                    type="button"
                                    className="text-blue-800"
                                    onClick={() => keycloak.logout()}
                                >
                                    Logout ({keycloak.tokenParsed.preferred_username})
                                </button>
                            )}
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    )
}

export default Header;