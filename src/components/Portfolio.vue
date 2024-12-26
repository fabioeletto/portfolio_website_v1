<template>
    <div>
        <header>
            <Navigation />
        </header>
        <SidebarLinks />
        <main class="max-w-5xl min-h-screen mx-auto px-10">
            <div v-for="(section, index) in Settings.sections" :key="`${index}-${section.name}`">
                <component :is="section.name" :sectionName="section.name"></component>
            </div>
        </main>
        <Footer />
    </div>
</template>
<script>
import Settings from "../settings.json";
import Navigation from "./header/Navigation.vue";
import Home from "./body/homeSection/Home.vue";
import About from "./body/aboutSection/About.vue";
import Projects from "./body/projectsSection/Projects.vue";
import Contact from "./body/contactSection/Contact.vue";
import SidebarLinks from "./SidebarLinks.vue";
import Footer from "./Footer.vue"
export default {
  components: {
      Navigation,
      Home,
      About,
      Projects,
      Contact,
      SidebarLinks,
      Footer
  },
  data: function() {
    return {
        Settings,
        observer: null,
    }
  },
  created: function() {
    this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fadeIn");
                entry.target.classList.remove("opacity-0");
                entry.target.classList.add("opacity-100");
            } else {
                entry.target.classList.remove("animate-fadeIn");
                entry.target.classList.add("opacity-0");
                entry.target.classList.remove("opacity-100");
            }
        });
    })
  },
  mounted() {
    const targets = document.querySelectorAll(".show-on-scroll");
    targets.forEach((target) => {
        target.classList.add("opacity-0");
        this.observer.observe(target);
    });
  },
  methods: {
  }
};
</script>