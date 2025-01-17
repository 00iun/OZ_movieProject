import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function movieCard() {
    const APIlist = useSelector(state => state.movieListReducer)
    const navigate = useNavigate()

    return (
        <>
            {APIlist.map((item) => {
                return (
                    <button onClick={() => {
                        navigate(`/details/${item.id}`)
                    }} className="flex flex-col items-center h-[400px] m-[20px_8px] mb-20" key={item.id}>
                        < img className="object-fill h-[350px]" src={item.poster} alt={item.title} />
                        <p>{item.title}</p>
                        <p>{item.average}</p>
                    </button>
                )
            })}
        </>
    )
}

export default movieCard;