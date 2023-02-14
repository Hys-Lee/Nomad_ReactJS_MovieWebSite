
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Movie/router/Home"
import Details from "./Movie/router/Details"

function App() {

  return (
    <Router>
      <Switch>{/* // Swtich는 Route를 찾는데, Route는 url의 '/~~'와 같이
        //슬래시를 포함하는 뒷부분을 의미한다.*/}
        <Route path="/movie/:movie_id" > {/* ':'을 붙이면 url에서 해당 위치에 있는 값을 변수로 받을 수 있다. */}
          {/*ㄴ> 여기서 id라는 변수에 movie/(이부분)}에서 (이부분)에 해당하는 값을 저장할 수 있다. useParams를 쓰면. ~*/}
          <Details />
        </Route>

        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
