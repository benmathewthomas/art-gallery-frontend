<template>
    <nav class="navigation-component">
        <div class="navigation flex-spread">
            <div class="nav-site">
                <router-link to="/" class="nav-home">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="nav-home-icon">
                        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                    </svg>
                </router-link>
                <ul class="nav-menu" v-if="!this.showMenu">
                    <li>
                        <router-link to="/" class="nav-link">
                            <span>Home</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/artworks" class="nav-link">
                            <span>Artworks</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/culture" class="nav-link">
                            <span>Art & Culture</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/exhibition" class="nav-link">
                            <span>Exhibitions</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="nav-tools">
                <div class="auth-tools" title="auth"  v-if="!this.showMenu">
                    <div class="user-name" title="user-name" v-if="account.user">
                        <span>Signed in as <b>{{ account.user.firstName }}</b></span>
                    </div>
                    <div @click="logout" class="nav-tools-login" title="Logout" v-if="account.user">
                        <span class="login-nav-button">logout</span>
                    </div>
                    <div @click="toggleLogin" class="nav-tools-login" title="Login" v-if="(!account.user && $route.name !== 'login')">
                        <span class="logout-nav-button">login</span>
                    </div>
                </div>
                <div @click="toggleMenu" class="nav-tools-menu" title="Menu">
                    <span class="screen-reader-only">Menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="menu-grid" v-if="this.showMenu">
            <ul class="nav-menu-dropdown">
                <li>
                    <router-link to="/" class="nav-link-1">
                        <span>Home</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/artworks" class="nav-link-2">
                        <span>Artworks</span>
                    </router-link>
                </li>
                <li>
                    <div class="nav-tools-login nav-link-3" v-if="!account.user">
                        <router-link to="/login">
                            <span>log in</span>
                        </router-link>
                    </div>
                </li>
                <li>
                    <router-link to="/culture" class="nav-link-1">
                        <span>Art & Culture</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/exhibition" class="nav-link-2">
                        <span>Exhibitions</span>
                    </router-link>
                </li>
                <li>
                    <div class="nav-tools-signup nav-link-3" v-if="!account.user">
                        <router-link to="/signup">
                            <span>sign up</span>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>

        <div class="login-box" v-if="(this.showLogin && !account.user && $route.name !== 'login')">
            <LoginComponent />
        </div>
    </nav>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'
import { mapState } from 'vuex'
import { userService } from '@/services/UserService'

export default {
    data () {
        return {
            showMenu: false,
            showLogin: false
        }
    },
    watch: {
            // eslint-disable-next-line
            $route (to, from){
                this.showLogin = false;
                this.showMenu = false;
            }
        },
    components: { LoginComponent },
    methods: {
        toggleLogin () {
            if (this.showLogin === false) {
                this.showMenu = false
                this.showLogin = true
            }
            else {
                this.showLogin = false
            }
        },
        toggleMenu () {
            if (this.showMenu === false) {
                this.showLogin = false
                this.showMenu = true
            }
            else {
                this.showMenu = false
            }
        },
        logout () {
            userService.Logout()
        }
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        },
        ...mapState({
            account: state => state.account
        })
    }
}
</script>

<style scoped>
    .navigation-component {
        border-bottom: 2px solid lightgray;
        margin-top: 10px;
    }

    a {
        outline: none;
        text-decoration: none;
    }

    .nav-site, .nav-menu, .nav-tools {
        display: inline-flex;
        margin-top: calc(4px + (100vw - 320px) / 1040);
    }
    .nav-site, .nav-menu {
        text-align: left;
    }

    .nav-tools-menu {
        cursor:pointer;
    }

    .nav-home-icon, .nav-tools-menu svg{
        max-width: 28px;
        width: calc(24px + 6 * (100vw - 320px) / 1040);
        margin-left: calc(10px + 2 * (100vw - 320px) / 1040);
    }

    .nav-link:hover, .nav-link-1:hover, .nav-link-2:hover {
        color:rgb(255, 102, 0);
        transition: .1s;
        transition-delay: 0;
    }

    .nav-link:focus, .nav-link-1:focus, .nav-link-2:focus {
        color:rgb(255, 102, 0);
    }

    .nav-home-icon {
        margin-top: 2px;
        margin-right: 5px;
    }

    .nav-menu, .nav-menu-dropdown {
        font-family: Arial Narrow, Arial, Helvetica, sans-serif;
        text-transform: lowercase;
        letter-spacing: .1em;
        font-weight: bold;
        padding: 0;
        list-style: none;
    }

    .nav-menu {
        font-size: calc(16px + 3 * (100vw - 320px) / 1040);
    }

    .nav-menu-dropdown {
        display: grid;
        grid-template-columns: auto auto 100px;
        font-size: calc(20px + 4 * (100vw - 320px) / 1040);
        row-gap: 30px;
    }

    .nav-link-1 {
        grid-column-start: 1;
    }

    .nav-link-2 {
        grid-column-start: 2;
    }

    .nav-link-3 {
        grid-column-start: 3;
    }

    .nav-link, .nav-link-1, .nav-link-2, .nav-link-3 {
        margin-left: calc(0px + 10 * (100vw - 320px) / 1040);
        margin-right: calc(0px + 10 * (100vw - 320px) / 1040);
        color: black;
    }

    .nav-tools {
        text-align: right;
    }

    .nav-tools-menu svg{
        fill: black;
    }

    svg:hover, .nav-tools svg:hover {
        transition: .1s;
        transition-delay: 0;
        fill:rgb(255, 94, 0);
    }

    .nav-tools-login, .nav-tools-signup, .nav-tools-login:visited, .nav-tools-signup:visited {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-variant: small-caps;
        font-size: large;
        display: inline-block;
        font-weight: 400;
        margin-left: calc(0px + 10 * (100vw - 320px) / 1040);
        margin-right: calc(0px + 10 * (100vw - 320px) / 1040);
        color: black;
    }

    .user-name {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: small;
        display: inline-block;
        margin-right: 10px;
        color: black;
    }

    .nav-tools-login span:hover, .nav-tools-signup span:hover{
        color: rgb(255, 94, 0);
        text-decoration: underline;
        cursor: pointer;
    }

    :deep .container {
        text-align: right;
    }

    @media only screen and (max-width: 600px) {
        .nav-link, .auth-tools{
            display: none;
        }

        .nav-tools-signup a {
            color: black;
        }

        .nav-menu-dropdown {
            font-size: 1.6em;
        }
    }
</style>
