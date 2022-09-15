import { configureStore } from "@reduxjs/toolkit";
import amountReducer from './stores/amount'
import menuReducer from './stores/menu'
import settingReducer from './stores/setting'

const store = configureStore({
    reducer: {
        amount: amountReducer,
        menu: menuReducer,
        setting: settingReducer
    }
})

export default store