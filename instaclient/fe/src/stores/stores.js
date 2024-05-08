import { createStore } from "vuex"

import cars from './cars.js'

const modules = {
    cars,
    // kolejne moduły store

}

export default createStore({
    modules,
})
