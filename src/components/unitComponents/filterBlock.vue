<template>
  <v-col
      cols="12"
      md="4"
      class="container-col"
  >
    <v-select
        v-model="variant"
        @input="showPreloader()"
        :items="getItems.slice(0, 2)"
        clearable
        label="Filter by country"
        @click="getVariant(1)"
        @click:clear="getVariant(1)"
    ></v-select>

    <v-select
        v-model="variant"
        :items="getItems.slice(2, 4)"
        clearable
        @input="showPreloader()"
        label="Filter by score"
        @click="getVariant(2)"
        @click:clear="getVariant(2)"
    ></v-select>
  </v-col>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "filterBlock",
  data: () => ({
    number: null
  }),
  computed: {
    ...mapGetters(['getItems']),
    variant: {
      get () {
        return this.$store.state.variant;
      },
      set (value) {
        this.$store.commit('updateVariant', value + this.number)
      }
    }
  },
  methods: {
    getVariant (item) {
      this.number = item
    },
    // Вызов прелоадера
    showPreloader () {
      this.$store.commit("onPreloader");
      setTimeout(() => this.$store.commit("offPreloader"), 400)
    },
  },
}
</script>

<style scoped>
.container-col{
  margin-bottom: auto;
}
</style>
