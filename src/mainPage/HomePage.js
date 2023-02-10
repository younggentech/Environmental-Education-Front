import Header from "./Header";
import MainBanner from "./MainBanner";
import {Box, Divider, Heading, HStack, SimpleGrid, Stack} from "@chakra-ui/react";
import InfoSection from "./InfoSection";
import CardInfoSection from "./CardInfoSection";
import OurMissionBanner from "./OurMissionBanner";
import Footer from "./Footer";
import {useEffect, useState} from "react";


function HomePage(props) {
    const [problems, setProblems] = useState({data: []});


    useEffect(() => {
        fetch(props.route+"/envProblems/random", )
            .then((response) => response.json())
            .then((data) => setProblems(data));
    }, [props.route]);
    console.log(problems.data)
    return (
        <Box>
            <Box backgroundColor="#254330" borderBottomRadius='3xl'>
                <Header/>
                <MainBanner/>
            </Box>
            <Heading marginTop={'2vh'} fontSize={['md', '2xl', '3xl', '4xl']} px={"2vw"}
                     py={"2vh"}>What are we fighting with?</Heading>
            <SimpleGrid alignItems={'center'} minChildWidth='sm' spacing={"4vw"} marginBottom={"5wh"} paddingBottom={"5vh"} px={"2vw"}
                        py={"2vh"}>
                {problems.data.map(problem => {
                    return <CardInfoSection text={problem.text} heading={problem.heading} img={props.route+problem.img}/>
                })}

            </SimpleGrid>
            <Box backgroundColor={"#E8F2F0"}>
                <OurMissionBanner/>
                <Divider/>
                <Footer/>
            </Box>
        </Box>


    )
}

export default HomePage