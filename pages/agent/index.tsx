import withLayoutBasic from "@/libs/components/layout/layoutBasic";
import { NextPage } from "next"; 
import { Stack } from "@mui/material";


const Agents:NextPage = () =>{
    return (
        <div>
            <Stack className={"container"}>
                AGENTS LIST 
            </Stack>
        </div>
    );
}
    


export default withLayoutBasic(Agents);