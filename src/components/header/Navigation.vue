<template>
  <div class="duration-500">
    <!-- DESKTOP NAVIGATION -->
    <Transition appear>
      <nav v-if="isScrollUpOrEqual" id="desktopNavigationBar" class="sticky top-0 z-50 sm:fixed sm:w-full sm:bg-dark sm:block hidden">
        <div class="w-full px-10 py-3">
          <div class="flex justify-end">
            <div class="flex space-x-7">
              <a href="#" class="flex items-center py-4">
                <span class="font-semibold text-gray-400 text-lg">
                  <!-- LOGO -->
                </span>
              </a>
            </div>
              <div class="hidden sm:flex items-center space-x-1 cursor-pointer text-center text-base">
                  <NavigationItemTop 
                    v-for="(sectionInfo, key) in Settings.sections"
                    :key="`${key}-Top-Navigation`"
                    :navigationItemText="sectionInfo.name"
                  />
              </div>
          </div>
        </div>
      </nav>
    </Transition>
    <!-- MOBILE NAVIGATION -->
    <nav class="sm:hidden z-50 flex grid-flow-col fixed top-0 w-full">
      <NavigationItemMobile 
        v-for="(sectionInfo, key) in Settings.sections"
        :key="`${key}-Bottom-Navigation`"
        :sectionId="sectionInfo.name"
        :icon="sectionInfo.icon"
      />
    </nav>
  </div>
</template>
<style>
.nav--hidden {
  display: none;
}
</style>
<script>
import Settings from "../../settings.json";
import NavigationItemTop from "./NavigationItemTop.vue";
import NavigationItemMobile from "./NavigationItemMobile.vue";

export default {
  components: {
    NavigationItemTop,
    NavigationItemMobile,
  },
  data() {
    return {
      Settings,
      lastScrollY: 0,
      isScrollUpOrEqual: true
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.lastScrollY = window.scrollY;
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if(this.lastScrollY < window.scrollY) {
        this.isScrollUpOrEqual = false;
      } else {
        this.isScrollUpOrEqual = true;
      }

      this.lastScrollY = window.scrollY;
    }
  }
};
</script>
