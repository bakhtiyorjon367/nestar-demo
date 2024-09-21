import withLayoutMain from "@/libs/components/layout/layoutHome";
import { Box, Container, Stack } from "@mui/material"
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";


const  Home:NextPage =() => {
  return (
    <>
      <Container>
        <Stack flexDirection={"column"}>HomePage
          <Box>Popular Properties</Box>
          <Box> Top Agents </Box>
          <Box> Top Properties </Box>
          <Box> Events </Box>
        </Stack>
      </Container>
    </>
  );
};

export default withLayoutMain(Home);  //export the component to use it in other files
