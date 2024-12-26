<template>
  <Section :sectionName="sectionName">
    <p class="sm:text-4xl text-2xl text-center text-white mb-4">
      Get in <span class="text-main">touch</span>
    </p>
    <span class="text-dark-text mb-4 flex justify-center text-center text-base">
      <p class="sm:w-2/3">
        I’m always looking for new opportunities and projects. 
        <span class="hidden sm:block">
          If you have other requests or questions, don’t hesitate to contact me. 
          I’ll try my best to get back to you!
        </span>
      </p>
    </span>
    <form class="w-full">
      <div class="w-full text-center">
        <Transition appear>
          <span
            v-if="errorCounter > 0"
            class="text-sm font-bold mb-2 sm:mb-3 text-red-600"
          >
            Please fill out all fields.
          </span>
        </Transition>    
      </div>
      <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full md:w-1/2 px-3 mb-2">
          <div class="w-full mb-4">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2 sm:mb-3"
              for="full-name"
            >
              Full Name<span class="text-main">*</span>
            </label>
            <input
              v-model="contactData.fullName"
              ref="fullName"
              class="block w-full bg-dark border-white text-white border rounded py-3 px-4 mb-3 leading-tight outline-none duration-500 hover:border-main focus:border-main"
              id="full-name"
              type="text"
              placeholder="Full name"
            />
          </div>
          <div class="w-full">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2"
              for="subject"
            >
              Subject<span class="text-main">*</span>
            </label>
            <input
              v-model="contactData.subject"
              ref="subject"
              class="block w-full bg-dark border-white text-white border rounded py-3 px-4 mb-3 leading-tight outline-none duration-500 hover:border-main focus:border-main"
              id="subject"
              type="text"
              placeholder="Subject"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-0">
          <div class="w-full">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2 md:text-right"
              for="message"
            >
              Message<span class="text-main">*</span>
            </label>
            <textarea
              v-model="contactData.message"
              ref="message"
              class="resize-none block w-full bg-transparent border-white text-white border rounded py-3 px-4 mb-3 sm:mb-0 leading-tight outline-none duration-500 hover:border-main focus:border-main"
              id="message"
              placeholder="Enter your message"
              rows="5"
            />
          </div>  
        </div>
      </div>
      <div class="flex justify-between">
        <button
          class="bg-transparent font-semibold text-white py-2 px-4 border duration-500 hover:border-red-500 border-white rounded"
          @click="clear"
        >
          Clear
        </button>
        <button
          class="bg-transparent font-semibold text-white py-2 px-4 border duration-500 hover:border-main border-white rounded"
          @click="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </Section>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-out;
}

.v-enter-to,
.v-leave {
  opacity: 100;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
<script>
import Section from "../Section.vue";
import { isNullOrEmpty } from "../../../utils/helper";
import Settings from "../../../settings";
export default {
  components: {
    Section
  },
  props: {
    sectionName: {
      type: String,
      required: true,
    }
  },
  data: function() {
    return {
      errorCounter: 0,
      contactData: {
        fullName: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    isNullOrEmpty,
    submit(e) {
      e.preventDefault();
      const contactDataKeys = Object.keys(this.contactData);
      this.errorCounter = 0;
      contactDataKeys.forEach(field => {
        if(isNullOrEmpty(this.contactData[field]))
        {
          this.errorCounter++;
        }
      });

      if(this.errorCounter > 0)
      {
        return;
      }

      const body = `Hello, \n\n${this.contactData.message} \n\n Kind regards \n ${this.contactData.fullName}`;
      const parameters = `subject=${this.contactData.subject}&body=${encodeURI(body)}`;
      this.clear();
      window.location.href = `mailto:${Settings.email}?${parameters}`;
    },
    clear(e) {
      if(e)
      {
        e.preventDefault();
      }
      this.errorCounter = 0;
      const contactDataKeys = Object.keys(this.contactData);
      contactDataKeys.forEach(field => {
        this.contactData[field] = '';
      });
    },
  }
};
</script>
