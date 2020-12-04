import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import useFetch from "../api/sources";
// import { FaAlignRight } from "react-icons/fa";
// import "../App.css";
import navList from "./navRoutes";

const useStyles = makeStyles({
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    alignItems: "center",
    backgroundColor: "#2a3660",
    height: "60px",
  },
  listLinks: {
    color: "#e25da4",
    listStyle: "none",
  },
});

export default function Navbar() {
  const classes = useStyles();
  const data = useFetch();
  const sources = data.sources;
  const [toggle, setToggle] = useState(false);

  const Toggle = () => {
    setToggle({ toggle: !toggle });
  };

  return (
    <div className="">
      {/* <button type="submit" onClick={Toggle}>
        <FaAlignRight />
      </button> */}
      <ul className={classes.navLinks}>
        {navList.map((objLink, i) => {
          return (
            <li>
              <a href={objLink.link} className={classes.listLinks}>
                {objLink.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
