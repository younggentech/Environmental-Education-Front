import {
    Box,
    Button,
    ButtonGroup, Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    HStack,
    Image,
    Stack,
    Text
} from "@chakra-ui/react";

function CardInfoSection(props) {
    return (
        <Card maxW='sm' align='center'>
            <CardBody>
                <Image
                    src={props.img}
                    alt='card picture'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{props.heading}</Heading>
                    <Text>
                        {props.text}
                    </Text>
                </Stack>
            </CardBody>
            <Divider/>
            <CardFooter  justify='space-between'>
                <ButtonGroup spacing={2}>
                    <Button variant='solid' colorScheme='green'>
                        Start learning
                    </Button>
                    <Button variant={"outline"} colorScheme={'green'}>
                        Participate
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CardInfoSection;