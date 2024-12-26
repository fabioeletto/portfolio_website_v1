<template>
    <footer class="text-center text-dark-text my-5">
        <FooterLinks />
        <div>
            <span class="italic text-xs">
                <font-awesome-icon icon="fa-solid fa-code"/>
                by Fabio Eletto ©{{ new Date().getFullYear() }}
            </span>
        </div>
    </footer>
</template>
<script>
import FooterLinks from "./FooterLinks.vue";
export default {
    components: {
        FooterLinks
    },
};
</script>