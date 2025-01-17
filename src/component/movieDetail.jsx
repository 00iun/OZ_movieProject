import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import dataDetail from "./../assets/data/movieDetailData.json"

function movieDetail() {
    const params = useParams().id
    const dispatch = useDispatch()
    const url = "https://image.tmdb.org/t/p/w500"

    const data = {
        title: dataDetail.title,
        genres: dataDetail.genres,
        average: dataDetail.vote_average,
        overview: dataDetail.overview,
        backdrop: url + dataDetail.backdrop_path,
        poster: url + dataDetail.poster_path
    }
    console.log(data)

    return (
        <div className="bg-slate-900 flex flex-col items-center justify-center h-screen">
            {/* <div className="relative"></div> */}
            {/* <img className='bg-black object-cover w-[90%] h-[40vh]' src={data.backdrop} /> */}
            <main className="flex w-[70%] h-[500px] max-w-5xl">
                <img className='object-fill w-[300px] h-[400px]' src={data.poster} />

                <div id='movie-info' className="text-white p-[0_20px]">
                    <p id='title' className="text-[3.5rem] pb-3">{data.title}</p>
                    <ul id='genres' className="pb-4">
                        {data.genres.map((item, i) => {
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
