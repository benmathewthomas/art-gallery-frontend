<template>
    <footer>
        <div class="footer-component">
            <div class="footer-links">
                <ul class="footer-nav">
                    <li>
                        <router-link to="/about">About Us</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">Contact Us</router-link>
                    </li>
                </ul>
                <p>
                    Copyright © 2022 XYZ Gallery Pty Ltd.
                    <br>
                    <span>
                        Phone:
                        <a href="tel://(03) 1234 5678">(03) 1234 5678</a>
                    </span>
                    <span>
                        World:
                        <a href="tel://+61 1234 5678">+61 1234 5678</a>
                    </span>
                    <br>
                    <span>123 Main St Suburb</span>
                    <span>State 3000 Australia</span>
                </p>
            </div>
            <div class="footer-socials">
                <SocialsComponent />
            </div>
        </div>
    </footer>
</template>

<script>
import SocialsComponent from '@/components/SocialsComponent.vue'
export default {
    components: { SocialsComponent }
}
</script>

<style scoped>
:deep .footer-socials ul{
    list-style: none;
    text-align: right;
    margin-top:1em;
}
:deep .social {
    margin-left: calc(2px + 2 * (100vw - 320px) / 1040);
    margin-right: calc(2px + 2 * (100vw - 320px) / 1040);
    display: inline-block;
}
:deep .footer-socials .socials-svg {
    height: 34px;
    width: 34px;
    fill: rgb(36, 36, 36);
    fill-rule: evenodd;
}
a {
    outline: none;
    text-decoration: none;
}
.footer-component {
    display:flex;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    font-size: .8em;
    margin: 5px 5px 5px 15px;
}
.footer-links, .footer-socials {
    width: 50%;
}
.footer-nav{
    list-style: none;
    display: inline-flex;
    padding: 0;
    transition: ease all .5s;
}
.footer-nav li {
    padding-right:20px;
}
.footer-links a, .footer-links a:visited {
    color: rgb(95, 95, 95);
}
.footer-links span, .footer-links p {
    text-align: left;
    color: rgb(36, 36, 36);
    line-height: 150%;
}
.footer-links span {
    padding-right: 10px;
}
:deep svg:hover, :deep .footer-socials svg:hover {
    transition: .1s;
    transition-delay: 0;
    fill:rgb(255, 94, 0);
}
@media only screen and (max-width: 600px) {
    .footer-component {
        display:inline;
        font-size: .9em;
    }
    .footer-nav {
        display: block;
        line-height: 180%;
    }
    .footer-links, :deep .footer-socials {
        width: 100%;
    }
    :deep .footer-socials ul {
        text-align: left;
        padding-left: 0;
    }
}
</style>
