<template>
  <Section :sectionName="sectionName">
    <div class="w-full">
      <div
        class="grid grid-cols-1 grid-rows-3 md:grid-cols-7 md:grid-rows-4 md:gap-x-8 gap-y-8"
      >
        <div class="md:col-start-1 md:col-span-3 md:row-span-2">
          <Card
            :title="project1.title"
            :usedTechnologies="project1.usedTechnologies"
            :gitUrl="project1.githubUrl"
          >
            {{ project1.description }}
          </Card>
        </div>
        <div class="md:col-start-5 md:col-span-3 md:row-start-2 md:row-span-2">
          <Card
            :title="project2.title"
            :usedTechnologies="project2.usedTechnologies"
            :gitUrl="project2.githubUrl"
          >
            {{ project2.description }}
          </Card>
        </div>
        <div class="md:col-start-2 md:col-span-3 md:row-span-2">
          <Card
            :title="project3.title"
            :usedTechnologies="project3.usedTechnologies"
            :gitUrl="project3.githubUrl"
          >
            {{ project3.description }}
          </Card>
        </div>
      </div>
    </div>
  </Section>
</template>
<script>
import Section from "../Section.vue";
import Card from "./Card.vue";
import Settings from "../../../settings.json"
export default {
  components: {
    Section,
    Card,
  },
  props: {
    sectionName: {
      type: String,
      required: true,
    },
  },
  data: function() {
    const [project1, project2, project3] = Settings.projects;
    return {
      project1,
      project2,
      project3,
    }
  },
};
</script>
