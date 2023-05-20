<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <filter-block/>
      <preloader-block v-if="getVisiblePreloader"/>
      <users-block v-else/>

    </v-row>
  </v-container>
</template>

<script>
  import FilterBlock from "@/components/unitComponents/filterBlock.vue";
  import UsersBlock from "@/components/unitComponents/usersBlock.vue";
  import PreloaderBlock from "@/components/unitComponents/preloaderBlock.vue";
  import {mapGetters} from 'vuex'

  export default {
    name: 'ContentBlock',
    components: {
      PreloaderBlock,
      UsersBlock,
      FilterBlock
    },
    computed: {
      ...mapGetters(['getVisiblePreloader']),
    },
  }
</script>
<style>

</style>
