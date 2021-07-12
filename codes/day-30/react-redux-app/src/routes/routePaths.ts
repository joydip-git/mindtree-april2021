import ContactDetail from "../components/ContactDetail";
import ContactList from "../components/ContactList";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";

export const routePaths = [
    {
        routeId: 1,
        routePath: '/',
        routeComponent: Home
    },
    {
        routeId: 2,
        routePath: '/home',
        routeComponent: Home
    },
    {
        routeId: 3,
        routePath: '/contacts',
        routeComponent: ContactList
    },
    {
        routeId: 4,
        routePath: '/contacts/view/:id',
        routeComponent: ContactDetail
    },
    {
        routeId: 5,
        routePath: '*',
        routeComponent: PageNotFound
    }
]