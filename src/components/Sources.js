import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchSources from "../api/sources";

function Sources() {
  //   const [sources, setSources] = useState([]);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.sources);
  console.log(data);

  useEffect(() => {
    dispatch(fetchSources());
  }, []);

  return data.isLoading ? (
    <h1>Loading..</h1>
  ) : (
    <div>
      <h2>News Sources</h2>
      {data.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}

export default Sources;
