import {
    Box,
    Card,
    CardBody, CardFooter,
    Divider,
    Heading,
    Highlight,
    HStack,
    Stack,
    Text,
    VStack
} from "@chakra-ui/react";

function InCard(props) {
    return (
        <Box>
            <Card maxW='sm' align='left' colorScheme={"blue"} variant={"outline"}>
                <CardBody>
                    <Stack mt='2' spacing='2'>
                        <Heading size='md'>{props.heading}</Heading>
                        <Text>
                            {props.text}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter  justify='space-between'>
                </CardFooter>
            </Card>
        </Box>
    )
}

function OurMissionBanner() {
    return (
        <Box paddingBottom={"7vh"}>
            <HStack
                px={32}
                py={4}
            >
                <VStack textAlign={"left"}
                        alignItems={'left'}
                        spacing={4}
                >
                    <Heading
                        color={"black"}
                        size={"2xl"}
                        lineHeight={"10vh"}
                    >
                        <Highlight
                            query={'Educate'}
                            styles={{ px: '1', py: '1', rounded: 'full', bg: 'green.100' }}>
                            Our Mission to Educate
                        </Highlight>
                    </Heading>
                    <Text>
                        Throughout our history we were focused on helping children to understand and interact with the environment.
                        This text will be updated. Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.
                    </Text>
                </VStack>
            </HStack>
        </Box>
    )
}

export default OurMissionBanner;