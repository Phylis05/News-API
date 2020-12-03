import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import useFetch from "../api/sources";
import Searchbar from "./Searchbar";

const url =
  "https://newsapi.org/v2/sources?apiKey=213327409d384371851777e7c7f78dfe";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: 250,
  },
  media: {
    height: 150,
  },
  cards: {
    display: "flex",
  },
  sourceList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "20px",
    width: "90%",
    margin: "auto",
    listStyle: "none",
  },
  button: {
    position: "relative",
    bottom: "20px",
  },
  readMore: {
    height: "300px",
  },
});

export default function NewsCard() {
  const classes = useStyles();

  const sources = useFetch();
  console.log(sources.sources);
  const sourcesOnly = sources;

  return (
    <div className="news-card">
      <h2 className="news-header">News Daily</h2>
      <Searchbar />
      <ul className={classes.sourceList}>
        {sourcesOnly.length > 0 ? (
          sourcesOnly.map((item) => (
            <li>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography component="h6">{item.name}</Typography>
                    <Typography component="h6">{item.description}</Typography>
                    <Typography component="h6">{item.url}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className={classes.button}
                      size="small"
                      target="_blank"
                      href={item.url}
                      color="primary"
                    >
                      Read More
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </li>
          ))
        ) : (
          <h1>Loading more...</h1>
        )}
      </ul>
    </div>
  );
}
