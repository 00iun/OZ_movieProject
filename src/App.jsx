import axios from 'axios'
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { movieList, apiDataInfo, accountID } from './assets/redux/redux'

import Main from "./component/main"
import Detail from "./component/movieDetail"
import Layout from "./component/layout"
import Test from "./test"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const Movies = async () => {
      const account_id = import.meta.env.VITE_MOVIE_ACCESS_TOKEN
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${account_id}`
        }
      };

      let apiInfo = (await axios.get('https://api.themoviedb.org/3/configuration', options)).data.images
      const response = (await axios.get(`https://api.themoviedb.org/3/movie/popular`, options)).data.results
      console.log(response)
      console.log(apiInfo)

      const dataAll = []
      response.forEach((item) => {
        const inputData = {
          id: item.id,
          title: item.original_name,
          adult: item.adult,
          overview: item.overview,
          genres: item.genre_ids,
          average: item.average,
          poster: item.poster_path,
        }
        dataAll.push(inputData)
      })
      dispatch(apiDataInfo(apiInfo))
      dispatch(accountID(options))
      dispatch(movieList(dataAll))
    }


    Movies();
  }, []);

  return (
    <div className='bg-slate-900'>

      <Routes>
        <Route path='/test' element={<Test />} />
        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
          <Route path='/details/:id' element={<Detail />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
