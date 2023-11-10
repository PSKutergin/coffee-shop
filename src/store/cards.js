const cards = {
    state: {
        bestsellers: [],
        coffee: [],
        goods: [],
        searchValue: '',
        sortValue: '',
    },
    mutations: {
        setCoffeeData(state, data) {
            state[data.name] = data.data
        },
        setSearchValue(state, value) {
            state.searchValue = value
        },
        setSortValue(state, value) {
            state.sortValue = value
        },
    },
    actions: {
        setCoffeeData({ commit }, data) {
            commit('setCoffeeData', data)
        },
        setSearchValue({ commit }, value) {
            commit('setSearchValue', value)
        },
        setSortValue({ commit }, value) {
            commit('setSortValue', value)
        },
    },
    getters: {
        getBestsellers(state) {
            return state.bestsellers
        },
        getCoffee(state) {
            return state.coffee.filter(item => item.name
                .toLowerCase()
                .includes(state.searchValue.toLowerCase())
            ).filter(item => item.country
                .toLowerCase()
                .includes(state.sortValue.toLowerCase())
            )
        },
        getGoods(state) {
            return state.goods
        },
        getProductById(state) {
            return (name, id) => {
                return state[name].find((card) => card.id === +id)
            }
        },
        getSearchValue(state) {
            return state.searchValue
        }
    }
}

export default cards