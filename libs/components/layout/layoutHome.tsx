import { Stack } from "@mui/material"
import { blue, brown } from "@mui/material/colors"
import  Head from "next/head"

const withLayoutMain =(Component:any)=>{
    return (props:any)=>{
        return (
            <>
                <Head>
                    <title>Nestar</title>
                </Head>
                <Stack id="pc-wrap">
                    <Stack sx={{background:blue}}>Header Home</Stack>

                    <Stack id={"main"}>
                        <Component {...props} />
                    </Stack>

                    <Stack sx={{background:brown}}>Footer</Stack>
                </Stack>
            </>
        ); 
    };
};
export default withLayoutMain;  // the wrapped component is exported