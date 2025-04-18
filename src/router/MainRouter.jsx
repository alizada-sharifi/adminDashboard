import MainLayout from "../layouts/MainLayout";
import {
  Analytics,
  NotFound,
  Order,
  Overview,
  Products,
  Sales,
  Setting,
  Users,
} from "../pages";
import ROUTES from "./routePath";

const MainRouter = [
  {
    path: ROUTES.OVERVIEW,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: ROUTES.PRODUCTS,
        element: <Products />,
      },
      {
        path: ROUTES.USERS,
        element: <Users />,
      },
      {
        path: ROUTES.SALES,
        element: <Sales />,
      },
      {
        path: ROUTES.ORDERS,
        element: <Order />,
      },
      {
        path: ROUTES.ANALYTICS,
        element: <Analytics />,
      },
      {
        path: ROUTES.SETTING,
        element: <Setting />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
export default MainRouter;
