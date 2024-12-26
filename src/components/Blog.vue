<template>
    <div class="text-white">
        <header>
            <nav class="top-0 z-50 fixed w-full bg-dark sm:block hidden">
                <div class="w-full px-10">
                    <div class="flex justify-center">
                        <div class="flex items-center cursor-pointer text-center">
                            <router-link :to="{ path:'/', hash: `projects` }">
                                <button class="py-4">
                                    <font-awesome-icon icon="fa fa-arrow-left" size="lg"/> Back to portfolio
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </nav>
             <nav class="sm:hidden z-50 flex grid-flow-col fixed top-0 w-full">
                <router-link
                    :to="{ path: '/', hash: 'Projects' }"
                    tag="button"
                    class="bg-darker hover:border-main border-2 border-dark py-1 px-1 inline-flex justify-center items-center h-16 w-full"
                >
                    <span>
                        <font-awesome-icon icon="fa fa-arrow-left" size="lg"/> Back to portfolio
                    </span>
                </router-link>
            </nav>
        </header>
        <SidebarLinks />
        <main class="max-w-5xl min-h-screen mx-auto xl:px-5 xl:py-16 px-10">
            <router-view></router-view>
        </main>
        <Footer />
    </div>
</template>
<script>
import SidebarLinks from "./SidebarLinks.vue";
import Footer from "./Footer.vue";
export default {
    components: {
        SidebarLinks,
        Footer
    },
};
</script>