<template>
    <li :class="classLink">
        <router-link :to="link">{{ text }}</router-link>
    </li>
</template>

<script>
    export default {
        props: {
            link: {
                require: true,
                type: String,
            },
            text: {
                require: false,
                type: String,
            },
            classLink: {
                require: true,
                type: String,
            },
        }
    }
</script>