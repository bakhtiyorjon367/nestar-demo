import React from "react";
import { Box, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
const HeaderFilter = () => {
   return (
     <>
        <Stack className={"search-box"}>
            <Stack className={"select-box"}>
                <Box component={"div"} className={"box on"}>
                    <span> Location </span>
                    <ExpandMoreIcon/>
                </Box>
                <Box component={"div"} className={"box"}>
                    <span> Property type </span>
                    <ExpandMoreIcon/>
                </Box>
                <Box component={"div"} className={"box"}>
                    <span> 7 Rooms </span>
                    <ExpandMoreIcon/>
                </Box>
            </Stack>
            <Stack>
                <Box className={"search-box-other"}>
                    <img src="/img/icons/tune.svg" alt=""/>
                    <span>Advanced</span>
                </Box>
                <Box className={"search-btn"}>
                    <img src="/img/icons/serach_white.svg" alt=""/>
                </Box>               
            </Stack>            
        </Stack>
    </>
   );
};

export default HeaderFilter;