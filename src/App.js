import "./App.css";
import CustomRoutes from "./CustomRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";
import Authenticate from "./pages/Authenticate";

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
      }
    });
    
    const storedData = localStorage.getItem('access_token');
    if(storedData){
      dispatch(loginUser(storedData));
    }
  }, []);

  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.user.isLoading);
  return (
    <Router>
      <>
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {user ? (
              <Routes>
                {CustomRoutes.map((route, index) => {
                  if (route.path === "/") {
                    return (
                      <Route
                        key={index}
                        path="/home"
                        element={
                          <route.layout {...props}>
                            <route.component {...props} />
                          </route.layout>
                        }
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
            ) : (
              <Authenticate />
            )}
          </>
        )}
      </>
    </Router>
  );
}

export default App;
