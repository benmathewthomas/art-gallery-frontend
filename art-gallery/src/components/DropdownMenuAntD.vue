


<template>
    <div class="nav-site">
        <a-menu mode="horizontal"  class="nav-menu">
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
                <a-menu-item>
                    <router-link to="/artworkofday" class="nav-sub">
                        <span>Artwork of the Day</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item>
                    <router-link to="/artworks" class="nav-sub">
                        <span>List of Artworks</span>
                    </router-link>
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu>
                <template #title>
                    <router-link to="/culture" class="nav-link">
                        <span>Art & Culture</span>
                    </router-link>
                </template>
                    <a-menu-item>
                        <span class="nav-sub">Symbols</span>
                    </a-menu-item>
                    <a-menu-item>
                        <router-link to="/artistofday" class="nav-sub">
                            <span>Artist of the Day</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item>
                        <span class="nav-sub">Aboriginal Art Facts</span>
                    </a-menu-item>
            </a-sub-menu>
            <a-sub-menu>
                <template #title>
                    <router-link to="/exhibition" class="nav-link">
                        <span>Exhibitions</span>
                    </router-link>
                </template>
                <a-menu-item>
                    <router-link to="/exhibition" class="nav-sub">
                        <span>Current Exhibitions</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item>
                    <span class="nav-sub">Past Exhibitions</span>
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu v-if="isAdmin()">
                <template #title>
                    <a href="https://localhost:7194/swagger/index.html" class="nav-link">Swagger</a>
                </template>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "DropdownMenuAntD",
    methods: {
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
