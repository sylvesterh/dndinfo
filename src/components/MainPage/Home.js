import React from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const Home = () => {
  return (
    <Container maxWidth="md">
      <div>
        <Typography variant="h1">Dungeons & Dragons</Typography>
        <Typography variant="h6">
          This is an extremely scuffed version of dungeons and dragons which
          focuses on character details such as stats, proficiencies and their
          available choices of selectable proficiencies.
        </Typography>
      </div>
    </Container>
  );
};

export default Home;
