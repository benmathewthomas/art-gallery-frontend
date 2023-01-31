<template>
    <div class="nav-site">
        <a-menu v-model:selectedKeys="current" mode="horizontal"  class="nav-menu" disabledOverflow="true">
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
                    <router-link to="/artworkofday" class="nav-sub">
                        <span>Artwork of the Day</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="setting:2"><span class="nav-sub">Browse by Price</span></a-menu-item>
            </a-sub-menu>
            <a-sub-menu>
                <template #title>
                    <router-link to="/culture" class="nav-link">
                        <span>Art & Culture</span>
                    </router-link>
                </template>
                    <a-menu-item key="setting:1"><span class="nav-sub">Symbols</span></a-menu-item>
                    <a-menu-item key="setting:2">
                        <router-link to="/artistofday" class="nav-sub">
                            <span>Artist of the Day</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="setting:3"><span class="nav-sub">Aboriginal Art Facts</span></a-menu-item>
            </a-sub-menu>
            <a-sub-menu>
                <template #title>
                    <router-link to="/exhibition" class="nav-link">
                        <span>Exhibitions</span>
                    </router-link>
                </template>
                <a-menu-item key="setting:1"><span class="nav-sub">Current Exhibitions</span></a-menu-item>
                <a-menu-item key="setting:2"><span class="nav-sub">Past Exhibitions</span></a-menu-item>
            </a-sub-menu>
            <a-sub-menu v-if="isAdmin()">
                <template #title>
                    <a href="https://localhost:7194/swagger/index.html">swagger</a>
                </template>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
import { ref } from 'vue';
import { mapState } from 'vuex';

export default {
    name: "NavigationAntDesign",
    methods: {
        setup() {
        const current = ref<String>(['mail']);
        return {
            current,
        };
    },
        isAdmin() {
            if (this.account.user) {
                return this.account.user.role == "Admin";
            }
        }
    },
    computed: {
        ...mapState({
            account: state => state.account
        })
    }
}
</script>

<style scoped>
    .nav-sub {
        font-size: 16px;
        padding-left: 0;
    }
    .nav-sub:hover {
        color:var(--color--turquoise-light-hover);
        transition: .1s;
        transition-delay: 0;
        border-bottom: 2px solid;
    }
</style>
