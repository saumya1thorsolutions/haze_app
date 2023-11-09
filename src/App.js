import logo from "./logo.svg";
import "./App.css";
import CustomRoutes from "./CustomRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <>
      <Router>
        <Routes>
          {CustomRoutes.map((route, index) => {
            if (route.secure) {
              return (
                <Route
                  key={index}
                  path={`${process.env.PUBLIC_URL}/`}
                  component={() => (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  )}
                />
              );
            } else {
              return (
                <Route
                  key={index}
                  path={process.env.PUBLIC_URL + route.path}
                  exact={route.exact || false}
                  element={
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  }
                />
              );
            }
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
