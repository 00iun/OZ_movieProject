import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function movieCard() {
    const APIlist = useSelector(state => state.movieListReducer)
    const apiInfo = useSelector(state => state.apiDataInfoReducer)
    const navigate = useNavigate()

    // console.log(apiInfo)
    // console.log(APIlist)

    return (
        <>
            {APIlist.map((item) => {
                if (!item.adult) {
                    const img = apiInfo.base_url + apiInfo.poster_sizes[6] + item.poster
                    return (
                        <button onClick={() => {
                            navigate(`/details/${item.id}`)
                        }} className="flex flex-col items-center h-[400px] m-[20px_8px] mb-20" key={item.id}>
                            < img className="object-fill h-[350px]" src={img} alt={item.title} />
                            <p>{item.title}</p>
                            <p>{item.average}</p>
                        </button>
                    )
                }
            })}
        </>
    )
}

export default movieCard;