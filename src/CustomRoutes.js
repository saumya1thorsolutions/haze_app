import Layout from './layouts';
import Page from './pages';
const CustomRoutes = [
    {
        path: "/home",
        exact: true,
        layout: Layout.DefaultLayout,
        component: Page.Home,
      },
      {
        path: "/:page",
        exact: true,
        layout: Layout.DefaultLayout,
        component: Page.Home,
      },
    {
      path: "/",
      exact: true,
      layout: Layout.LoginLayout,
      component: Page.Authenticate,
    },
    {
      path: "*",
      exact: true,
      layout: Layout.LoginLayout,
      component: Page.Authenticate,
    },
  ];
  export default CustomRoutes;