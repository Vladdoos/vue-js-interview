export default {
    actions:{
        async fetchUsers(item) {
            const res = await fetch('',{
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': "*",
                        'Access-Control-Allow-Credentials': true
                    }
                }
            );
            const users = await res.json();
            item.commit('updateUsers', users)
        },

    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        },
        filterUsers (state, users) {
            state.filteredUsers = users
        }
    },
    state: {
        users: [
            { header: 'List' },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                title: 'Brunch this weekend?',
                subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                country: 'russia',
                score: 20,
                address:{ value: 'Город Москва, ул. Тимирязевская д.1а',
                    visible: false
                }
            },
            { divider: true, inset: true },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
                country: 'usa',
                score: 40,
                address:{ value: 'Город Лос-Анджелес, ул. Малхолланд Драйв д. 22',
                    visible: false
                }
            },
            { divider: true, inset: true },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                title: 'Oui oui',
                subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
                country: 'russia',
                score: 9,
                address:{ value: 'Город Москва, ул. Заречная д.2а',
                    visible: false
                }
            },
            { divider: true, inset: true },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                title: 'Birthday gift',
                subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
                country: 'usa',
                score: 5,
                address:{ value: 'Город Лос-Анджелес, ул. Родео Драйв д. 55',
                    visible: false
                }
            },
            { divider: true, inset: true },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                title: 'Recipe to try',
                subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                country: 'russia',
                score: 30,
                address:{ value: 'Город Санкт-Петербург, ул. пр-т Вернадского д.22',
                    visible: false
                }
            },
        ],
        filteredUsers: null
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getFilterUser (state) {
            return state.filteredUsers
        }

    }
}
