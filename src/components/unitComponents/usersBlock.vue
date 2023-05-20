<template >
  <v-col
      cols="12"
      md="4"
  >
    <v-card
        max-width="450"
        class="mx-auto"
    >
      <v-list three-line>
        <template v-for="(item, index) in getFiltersUsers">
          <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
          ></v-subheader>

          <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
          ></v-divider>

          <v-list-item
              v-else
              :key="item.title"
          >
            <v-list-item-avatar>
              <v-img :src="item.avatar" @click="showAddress(item)"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              <v-list-item-action-text><b>Страна:</b> {{item.country}}</v-list-item-action-text>
              <v-list-item-action-text><b>Количество баллов:</b> {{item.score}}</v-list-item-action-text>
              <transition name="fade">
                <v-list-item-action-text v-if="item.address.visible"><b>Адрес:</b> {{item.address.value}}</v-list-item-action-text>
              </transition>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>

  </v-col>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: "usersBlock",
  data () {
    return {
      visibleAddress: true,
    }
  },
  computed: {
    ...mapGetters(['getUsers', 'getVariants', 'getFilterUser', 'getItems', 'getVisiblePreloader', 'getCountry', 'getScore']),
    // Вывод фильтрованных значений
    getFiltersUsers () {
      this.createItems()
      this.showAllUsers ()

       if (Number(this.getVariants) === 1) {
         this.filterScore(this.getUsers)
         this.deleteItems()
      }
       if (Number(this.getVariants) === 2) {
        this.filtersCountry(this.getUsers)
         this.deleteItems()
      }
      else if(!this.getCountry && this.getScore) {
        this.filterScore(this.getUsers)
      }
      else if(this.getCountry && !this.getScore) {
        this.filtersCountry(this.getUsers)
      }
      else if(this.getCountry && this.getScore) {

        if (this.getItems.slice(0, 2).includes(this.getVariants.slice(0, -1))) {
          this.filtersCountry(this.getUsers)
          this.filterScore(this.getFilterUser)
        }
        else if (this.getItems.slice(2, 4).includes(this.getVariants.slice(0, -1))) {
          this.filterScore(this.getUsers)
          this.filtersCountry(this.getFilterUser)
        }
      }
      return this.getFilterUser
    },
  },
  methods: {
    ...mapMutations(['filterUsers', 'updateScore', 'updateCountry']),
    ...mapActions(['fetchUsers']),
    // Фильтр по score
    filterScore (users) {
      if (this.getItems.slice(2, 4).includes(this.getScore)) {
        this.filterUsers(users.filter(user => {
              if (Number(this.getScore.slice(2, 4)) === 20) {
                return user.score > 20;
              } else {
                return user.score < 10
              }
            })
        )
      }
    },
    // Фильтр по country
    filtersCountry (users) {
      if (this.getItems.slice(0, 2).includes(this.getCountry)) {
        this.filterUsers(users.filter(user => {
              return user.country === this.getCountry
            })
        )
      }
    },
    // Распределение по country и score
    createItems () {
      if (Number(this.getVariants[this.getVariants.length - 1]) === 1) {
        this.updateCountry(this.getVariants.slice(0, -1))
      } if (Number(this.getVariants[this.getVariants.length - 1]) === 2) {
        this.updateScore(this.getVariants.slice(0, -1))
      }
    },
    // удаление items
    deleteItems () {
      if (Number(this.getVariants) === 1) {
        this.updateCountry(null)
      }
      if (Number(this.getVariants) === 2) {
        this.updateScore(null)
      }
      this.showAllUsers ()
    },
    // Вывод всех пользователей
    showAllUsers () {
      if (this.getCountry === null && this.getScore === null) {
        this.filterUsers(this.getUsers)
      }
    },
    showAddress (item) {
      item.address.visible = !item.address.visible
    },
  },
  mounted() {
    // вывод данных из внешнего api
    // this.fetchUsers()
  },

}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
