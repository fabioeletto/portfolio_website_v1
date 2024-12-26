<template>
    <Section :sectionName="sectionName">
      <div class="sm:mb-7 mb-3">
        <p class="text-dark-text"><span class="text-main">Hello</span>, I am</p>
      </div>
      <div class="sm:mt-7 mt-3">
        <p class="sm:text-5xl text-4xl text-slate-200">Fabio Eletto</p>
      </div>
      <div>
        <p class="sm:text-3xl text-xl text-dark-text sm:my-4 mb-4">I enjoy creating things that make life <span class="text-main">easier</span>.</p>
        <span class="text-gray-500 mb-4 text-sm sm:text-base">
          <p class="sm:w-2/3 z-50">
            I am a full-stack web developer specializing in building exceptional application from scratch. 
            I love to solve problems
            and interested in working on ambitious projects with positive people.
          </p>
          <p>
            <router-link
              :to="{ hash: 'contact' }"
              class="text-main"
            >
              Let’s make something special.
            </router-link>
          </p>
        </span>
        <div class="animate-bounce-slow h-6 flex justify-center align-middle px-2 py-2 rounded-full w-auto mt-7 cursor-pointer">
          <router-link
            :to="{ hash: 'about' }"
          >
            <font-awesome-icon class="text-main" icon="fa-solid fa-circle-arrow-down" size="xl"/>
          </router-link>
        </div>
      </div>
    </Section>
</template>
<script>
import Section from "../Section.vue";
export default {
  components: {
    Section,
  },
  props: {
    sectionName: {
      type: String,
      required: true,
    }
  },
};
</script>