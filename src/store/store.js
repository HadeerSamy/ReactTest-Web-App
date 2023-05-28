
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reduces/rootReducers'

const store = configureStore({
    reducer:rootReducer
})
export default store