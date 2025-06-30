import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { newsBoxStyles } from "./styles";
import { NewsBoxProps } from "../../../types";

const NewsBox: React.FC<NewsBoxProps> = ({ news }) => {
  return (
    <Card sx={newsBoxStyles.card}>
      <CardMedia
        component="img"
        image={news.image}
        alt={news.title}
        sx={newsBoxStyles.cardMedia}
      />
      <CardContent sx={{ px: 0, pb: 0 }}>
        <Typography variant="h6" sx={newsBoxStyles.cardTitle}>
          {news.title}
        </Typography>
        <Typography variant="body2" sx={newsBoxStyles.cardDesc}>
          {news.desc}
        </Typography>
        <Typography variant="caption" sx={newsBoxStyles.cardMeta}>
          BY {news.author} &nbsp; {news.date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsBox;