<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <nav-item
                :link="links.header.link" 
                classLink="header__item"
            >
                <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon">
            </nav-item>
            
            <nav-item 
                v-for="link in links.other"
                :key="link.id"
                :link="link.link" 
                :text="link.text"
                classLink="header__item"
            ></nav-item>
        </ul>
    </header>
</template>

<script>
import NavItem from './NavItem.vue';

export default {
    components: { NavItem },
    data() {
        return {
            links: {
                header: {
                        id: 0,
                        link: '/',
                        icon: 'Logo.svg'
                    },
                other: [ 
                    {
                        id: 1,
                        text: 'Our coffee',
                        link: '/our-coffee'
                    },
                    {
                        id: 2,
                        text: 'For your pleasure',
                        link: '/goods-page'
                    },
                    {
                        id: 3,
                        text: 'Contact us',
                        link: '/contacts'
                    },
                ]
            }
        }
    }
}
</script>