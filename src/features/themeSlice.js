import { createSlice } from '@reduxjs/toolkit'

// dark theme, neutral, profession, no frills
const theme1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'https://www.placecage.com/200/300'
}

// pink, bright, joyful theme
const theme2 = {
    darkMode: false,
    color1: '#6E44FF',
    color2: '#B892FF',
    color3: '#FFC2E2',
    color4: '#FF90B3',
    color5: '#EF7A85',
    photo: 'https://placekitten.com/200/300'
}

const initialState = theme1

// what ways does data change and how does it start out as?
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setDarkTheme: (state, action) => {
            return {...theme1}
        },
        setLightTheme: (state, action) => {
            return {...theme2}
        }
    }
})


// export those as action creators
export const { setDarkTheme, setLightTheme } = themeSlice.actions

export default themeSlice.reducer
