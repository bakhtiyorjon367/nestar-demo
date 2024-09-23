import withLayoutBasic from "@/libs/components/layout/layoutBasic";
import { NextPage } from "next"; 
import { Stack } from "@mui/material";


const CS:NextPage = () =>{
    return (
        <div>
            <Stack className={"container"}>
                CS 
            </Stack>
        </div>
    );
}
    


export default withLayoutBasic(CS);