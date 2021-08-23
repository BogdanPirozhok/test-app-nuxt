export default {
    state() {
        return {
            items: [
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    name: 'John Doe',
                    position: 'CEO'
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    name: 'John Smith',
                    position: 'CCD'
                }
            ]
        };
    },
    getters: {
        GET_ITEMS: (state) => state.items,
        GET_QUANTITY: (state) => state.items.length,
    },
    mutations: {
        RM_ITEM(state, payload) {
            state.items.splice(payload, 1);
        },
        ADD_ITEM(state, payload) {
            state.items.push(payload);
        }
    },
    actions: {
        CREATE({ commit }, payload) {
            commit('ADD_ITEM', payload);
        },
        DELETE({ commit }, payload) {
            commit('RM_ITEM', payload);
        }
    }
};
