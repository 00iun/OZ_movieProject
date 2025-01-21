import { combineReducers, legacy_createStore } from 'redux'

export const movieList = (lists) => {
    return {
        type: 'movieList',
        payload: lists
    }
}

export const apiDataInfo = (info) => {
    return {
        type: 'apiDataInfo',
        payload: info
    }
}

export const movieDetail = (lists) => {
    return {
        type: 'movieDetail',
        payload: lists
    }
}

export const accountID = (key) => {
    return {
        type: 'accountID',
        payload: key
    }
}

// Reducer
// Reducer
// Reducer
// Reducer
// Reducer
export const movieListReducer = (state = [], action) => {
    switch (action.type) {
        case 'movieList':
            return state = state.concat(action.payload)
        default:
            return state
    }
}

export const apiDataInfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'apiDataInfo':
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

export const accountIDReducer = (state = '', action) => {
    switch (action.type) {
        case 'accountID':
            return state = action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    movieListReducer, movieDetailReducer, apiDataInfoReducer, accountIDReducer
})

export const store = legacy_createStore(rootReducer)