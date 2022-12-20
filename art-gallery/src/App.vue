<template>
    <HeaderComponent />
    <NavigationComponent />
    <NavigationDropdown />
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
import NavigationDropdown from './components/NavigationDropdown.vue';

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
    FooterComponent,
    NavigationDropdown
}
};
</script>

<style scoped>
    .alerts {
      font-family: var(--font--base);
      font-style: italic;
      margin: 25px;
      font-size: large;
      color: var(--color--black);
    }

    
</style>
