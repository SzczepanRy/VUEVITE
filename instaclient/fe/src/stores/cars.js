import { getCars } from "../api/api.js"

const cars = {

    //state
    state() {
        return {
            carsList: [],
            carsLoading: false,
            carsError: null
        }
    },

    //mutations czyli setters
    mutations: {
        SET_CARS_LIST(state, newCars) {
            state.carsList = newCars
        }
    },

    //getters
    getters: {
        GET_CARS_LIST(state) {
            return state.carsList
        }
    },

    // tu zapytania do serwera z pomocą naszego api
    actions: {


        async FETCH_CARS({ state, commit }) {

            // najpierw ustawiamy stan ładowania na true 

            commit("SET_CARS_LOADING", true)

            // potem wywołujemy funkcję z api, która
            // odbiera dane z serwera (poprzez axios) i ustawia listę cars w store
            // w razie błędu ustawia error w store (catch)
            // niezależnie od błędu lub jego braku (finally), kończy loading

            try {
                const data = await getCars()
                console.log("fetch", data);
                commit("SET_CARS_LIST", data)
            }
            catch (err) {
                console.log("err", err);
                commit("SET_CARS_ERROR", "server error!!!")
            }
            finally {
                console.log("finally");
                commit("SET_CARS_LOADING", false)
            }
        }
    }

}

export default cars