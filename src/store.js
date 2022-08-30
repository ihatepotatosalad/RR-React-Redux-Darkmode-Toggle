import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './dataSlice'
import { logger } from './middleware'

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [logger]
})
