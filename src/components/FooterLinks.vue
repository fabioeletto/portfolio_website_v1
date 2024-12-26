<template>
    <div class="w-auto text-white xl:hidden cursor-pointer text-sm my-4">
        <a :href="Settings.gitHubProfileUrl" target="_blank">
            <font-awesome-icon
                size="lg"
                icon="fa-brands fa-github"
                class="duration-500 hover:text-main ml-4 hover:-translate-y-1"
            />
        </a>
        <a :href="Settings.twitterProfileUrl" target="_blank">
            <font-awesome-icon
                size="lg"
                icon="fa-brands fa-twitter"
                class="duration-500 hover:text-main ml-4 hover:-translate-y-1"
            />
        </a>
        <a :href="`mailto:${Settings.email}`">
            <font-awesome-icon
                size="lg"
                icon="fa-solid fa-envelope"
                class="duration-500 hover:text-main ml-4 hover:-translate-y-1"
            />
        </a>
    </div>
</template>
<script>
import Settings from "../settings.json"
export default {
    data: function() {
        return {
            Settings
        }
    },
};
</script>