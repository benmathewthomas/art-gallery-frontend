<template>
    <div>
        <ul class="nav-menu-dropdown">
            <li>
                <router-link to="/" class="nav-link nav-link-1">
                    <span>Home</span>
                </router-link>
            </li>
            <li>
            </li>
            <li>
                <div class="nav-tools-login" v-if="!account.user">
                    <router-link to="/login" class="nav-link nav-link-3">
                        <span>Log In</span>
                    </router-link>
                </div>
            </li>
            <li>
                <router-link to="/culture" class="nav-link nav-link-1">
                    <span>Art & Culture</span>
                </router-link>
            </li>
            <li>
                <router-link to="/artworks" class="nav-link nav-link-2">
                    <span>Artworks</span>
                </router-link>
            </li>
            <li>
                <div class="nav-tools-signup" v-if="!account.user">
                    <router-link to="/signup" class="nav-link nav-link-3">
                        <span>Sign Up</span>
                    </router-link>
                </div>
            </li>
            <li>
                <span class="nav-sub nav-link-1">Symbols</span>
            </li>
            <li>
                <router-link to="/artworks" class="nav-sub nav-link-2">
                    <span>Artworks Collection</span>
                </router-link>
            </li>
            <li>
            </li>
            <li>
                <router-link to="/artistofday" class="nav-sub nav-link-1">
                    <span>Artist of the Day</span>
                </router-link>
            </li>
            <li>
                <router-link to="/artworkofday" class="nav-sub nav-link-2">
                    <span>Artwork of the Day</span>
                </router-link>
            </li>
            <li>
            </li>
            <li>
                <span class="nav-sub nav-link-1">Aboriginal Art Facts</span>
            </li>
            <li>
                <span class="nav-sub nav-link-2">Browse by Price</span>
            </li>
            <li></li>
            <li>
                <router-link to="/exhibition" class="nav-link nav-link-1">
                    <span>Exhibitions</span>
                </router-link>
            </li>
            <li></li>
            <li></li>
            <li><span class="nav-sub nav-link-1">Current Exhibitions</span></li>
            <li></li>
            <li></li>
            <li><span class="nav-sub nav-link-1">Past Exhibitions</span></li>
        </ul>
    </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
    name: "HamburgerAntDesign",
    computed: {
        ...mapState({
            account: state => state.account
        })
    }
}
</script>
<style>
    .nav-sub {
        font-size: smaller;
        padding-left: 30px;
    }
</style>
