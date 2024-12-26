<template>
  <router-link
    :to="{ hash: navigationItemText.toLowerCase() }"
    class="py-3 px-3 text-white border-b-2 duration-500 hover:border-main border-dark font-semibold"
  >
    {{ navigationItemText }}
  </router-link>
</template>
<script>
export default {
	props: {
    navigationItemText: {
      type: String,
      required: true,
    },
  },
  methods:
  {
  }
}
</script>
