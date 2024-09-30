import Advertisement from "@/libs/components/homepage/Advertisement";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import withLayoutMain from "@/libs/components/layout/layoutHome";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import {  Stack } from "@mui/material"
import { NextPage } from "next";


const  Home:NextPage = () => {
  const device = useDeviceDetect();
  if(device === "mobile"){
    return <Stack>HomePage Mobile</Stack>;
  }else{
    return (  
      <Stack className="home-page">
        <TrendProperties/>
        <PopularProperties/>
        <Advertisement/>
        <TopProperties/>
        <TopAgents/>
      </Stack>
    );
  } 
};

export default withLayoutMain(Home);  //export the component to use it in other files
