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
                <div class="nav-tools-search" title="Search">
                    <span class="screen-reader-only">Search</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
                    </svg>
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
                    <router-link to="/artworks" class="nav-link-1">
                        <span>Artworks</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/culture" class="nav-link-2">
                        <span>Art & Culture</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/exhibition" class="nav-link-2">
                        <span>Exhibitions</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleMenu () {
            this.showMenu = !this.showMenu
        }
    }
}
</script>
