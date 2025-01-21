import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import axios from "axios"

function movieDetail() {
    const [data, setData] = useState({})

    const params = useParams().id
    const apiInfo = useSelector(state => state.apiDataInfoReducer)
    const account_id = useSelector(state => state.accountIDReducer)

    console.log(apiInfo)

    const url = apiInfo.base_url
    useEffect(() => {
        const detail = async () => {
            setData((await axios.get(`https://api.themoviedb.org/3/movie/${params}`, account_id)).data)
        }
        detail()
    }, [])

    return (
        <div className="bg-slate-900 flex flex-col items-center justify-center h-screen">
            {/* <div className="relative"></div> */}
            {/* <img className='bg-black object-cover w-[90%] h-[40vh]' src={url + 'w1280' + data.backdrop_path} /> */}
            <main className="flex w-[70%] h-[500px] max-w-5xl">
                <img className='object-fill w-[300px] h-[400px]' src={url + 'original' + data.poster_path} />

                <div id='movie-info' className="text-white p-[0_20px]">
                    <p id='title' className="text-[3.5rem] pb-3">{data.title}</p>
                    <ul id='genres' className="pb-4">
                        {data.genres?.map((item, i) => {
                            return (
                                <span className='bg-gray-600 rounded-lg p-1 m-1 text-center' key={i}>{item.name}</span>
                            )
                        })}
                    </ul>
                    <p id='star' className="pb-3">{data.average}</p>
                    <p className="text-white">{data.overview}</p>
                </div>
            </main >
        </div >
    )
}

export default movieDetail
