import Layout from './layouts';
import Page from './pages';
const CustomRoutes = [
    {
      path: "/",
      secure: false,
      exact: true,
      layout: Layout.DefaultLayout,
      component: Page.Authenticate,
    },
    {
      path: "*",
      secure: false,
      exact: true,
      layout: Layout.DefaultLayout,
      component: Page.Login,
    },
  ];
  export default CustomRoutes;