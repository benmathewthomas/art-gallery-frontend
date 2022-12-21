<template>
    <div class="nav-site">
        <ul class="nav-menu">
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
</template>

<script>

export default {
    name: "NavigationHTML",
}
</script>
