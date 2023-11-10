const cards = {
    state: {
        bestsellers: [],
        coffee: [],
        goods: [],
    },
    mutations: {
        setCoffeeData(state, data) {
            state[data.name] = data.data
        }
    },
    actions: {
        setCoffeeData({ commit }, data) {
            commit('setCoffeeData', data)
        }
    },
    getters: {
        getBestsellers(state) {
            return state.bestsellers
        },
        getCoffee(state) {
            return state.coffee
        },
        getGoods(state) {
            return state.goods
        },
        getProductById(state) {
            return (name, id) => {
                return state[name].find((card) => card.id === +id)
            }
        }
    }
}

export default cards