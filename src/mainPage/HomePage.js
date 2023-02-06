import Header from "./Header";
import MainBanner from "./MainBanner";
import {Box, Divider, Heading, HStack, SimpleGrid, Stack} from "@chakra-ui/react";
import InfoSection from "./InfoSection";
import CardInfoSection from "./CardInfoSection";
import OurMissionBanner from "./OurMissionBanner";
import Footer from "./Footer";


function HomePage() {
    return (
        <Box>
            <Box backgroundColor="#254330" borderBottomRadius='3xl'>
                <Header/>
                <MainBanner/>
            </Box>
            <Heading marginTop={'2vh'} fontSize={['md', '2xl', '3xl', '4xl']}>What are we fighting with?</Heading>
            <SimpleGrid alignItems={'center'} minChildWidth='sm' spacing={"4vw"} marginBottom={"5wh"} paddingBottom={"5vh"} px={"2vw"}
                        py={"2vh"}>
                <CardInfoSection text={"Human activities have made global warming and climate change a global threat. The rising levels of CO2 and other greenhouse gases have caused an increase in average global temperatures, extreme weather events, rising sea levels and other negative changes. These changes are directly and indirectly affecting all life forms."}
                                 heading={"Global Warming and Climate Change"}
                                 img={"./forest.jpg"}/>
                <CardInfoSection text={"Rapid urban development, improper sewage disposal by industries, oil spills, disposal of chemical and radioactive wastes, and plastic pollution are some of the major causes of water pollution. Today, water scarcity and polluted water are posing a big threat to the human existence across many nations of the world."}
                                 heading={"Water Pollution and Ocean Acidification"}
                                 img={"./pollution.jpg"}/>
                <CardInfoSection text={"Biodiversity helps maintain the balance of the ecosystem and provides biological resources which are crucial for our existence. Habitat destruction, climate change, pollution, secondary extinction and introduced species are a few ways in which humans are wreaking havoc on the biodiversity of this planet. "}
                                 heading={"Loss of Biodiversity"}
                                 img={"./bio.jpg"}/>
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