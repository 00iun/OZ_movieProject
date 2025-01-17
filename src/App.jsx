import axios from 'axios'
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import APImovieList from "./assets/data/movieListData.json"
import APImovieDetail from "./assets/data/movieDetailData.json"
import { useDispatch } from 'react-redux'
import { movieList } from './assets/redux/redux'

import Main from "./component/main"
import Detail from "./component/movieDetail"
import Layout from "./component/layout"
import Test from "./test"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // navigate('/')

    const listItem = APImovieList.results
    // console.log(listItem)
    const dataAll = []
    const url = "https://image.tmdb.org/t/p/w500"

    listItem.forEach((item) => {
      // console.log('item=== ', item)
      const data = {
        id: item.id,
        title: item.title,
        overview: item.overview,
        genres: item.genre_ids,
        average: item.vote_average,
        poster: url + item.poster_path,
        backdrop: url + item.backdrop_path
      }
      // console.log('data== ', data)
      dataAll.push(data)
    })

    dispatch(movieList(dataAll))
  }, [])

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
