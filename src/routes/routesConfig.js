import HomePage from "@containers/HomePage";
import PeoplePage from "@containers/PeoplePage";
import PersonPage from "@containers/PersonPage";
import NotFoundPage from "@containers/NotFoundPage";
import FavotitesPage from "@containers/FavotitesPage";
import SearchPage from "@containers/SearchPage";
import ErrorMessage from "@components/ErrorMessage";

const routesConfig = [
  { path: "/", element: <HomePage /> },
  { path: "/people", element: <PeoplePage /> },
  { path: "/favorites", element: <FavotitesPage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/fail", element: <ErrorMessage /> },
  { path: "/people/:id", element: <PersonPage /> },
  { path: "/not-found", element: <NotFoundPage /> },
  { path: "*", element: <NotFoundPage /> },
];
export default routesConfig;
