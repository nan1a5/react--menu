import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'sun',
    selected: '店长推荐',
    setting: false
}


export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme === 'sun'?state.theme='luna':state.theme='sun'
        },
        changeSelected: (state, {payload}) => {
            state.selected = payload.selected
        },
        toggleSetting: (state) => {
            state.setting = !state.setting
        }
    }
})


export const {toggleTheme, changeSelected, toggleSetting} = settingSlice.actions
export default settingSlice.reducer