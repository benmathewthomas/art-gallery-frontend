<template>
    <header class="header-component">
        <div class="header flex-spread">
            <div class="header-logo">
                <router-link class="site-logo" to="/" aria-label="Gallery Home Page">
                    <span class="screen-reader-only">Site Logo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="site-logo-svg" viewBox="0 0 300 80">
                        <rect id="logo=bg" class="logo-bg" width="300" height="80"/>
                        <path id="logo-text" class="logo-text" d="M33.707,38.52L24.415,55.858h7.124l5.536-11.025,4.933,11.025h8.159L41.144,37.329l7.983-15.3H42L37.75,30.8l-4.022-8.771h-8.3Zm22.756,3.036v14.3H63.9v-14.3l9.394-19.531H66.032L60.925,34.357,56.152,22.025h-8.19ZM72.971,28.073H86.165L71.93,50.677v5.18H95.154V49.81H80.564L94.708,27.3V22.025H72.971v6.048Zm46.8,15.541h5.057q-0.025,6.717-4.561,6.717a4.69,4.69,0,0,1-4.288-2.479q-1.463-2.478-1.462-8.551,0-6.841,1.5-9.295a4.532,4.532,0,0,1,4-2.454q4.115,0,4.809,6.643l6.692-1.091q-1.264-11.6-11.65-11.6-6.519,0-9.852,4.87T106.679,39.6q0,7.684,3.384,12.232a10.817,10.817,0,0,0,9.158,4.548,9,9,0,0,0,8.179-4.387l0.967,3.867h3.148V37.813H119.766v5.8Zm14.525,12.244h6.832l1.66-6.99h9.53L154,55.858h7.6l-9.667-33.833h-7.485Zm9.923-12.79,3.28-13.861,3.42,13.861h-6.7Zm20.216,12.79h18.342V49.512H171.866V22.025H164.43V55.858Zm21.614,0h18.341V49.512h-10.9V22.025h-7.436V55.858Zm21.613,0h20.572V49.81H215.093V41.482h10.212v-5.8H215.093V27.825h13.136v-5.8H207.657V55.858Zm24.216,0h7.436V42.473h3.715l4.525,13.384h8.094l-6.222-14.8q4.76-2.578,4.759-8.923a11.975,11.975,0,0,0-.954-4.87,8.325,8.325,0,0,0-2.64-3.42,7.9,7.9,0,0,0-3.333-1.537,29.857,29.857,0,0,0-4.747-.285H231.873V55.858ZM242.283,27.5a6.392,6.392,0,0,1,2.516.384,3.469,3.469,0,0,1,1.5,1.462,5.321,5.321,0,0,1,.645,2.764q0,4.883-4.363,4.883h-3.271V27.5h2.974ZM263.4,41.556v14.3h7.435v-14.3l9.394-19.531h-7.261l-5.106,12.333-4.774-12.333H254.9Z"/>
                    </svg>
                </router-link>
            </div>
            <div class="header-socials">
                <SocialsComponent />
            </div>
        </div>
    </header>
</template>

<script>
import SocialsComponent from '@/components/SocialsComponent.vue'
export default {
    components: { SocialsComponent }
}
</script>

<style scoped>
.header-logo{
    margin-top: 5px;
    max-width: 250px;
}
.site-logo-svg {
    width: 100%;
}
.logo-bg {
    fill: black;
}
.logo-text{
    fill:white;
}
:deep .header-socials ul {
    list-style: none;
    text-align: right;
    margin-top:.3em;
}
:deep .social {
    margin-left: calc(2px + 2 * (100vw - 320px) / 1040);
    margin-right: calc(2px + 2 * (100vw - 320px) / 1040);
    display: inline-block;
}
:deep .header-socials .socials-svg {
    height: 24px;
    width: 24px;
    fill:black;
    fill-rule: evenodd;
}
a {
    outline: none;
    text-decoration: none;
}
.header-logo:hover .logo-bg{
    transition: .3s;
    transition-delay: 0;
    fill:rgb(185, 28, 0);
}
:deep svg:hover, :deep .header-socials svg:hover {
    transition: .1s;
    transition-delay: 0;
    fill:rgb(255, 94, 0);
}
@media only screen and (max-width: 600px) {
    :deep .header-socials {
        display: none;
    }
}
</style>
