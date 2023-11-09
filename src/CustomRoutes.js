import Layout from './layouts';
import Page from './pages';
const CustomRoutes = [
    {
        path: "/home",
        secure: false,
        exact: true,
        layout: Layout.DefaultLayout,
        component: Page.Home,
      },
      {
        path: "/:page",
        secure: false,
        exact: true,
        layout: Layout.DefaultLayout,
        component: Page.Home,
      },
    {
      path: "/",
      secure: false,
      exact: true,
      layout: Layout.LoginLayout,
      component: Page.Authenticate,
    },
    {
      path: "*",
      secure: false,
      exact: true,
      layout: Layout.LoginLayout,
      component: Page.Authenticate,
    },
  ];
  export default CustomRoutes;