import MovieCard from "./movieCard"

function main() {
    return (
        <>
            <header className='bg-white w-screen h-[600px] mb-24'>
                <img className='object-cover w-[100%] h-[100%]' src='https://image.tmdb.org/t/p/w500/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg' alt='인기영화포스터' />
            </header>

            <main>
                <div className="flex flex-wrap justify-evenly text-white">
                    <MovieCard />
                </div>
            </main>
        </>
    )
}

export default main
