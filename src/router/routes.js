import Portfolio from "../components/Portfolio.vue";
import Blog from "../components/Blog.vue";
import HelixScripts from "../components/writings/HelixScripts.vue";

export default [
    {
      path: '/',
      component: Portfolio,
    },
    {
      path: '/blog',
      component: Blog,
      children: [
        {
          path: 'helix-scripts',
          component: HelixScripts
        },
      ]
    }
]