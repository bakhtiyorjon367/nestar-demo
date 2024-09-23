import { Stack } from "@mui/material"
import  Head  from "next/head"

const withLayoutBasic =(Component:any)=>{
    return (props:any)=>{
        return (
            <>
                <Head>
                    <title>Nestar</title>
                </Head>
                <Stack id="pc-wrap">
                    <Stack >Header Basic</Stack>

                    <Stack id={"main"}>
                        <Component {...props} />
                    </Stack>

                    <Stack >Footer</Stack>
                </Stack>
            </>
        );
    };
};
export default withLayoutBasic;  // the wrapped component is exported