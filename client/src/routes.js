import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import FilmFinder from "./pages/FilmFinder"
import FilmPage from "./pages/FilmPage"
import PersonPage from "./pages/PersonPage"
import NominationPage from "./pages/NominationPage"
import AwardPage from "./pages/AwardPage"
import { ADMIN_ROUTE, AWARD_ROUTE, PERSON_ROUTE, FILM_FINDER_ROUTE, FILM_ROUTE, LOGIN_ROUTE, NOMINATION_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: <Admin />
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Element: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        Element: <Auth />
    },
    {
        path: FILM_FINDER_ROUTE,
        Element: <FilmFinder />
    },
    {
        path: FILM_ROUTE + '/:id',
        Element: <FilmPage />
    },
    {
        path: PERSON_ROUTE + '/:id',
        Element: <PersonPage />
    },
    {
        path: NOMINATION_ROUTE + '/:id',
        Element: <NominationPage />
    },
    {
        path: AWARD_ROUTE + '/:id',
        Element: <AwardPage />
    },
    
]