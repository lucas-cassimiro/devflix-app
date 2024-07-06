import { createBrowserRouter } from 'react-router-dom'

import { Movies } from '../pages/movies'
import { MoviesDetails } from '../pages/movies-details'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Movies />
    },
    {
        path: "/movies/:id",
        element: <MoviesDetails />
    }
]);
