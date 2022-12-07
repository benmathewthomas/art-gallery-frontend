<template>
  <div class="home">
    <HeadingComponent title="Welcome to XYZ Gallery"/>
    <div class="user-greeting" v-if="account.user"><span>Hi {{account.user.firstName}}!</span></div>
    <div class="home-banner">
      <img src="@/assets/img/emerging_artists.avif" alt="Emerging Artists Exhibition banner">
    </div>
  </div>
</template>

<script>
import HeadingComponent from '@/components/HeadingComponent.vue';
import { mapState } from 'vuex';

export default {
    name: "HomeView",
    components: {
      HeadingComponent
    },
    computed: {
        ...mapState({
            account: state => state.account
        })
    }
}
</script>

<style scoped>
    .home-banner {
        text-align: center;
    }

    .home img{
        width: 90vw;
        max-width: 1000px;
    }

    .home {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 20px;
        padding-bottom: 50px;
    }

    .user-greeting {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 15px;
      text-align: center;
      font-size: 2em;
      font-weight:600;
    }

</style>
