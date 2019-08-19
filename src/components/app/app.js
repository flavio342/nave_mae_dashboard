import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

import "./app.scss";

export default {
  name: "app",
  components: {
    SidebarMenu
  },
  mounted() {},
  methods: {},
  data() {
    return {
      menu: [
        {
          href: "/dashboard",
          title: "Dashboard",
          icon: {
            element: "font-awesome-icon",
            class: "side-bar-icon",
            attributes: {
              icon: "tachometer-alt"
            }
          }
        },
        {
          href: "/users",
          title: "Usuários",
          icon: {
            element: "font-awesome-icon",
            class: "side-bar-icon",
            attributes: {
              icon: "users"
            }
          }
        }
      ]
    };
  }
};
