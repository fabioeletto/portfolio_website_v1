<template>
  <Section :sectionName="'Writing'" class="sm:mt-16">
    <div class="w-full">
      <div class="mb-4">
        <div class="text-sm mb-3">
          <span
            class="inline-block sm:text-xs text-xxs mt-2 font-semibold px-2 pt-0.5 rounded border align-middle mr-2"
          >
            24th April 2022
          </span>
          <span
            class="inline-block sm:text-xs text-xxs mt-2 font-semibold px-2 pt-0.5 rounded border align-middle mr-2"
          >
            5 minutes read
          </span>
        </div>
        <span class="sm:text-4xl text-2xl text-left mb-4 font-bold duration-500 hover:text-main">
          <a href="https://helixscripts.com/" target="_blank">Helix Scripts</a>
        </span>
      </div>
      <div class="flex flex-wrap mb-4 text-dark-text text-base">
        <div class="w-full">
          <p class="mb-4">
            To earn some money during my years in school, I started buying limited sneakers to sell them for profit. 
            With more and more people being interested in releases, it became very difficult to obtain pairs, since the items were sold out in a couple of seconds. 
            But at the same time, I noticed that in the end it's always the same steps that you have to go through:
            You have to be logged in, select a size, enter your address, select a payment method and complete the checkout.
            If you persistently redo the process, you find out that there is always a more efficient way to solve the task - <span class="font-bold">automation</span>.
          </p>
          <p class="mb-4">
            Together with some friends we started developing an automated solution for the checkout process of limited articles, especially sneakers. 
            Our team consists of 4 people who all enjoy learning new things. 
            The project was seen as a way for us to develop new skills as well as to earn some money by reselling on the side.
          </p>
          <p class="mb-4">
            Basically, it is a Chrome extension created with web development technologies: HTML, CSS & JavaScript.
            Extensions are small software programs that customize the browsing experience. They let users tailor browser functionality and behaviour in many ways.
            They run in a separate, sandboxed execution environment and let you "extend" the browser by using APIs to access web content.
          </p>
          <p class="mb-4">
            We quickly realized that we were not the only ones with an extension focused on resell, but in comparison to others, we achieved the same or often better success. 
            So we decided to publish the script for a certain group of users, so called beta testers. 
            To prevent everyone from using our extension, we developed a licensing model.
            Each beta tester had to log in to our dashboard with their Discord account using the Discord API. 
            Thereby we got certain user specific data, like user id, name, email. 
            Then we generated an unique license key for each user and stored it with the Discord user id and the email in our database.
          </p>
          <p class="mb-4">
            If you want to use the extension, you have to log in with your Discord account and enter your license key. 
            Afterwards, we generated a fingerprint for each user to ensure that the script can only be used on one device at a time. 
            Next, the data is being sent to our backend which checks if the user is authorized to log in. 
            If the user wants to change his device, he has to reset the key first, so that the old fingerprint can be deleted from the database in order for the new one to be stored.
          </p>
          <p class="mb-4">
            The more testers came, the more I realized that we had responsibilities to the users, even though no one had to pay money for the product at that time, they expected regular bug fixes as well as improvements. 
            The beta phase went on for about half a year, where we continuously pushed updates and gained a deeper understanding for the community. 
            After six months, we had developed a very stable product and encouraged by the users feedback, we decided to take the next bigger step and make the script available to a greater number of people for a monthly fee.
            There were still a few loose ends to tie up, such as how to handle payments and whether to implement the users dashboard ourselves or purchase it from a service provider.
          </p>
          <p class="mb-4">
            Since we were still primarily concerned with the learning factor, we decided to further develop the existing dashboard and integrate the payment provider Stripe. 
            On our dashboard, users have an overview of their license key and their subscription. 
            In addition, users can also view change logs after new updates. 
            We have also applied a rewards system, which should provide a wider range on Twitter. 
            After an user has successfully bought a product with our script and posted an image with the item on Twitter, he gets awarded with a point.
            With these points users can get different rewards for example stickers, one free month of our service or pay 5€ less per month. 
            To automate the whole process at different levels and save time, I programmed several Discord bots. 
            One example of these, is a bot that automatically posts an image from Discord to Twitter, you can find the code on GitHub.
          </p>
          <p class="mb-4">
            At the end of 2020, after about a year of development and testing, we were ready to sell the script for a monthly fee. 
            In the first few months we had 200/300 active users from all over Europe. 
            In March 2021 we got a tremendous increase in customers due to an excellent marketing strategy. 
            We made the script available to everyone for testing, for a certain period of time. 
            During those days over 2000 people used the script and afterwards we allowed them to purchase the full product and ended up with a user base of around 1000 active users per month. 
            This had showed us that all the effort of the past year were worth it.
          </p>
          <p class="mb-4">
            The rest of the year we worked very hard to improve even more. 
            We added many features, such as an auto-updater or the multiuser feature, where you can synchronize multiple browser windows. 
            In conclusion, the last 2 years have taught me plenty and I am very appreciative to have had this experience.
          </p>
          <p>
            <span class="italic">To be continued ...</span>
          </p>
        </div>
      </div>
    </div>
  </Section>
</template>
<script>
import Section from "../body/Section.vue";
export default {
  components: {
    Section
  },
};
</script>
