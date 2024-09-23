import withLayoutBasic from "@/libs/components/layout/layoutBasic";
import { NextPage } from "next"; 
import { Stack } from "@mui/material";


const Comunity:NextPage = () =>{
    return (
        <div>
            <Stack className={"container"}>
                COMUNITY 
            </Stack>
        </div>
    );
}
    


export default withLayoutBasic(Comunity);