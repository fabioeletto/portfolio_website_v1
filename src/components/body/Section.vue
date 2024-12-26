<template>
    <div :id="`${sectionName.toLowerCase()}`" class="flex flex-col items-center justify-center min-h-screen">
        <div :class="`text-white container lg:mt-6 relative duration-1000 show-on-scroll ${sectionName === 'Home' ? 'my-5' : 'mt-20'}`">
            <div class="absolute -top-5 -left-10 border-l-2 border-t-2 h-5 w-5 border-main xl:block hidden"></div>
            <div class="absolute -bottom-5 -right-10 border-b-2 border-r-2 h-5 w-5 border-main xl:block hidden"></div>
            <p class="italic text-right mb-7 text-sm">
              <span class="text-main">#</span>{{ sectionName }}
            </p>
            <slot />
        </div>
    </div>
</template>
<script>
export default {
  components: {
  },
  props: {
    sectionName: {
      type: String,
      required: true,
    },
  },
};
</script>