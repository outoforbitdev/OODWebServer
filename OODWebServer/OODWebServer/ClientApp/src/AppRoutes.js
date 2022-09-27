import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Account from "./Applications/Account/Account";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    //{
    //    path: '/counter',
    //    element: <Counter />
    //},
    //{
    //    path: '/fetch-data',
    //    element: <FetchData />
    //},
    {
        path: '/account',
        element: <Account />
    }
];

export default AppRoutes;
