import {
    Box,
    Button,
    ButtonGroup, Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    HStack,
    Image, SimpleGrid,
    Stack,
    Text
} from "@chakra-ui/react";

function CardInfoSection(props) {
    return (
        <Card maxW={['xs', 'sm', 'lg', 'xl']} align='center'>
            <CardBody>
                <Image
                    src={props.img}
                    alt='card picture'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size={['md', 'lg', 'lg', 'xl']}>{props.heading}</Heading>
                    <Text fontSize={['xs', 'sm', 'lg', 'xl']}>
                        {props.text}
                    </Text>
                </Stack>
            </CardBody>
            <Divider/>
            <CardFooter  justify='space-between'>
                <SimpleGrid spacing={2}>
                    <Button variant='solid' colorScheme='green'>
                        Start learning
                    </Button>
                    <Button variant={"outline"} colorScheme={'green'}>
                        Participate
                    </Button>
                </SimpleGrid>
            </CardFooter>
        </Card>
    )
}

export default CardInfoSection;