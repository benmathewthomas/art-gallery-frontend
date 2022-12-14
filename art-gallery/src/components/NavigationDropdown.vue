<template>
    <div>
        <a-menu v-model:selectedKeys="current" mode="horizontal">
            <a-menu-item>          
                <router-link to="/" class="nav-link">
                    <span>Home</span>
                </router-link>
            </a-menu-item>
            <a-sub-menu>
                <template #title>                        
                    <router-link to="/artworks" class="nav-link">
                        <span>Artworks</span>
                    </router-link>
                </template>
                <a-menu-item key="setting:1">
                    <router-link to="/artworks">
                        <span>Artworks Collection</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="setting:2">
                    <router-link to="/artworkofday">
                        <span>Artwork of the Day</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="setting:3">Browse by Price</a-menu-item>
            </a-sub-menu>
            <a-sub-menu>
                <template #title>                        
                    <router-link to="/culture" class="nav-link">
                        <span>Art & Culture</span>
                    </router-link>
                </template>
                    <a-menu-item key="setting:1">Symbols</a-menu-item>
                    <a-menu-item key="setting:2">
                        <router-link to="/artistofday">
                            <span>Artist of the Day</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="setting:3">Aboriginal Art Facts</a-menu-item>
            </a-sub-menu>
            <a-sub-menu>
                <template #title>
                    <router-link to="/exhibition" class="nav-link">
                        <span>Exhibitions</span>
                    </router-link>
                </template>
                <a-menu-item key="setting:1">Current Exhibitions</a-menu-item>
                <a-menu-item key="setting:2">Past Exhibitions</a-menu-item>
            </a-sub-menu>
        </a-menu> 
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "NavigationDropdown",
    setup() {
        const current = ref<String>(['mail']);
        
        return {
            current,
        };
  },
}


</script>
    
<style scoped>
    .nav-link {
        font-size: 20px;
        padding:15px;
    }

    a { color: inherit; }
</style>