import { useParams } from 'react-router-dom'

import { movies } from '../../mocks/movies'

export const MoviesSynopsis = () => {
    const { id } = useParams()
    const movie = movies.find(movie => movie.id === parseInt(id))
    
    return (
        <div>
            <img src={movie.image} alt={movie.title} className='h-[350px] w-[300px]'/>
            <p>{movie.title}</p>
            <p>{movie.description}</p>
        </div>
    )
}
