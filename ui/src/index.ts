import { definePlugin } from "@halo-dev/console-shared";
import Friend from "./views/Friend.vue";
import RiBloggerLine from '~icons/ri/blogger-line';
import { markRaw } from "vue";
import {FriendsRssExtension} from "@/editor";
import '@kunkunyu/fridends-rss';

export default definePlugin({
  components: {},
  routes: [
    {
      parentName: "Root",
      route: {
        path: "/friends",
        name: "Friends",
        component: Friend,
        meta: {
          title: "朋友圈",
          searchable: true,
          permissions: ["plugin:friends:view"],
          menu: {
            name: "朋友圈",
            icon: markRaw(RiBloggerLine),
            group: "content",
            priority: 20,
          },
        },
      },
    },
  ],
  extensionPoints: {
    "default:editor:extension:create": () => {
      return [FriendsRssExtension];
    },
  },
});
