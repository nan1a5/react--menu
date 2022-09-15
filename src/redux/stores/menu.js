import { createSlice } from "@reduxjs/toolkit";
// import { adddiscount, addsubtotal } from '../redux/modules/amount'

const initialState = {
    menulist: [{
        id: '039',
        name: '炸鸡汉堡',
        num: 2,
        price: 39.99
    },{
        id: '040',
        name: '鲜榨橙汁',
        num: 1,
        price: 3.00
    }]
}

const findById = (obj, id) => {
    for (const k in obj) {
        if (Object.hasOwnProperty.call(obj, k)) {
            const e = obj[k]
            if (e.id === id) {
                return k
            }
        }
    }
    return -1
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        updatenum: (state, {payload}) => {
            console.log(payload.id)
            const k = findById(state.menulist, payload.id)
            k>-1?state.menulist[k].num += payload.num:console.log('错误: 不存在')
            console.log(state.menulist[k].num)
        },
        changenum: (state, {payload}) => {
            const k = findById(state.menulist, payload.id)
            k>-1?state.menulist[k].num = payload.num:console.log('错误: 不存在')
        },
        additem: (state, {payload}) => {
            const k = findById(state.menulist, payload.id)
            if(k < -1) {
                state.menulist.push(payload.item)
            }
        }
    }
})


export const { updatenum, additem } = menuSlice.actions
export default menuSlice.reducer