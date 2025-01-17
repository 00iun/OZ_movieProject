import { combineReducers, legacy_createStore } from 'redux'

export const movieList = (lists) => {
    return {
        type: 'movieList',
        payload: lists
    }
}

export const movieDetail = (lists) => {
    return {
        type: 'movieDetail',
        payload: lists
    }
}

export const movieListReducer = (state = [], action) => {
    switch (action.type) {
        case 'movieList':
            return state = action.payload
        default:
            return state
    }
}
export const movieDetailReducer = (state = [], action) => {
    switch (action.type) {
        case 'movieDetail':
            return state = action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    movieListReducer, movieDetailReducer
})

export const store = legacy_createStore(rootReducer)