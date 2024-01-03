import Layout from "./layouts";
import Page from "./pages";
const CustomRoutes = [  
  {
    path: "/saved-designs",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.SavedDesigns,
  },
  {
    path: "/printing-methods",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.PrintingMethods,
  },
  {
    path: "/theme-builder",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.ThemeBuilder,
  },
  {
    path: "/pricing-rules",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.PricingRules,
  },
  {
    path: "/my-products",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.MyProducts,
  },
  {
    path: "/orders",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.YourOrders,
  },
  {
    path: "/home",
    exact: true,
    layout: Layout.DashboardLayout,
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
