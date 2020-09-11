import React, { lazy, Suspense } from "react";
// import asyncComponent from 'hoc/asyncRender'
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import AuthRoutes from "globals/hoc/private";
import { Spin } from "antd";

const Home = lazy(() => import("modules/Home"));
const FamilyDirectory = lazy(() => import("./modules/FamilyDirectory"));
const Contact = lazy(() => import("./modules/Contact"));
const History = lazy(() => import("./modules/History"));
const Admin = lazy(() => import("./modules/admin"));
//const Admin = lazy(() => import("./modules/admin"));
//const Gallary = lazy(() => import("./modules/Gallery"));
const Ahmedabadzone = lazy(() => import("./modules/Ahmedabadzone"));
const redirect = pathname => () => {
  return <Redirect to={{ pathname }} />;
};

export const Routes = props => {
  return (
    <main>
      <Router>
        <Suspense
          fallback={
            <div
              style={{
                width: "100%",
                height: "100%",
                margin: "auto",
                paddingTop: 50,
                textAlign: "center"
              }}
            >
              <Spin />
            </div>
          }
        >
          <Switch>
            {/* <Route exact path="/home" render={() => <Home {...props} />} /> */}

            <Route path="/" component={AuthRoutes(ContentRoute)} />
          </Switch>
        </Suspense>
      </Router>
    </main>
  );
};

const ContentRoute = props => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
            paddingTop: 50,
            textAlign: "center"
          }}
        >
          <Spin />
        </div>
      }
    >
      <Switch>
        <Route exact path="/" render={redirect("home")} />
        <Route exact path="/home" render={() => <Home {...props} />} />
        <Route exact path="/family-directory"render={() => <FamilyDirectory {...props} />}
        />
        <Route exact path="/contact-us" render={() => <Contact {...props} />} />
        <Route exact path="/history" render={() => <History {...props} />} />
        <Route exact path="/history1" render={() =><Admin {...props} />} />
        <Route exact path="/history2" render={() =><Admin {...props} />} />
        {/*<Route exact path="/gallary" render={() =><Gallary {...props} />} />*/} 
        <Route exact path="/ahmedabad/:zone_id"render={() => <Ahmedabadzone {...props} />}
        />
        {/* <Route exact path="/*" render={() => <NotFound {...props} />} /> */}
      </Switch>
    </Suspense>
  );
};
export default Routes;
