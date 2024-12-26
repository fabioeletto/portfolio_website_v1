<template>
    <router-link
        :to="{ hash: sectionId.toLowerCase() }"
        tag="button"
        class="bg-darker duration-500 hover:border-main border-2 border-dark py-1 px-1 inline-flex justify-center items-center h-16 w-full"
    >
        <font-awesome-icon class="text-white" :icon="icon" size="lg"/>
    </router-link>
</template>
<script>
export default {
	props: {
        icon: 
        {
            type: String,
            required: true,
        },
        sectionId:
        {
            type: String,
            required: true,
        }  
    },
}
</script>