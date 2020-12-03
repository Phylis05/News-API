import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ReadMoreReact from "read-more-react";
import useFetch from "../api/api";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=213327409d384371851777e7c7f78dfe";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 350,
  },
  media: {
    height: 150,
  },
  cards: {
    display: "flex",
  },
  newsList: {
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

function Headlines() {
  const classes = useStyles();
  const headlines = useFetch(url);
  console.log(headlines);
  const headlinesOnly = headlines.articles;

  return (
    <div className="news-card">
      <h2 className="news-header">News Daily</h2>
      <ul className={classes.newsList}>
        {headlinesOnly.length > 0 ? (
          headlinesOnly.map((item) => (
            <li>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.urlToImage}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography component="h6">
                      <ReadMoreReact
                        text={item.title}
                        min={10}
                        ideal={40}
                        max={50}
                        readMoreText=""
                      />
                    </Typography>

                    <ReadMoreReact
                      text={item.description}
                      min="80"
                      ideal={100}
                      max={200}
                      readMoreText="see more"
                      className={classes.readMore}
                    />
                  </CardContent>
                </CardActionArea>
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

export default Headlines;
