import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopAgentsCard = () =>{
    return (
        <Stack className="top-agent-card">
            <div>
                <img src="/img/james.jpeg" />
            </div>
            <div className={"info"}>
                <strong className={"title"}> David </strong>
                <span className={"desc"}> Agent</span>
            </div>
        </Stack>
    );
};
export default TopAgentsCard;  // export default TrendPropertyCard;  // export default TrendProperty