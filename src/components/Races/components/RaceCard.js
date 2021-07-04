import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  // CardActions,
  Typography,
  Collapse,
} from "@material-ui/core";

const RaceCard = ({ data }) => {
  return (
    <div>
      <Card elevation={12}>
        <CardHeader title={data.name} />
        <CardContent>
          <Typography variant="body2" color={"textSecondary"} display="block">
            Speed: {data.speed}
          </Typography>
          <Typography variant="body2" color={"textSecondary"} display="block">
            Size: {data.size}
          </Typography>
        </CardContent>
        <Collapse>
        </Collapse>
      </Card>
    </div>
  );
};

export default RaceCard;
