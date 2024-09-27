import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Link from "next/link";

const PropertyCard = () =>{
    const imagePath: string = "/img/banner/header1.svg";

    return (
        <Stack className="card-config">
            <Stack className="top">
                <Link 
                    href= {{
                        pathname: "/property/detail",
                        query: { id: "test123sdijfsdj" }
                    }}
                >
                    <img src={imagePath} alt="" />
                </Link>
                <Box className={"top-badge"}>
                    <img src="/img/icons/electricity.svg" alt="" />
                    <Typography> TOP </Typography>
                </Box>
                <Box className="price-box">
                    <Typography> $250000</Typography>
                </Box>
            </Stack>
            <Stack className="bottom">
                <Stack className="name-address">
                    <Stack className="name">
                        <Link  
                          href={{
                            pathname: "/property/detail",
                            query:{id: "test123sdijfsdj"},
                          }}
                        > <Typography>Kingstone apaprtments</Typography>
                        </Link>
                    </Stack>
                    <Stack className="address">
                        <Typography>Busan, City Center 200 - 5</Typography>
                    </Stack>
                </Stack>
                <Stack className="options">
                    <Stack className="option">
                        <img src="/img/icons/bed.svg" alt=""/>{" "}
                        <Typography> 3 Bedrooms</Typography>
                    </Stack>
                    <Stack className="option">
                        <img src="/img/icons/room.svg" alt=""/>{" "}
                        <Typography> 7 room</Typography>
                    </Stack>
                    <Stack className="option">
                        <img src="/img/icons/expand.svg" alt=""/>{" "}
                        <Typography> 170 m2</Typography>
                    </Stack>
                </Stack>
                <Stack className="divider"></Stack>
                <Stack className="type-buttons">
                    <Stack className="type">
                        <Typography sx={{fontWeight:500, fontSize: "13ppx"}}>Rent</Typography>
                        <Typography sx={{fontWeight:500, fontSize: "13ppx"}}>Barter</Typography>
                    </Stack>
                    <Stack className="buttons">
                         <IconButton color={"default"}>
                            <RemoveRedEyeIcon/>
                        </IconButton>
                        <Typography className="view-cnt">120</Typography>
                        <IconButton color="error">
                            <FavoriteIcon/>
                        </IconButton>
                        <Typography className="view-cnt">200</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
export default PropertyCard;  // export default TrendPropertyCard;  // export default TrendProperty