import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Headlines from "./components/Headlines";
import Navbar from "./components/Navbar";
import SourcesList from "./components/SourceList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/sources">
          <SourcesList />
        </Route>
        <Route path="/headlines">
          <Headlines />
        </Route>
      </Router>
    </div>
  );
}

export default App;
