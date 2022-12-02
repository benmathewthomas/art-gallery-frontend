<template>
  <HeaderComponent />
  <NavigationComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    NavigationComponent,
    FooterComponent
  }
}
</script>
