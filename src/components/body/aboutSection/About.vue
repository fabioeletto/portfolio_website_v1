<template>
  <Section :sectionName="sectionName">
    <div class="w-full">
      <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full lg:w-1/4 flex justify-center lg:justify-start align-middle">
          <img
            src="../../../assets/me_pixel.png"
            alt="Fabio"
            class="float-left rounded-full max-w-full lg:h-1/2 align-middle border-none"
          />
        </div>
        <div class="w-full lg:w-3/4 mt-3 lg:mt-0 text-dark-text text-base">
          <p>
            <span class="text-main">Hello!</span> My name is Fabio and I’m a developer located in Germany.
          </p>
          <p class="mb-4">
            I have a serious passion for building software that improves the lives of those around me.
          </p>
          <p class="mb-4">
            My interest in web development started back in 2017 when I decided to develop a vocabulary web app in order to get better in class 
            - turns out implementing a custom web app was the foundation for my career choice!
          </p>
          <p class="mb-4">
            Fast-forward to today, I’ve had the privilege of working at an 
            <span class="text-main"><a href="#">eLearning management company</a></span> 
            and further establishing my first own 
            <span class="text-main"><router-link :to="{ path: '/blog/helix-scripts' }">software company</router-link></span>.
          </p>
          <p class="mb-6">
            Currently, I’am also learning web3 especially smart contract development on the Ethereum chain. 
            You are able to find some code examples of minified versions from different contract standards on 
            <span class="text-main"><a href="https://github.com/0xfabdav" target="_blank">GitHub</a></span>.
          </p>
          <p class="mb-2">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div class="grid grid-cols-2 text-sm">
            <div>
              <ul>
                <li><span class="text-main">></span> JavaScript</li>
                <li><span class="text-main">></span> Vue.js</li>
                <li><span class="text-main">></span> Node.js</li>
              </ul>
            </div>
            <div>
              <ul>
                <li><span class="text-main">></span> C#</li>
                <li><span class="text-main">></span> Python</li>
                <li><span class="text-main">></span> Solidity</li>
              </ul>
            </div>
          </div>
        </div>  
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