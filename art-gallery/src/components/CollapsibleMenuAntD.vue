<template>
    <div>
        <a-menu class="nav-menu-dropdown" mode="vertical">
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
                <a-menu-item><span class="nav-sub">Browse by Price</span></a-menu-item>
            </a-sub-menu>
            <a-menu-item>
                <div class="nav-tools-login" v-if="!account.user">
                    <router-link to="/login" class="nav-link">
                        <span>Log In</span>
                    </router-link>
                </div>
            </a-menu-item>
            <a-sub-menu>
                <template #title>
                    <router-link to="/culture" class="nav-link">
                        <span>Art & Culture</span>
                    </router-link>
                </template>
                    <a-menu-item><span class="nav-sub">Symbols</span></a-menu-item>
                    <a-menu-item>
                        <router-link to="/artistofday" class="nav-sub">
                            <span>Artist of the Day</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item><span class="nav-sub">Aboriginal Art Facts</span></a-menu-item>
            </a-sub-menu>
            <a-menu-item>
                <div class="nav-tools-signup" v-if="!account.user">
                    <router-link to="/signup" class="nav-link">
                        <span>Sign Up</span>
                    </router-link>
                </div>
            </a-menu-item>
            <a-sub-menu>
                <template #title>
                    <router-link to="/exhibition" class="nav-link">
                        <span>Exhibitions</span>
                    </router-link>
                </template>
                <a-menu-item><span class="nav-sub">Current Exhibitions</span></a-menu-item>
                <a-menu-item><span class="nav-sub">Past Exhibitions</span></a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
    name: "CollapsibleMenuAntD",
    computed: {
        ...mapState({
            account: state => state.account
        })
    }
}
</script>

<style scoped>
    .nav-sub:hover {
        color:var(--color--turquoise-light-hover);
        transition: .1s;
        transition-delay: 0;
        border-bottom: 2px solid;
    }
    .nav-menu-dropdown {
        display: grid;
        grid-template-columns: max-content auto;
    }
    .nav-sub {
        font-size: calc(12px + 2 * (100vw - 320px) / 1040);
    }
    .ant-menu::before {
        content: none;
    }
</style>