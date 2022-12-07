<template>
    <HeaderComponent />
    <NavigationComponent />
    <div class="alerts">
        <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
    </div>
    <router-view />
    <FooterComponent />
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    name: 'app',
        computed: {
            ...mapState({
                alert: state => state.alert
            })
        },
        methods: {
            ...mapActions({
                clearAlert: 'alert/clear'
            })
        },
        watch: {
            // eslint-disable-next-line
            $route (to, from){
                // clear alert on location change
                this.clearAlert();
            }
        },
      components: {
        HeaderComponent,
        NavigationComponent,
        FooterComponent
      }
};
</script>

<style scoped>
    .alerts {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-style: italic;
      margin: 25px;
      font-size: large;
      color: rgb(36, 36, 36);
    }
</style>
