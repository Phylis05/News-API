import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Headlines from "./components/Headlines";
import Sources from "./components/Sources";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/sources">
          <Sources />
        </Route>
        <Route path="/headlines">
          <Headlines />
        </Route>
      </Router>
    </div>
  );
}

export default App;
