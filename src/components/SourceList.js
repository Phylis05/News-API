import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import useFetch from "../api/sources";
import Searchbar from "./Searchbar";
import SourceFilter from "./sourceFilter";

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
  itemTitle: {
    fontWeight: "bold",
    paddingBottom: "10px",
  },
});

export default function SourceList() {
  const classes = useStyles();
  const data = useFetch();
  const sources = data.sources;
  const [filterSources, setSources] = useState(sources);
  const [category, setCategory] = useState("ALL");
  const [state, setState] = useState("");

  const filtered = [];
  sources.forEach((item) => {
    filtered.push(item.category);
  });
  const filteredArray = Array.from(new Set(filtered));

  useEffect(() => {
    let filteredSources = sources;
    if (category !== "ALL") {
      filteredSources = filteredSources.filter((product) => {
        return product.category === category;
      });
    }
    setSources(filteredSources);
  }, [category, sources]);

  const handleFilterChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <div>
      <SourceFilter
        handleFilter={handleFilterChange}
        filteredArray={filteredArray}
      />
      <Searchbar sources={sources} />
      <ul className={classes.sourceList}>
        {filterSources.length > 0 ? (
          sources
            .filter((item) => {
              return category === "ALL" ? true : item.category === category;
            })
            .map((item) => (
              <li>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <Typography component="h6" className={classes.itemTitle}>
                        {item.name}
                      </Typography>
                      <Typography component="p">{item.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        className={classes.button}
                        size="small"
                        target="_blank"
                        href={item.url}
                      >
                        Learn More
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
