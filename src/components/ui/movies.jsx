export const Movies = ({ movies }) => {
    console.log(movies)

    return (
        <div>
            <div className='p-10'>
                <p>{movies.categorie}</p>
                <img src={movies.image} alt={movies.title} className='w-[300px] h-[300px]' />
            </div>
        </div>
    )
}
