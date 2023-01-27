import { Container, Paper, Typography, Stack } from "@mui/material";
import React from "react";
import UtilsCard from "@Components/UtilsCard";

const index = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" textAlign="center">
        Welcome To L0Thone Utilities
      </Typography>
      <Paper sx={{ minHeight: "100vh" }} elevation={0}>
        <Stack>
          <UtilsCard />
        </Stack>
      </Paper>
    </Container>
  );
};

export default index;
