import Vue from 'vue'
import Vuex from 'vuex'
import Users from './modules/users'
import Preloader from "@/store/modules/preloader";
import Items from "@/store/modules/items";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Users,
        Preloader,
        Items
    }
})
