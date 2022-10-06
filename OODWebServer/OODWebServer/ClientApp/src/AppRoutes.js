import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Index } from "./Applications/Index/Index";
import Account from "./Applications/Account/Account";

const AppRoutes = [
    {
        index: true,
        element: <Index />
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
    },
    {
        path: '/*',
        element: <Index />
    }
];

export default AppRoutes;
