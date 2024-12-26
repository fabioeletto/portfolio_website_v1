<template>
  <div
    class="text-white fixed xl:block bottom-1/2 -left-5 rotate-90 hidden cursor-pointer w-fit text-base"
  >
    <a :href="Settings.gitHubProfileUrl" target="_blank">
      <font-awesome-icon
        size="lg"
        icon="fa-brands fa-github"
        class="duration-500 -rotate-90 hover:text-main ml-4 hover:-translate-x-1"
      />
    </a>
    <a :href="Settings.stackoverflowProfileUrl" target="_blank">
      <font-awesome-icon
        size="lg"
        icon="fa-brands fa-stack-overflow"
        class="duration-500 -rotate-90 hover:text-main ml-4 hover:-translate-x-1"
      />
    </a>
    <a :href="`mailto:${Settings.email}`">
      <font-awesome-icon
        size="lg"
        icon="fa-solid fa-envelope"
        class="duration-500 -rotate-90 hover:text-main ml-4 hover:-translate-x-1"
      />
    </a>
  </div>
</template>
<script>
import Settings from "../settings.json";
export default {
  data: function() {
    return {
      Settings,
    };
  },
};
</script>
