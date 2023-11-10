import "./App.css";
import CustomRoutes from "./CustomRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";
import Authenticate from "./pages/Authenticate";
import Home from "./pages/Home";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {user ? (
            <>
              <Router>
                <Routes>
                  {CustomRoutes.map((route, index) => {
                    if (route.path === "/") {
                      console.log("redirect to home");
                      return (
                        <Route path="/home" element={
                          <route.layout {...props}>
                            <route.component {...props} />
                          </route.layout>
                        } />
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
          ) : (
            <Authenticate />
          )}
        </>
      )}
    </>
  );
}

export default App;
