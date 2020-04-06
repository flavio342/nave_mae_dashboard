import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

import "./app.scss";

export default {
  name: "app",
  components: {
    SidebarMenu
  },
  mounted() {
    let token = this.$session.get("token");
    if (token) {
      this.axios.defaults.headers.common["Authorization"] = token;
    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    onItemClick(event, item) {
      if (item.ref == "log_out") {
        this.log_out();
      }
    }
  },
  data() {
    return {
      menu: [
        /*{
          href: "/dashboard",
          title: "Dashboard",
          icon: {
            element: "font-awesome-icon",
            class: "side-bar-icon",
            attributes: {
              icon: "tachometer-alt"
            }
          }
        },*/
        {
          href: "",
          title: "Usuários",
          ref: "users",
          icon: {
            element: "font-awesome-icon",
            class: "side-bar-icon",
            attributes: {
              icon: "users"
            }
          },
          child: [
            {
              href: "/",
              title: "Coordenadores",
              ref: "managers",
              icon: {
                element: "font-awesome-icon",
                class: "side-bar-sub-icon",
                attributes: {
                  icon: "stamp"
                }
              }
            },
            {
              href: "/students",
              title: "Estudantes",
              ref: "students",
              icon: {
                element: "font-awesome-icon",
                class: "side-bar-sub-icon",
                attributes: {
                  icon: "user-graduate"
                }
              }
            },
            {
              href: "/relatives",
              title: "Familiares",
              ref: "relatives",
              icon: {
                element: "font-awesome-icon",
                class: "side-bar-sub-icon",
                attributes: {
                  icon: "hand-holding-usd"
                }
              }
            }
          ]
        },
        {
          href: "",
          title: "Estruturas",
          ref: "structures",
          icon: {
            element: "font-awesome-icon",
            class: "side-bar-icon",
            attributes: {
              icon: "book"
            }
          },
          child: [
            {
              href: "/institutions",
              title: "Instituições",
              ref: "institutions",
              icon: {
                element: "font-awesome-icon",
                class: "side-bar-sub-icon",
                attributes: {
                  icon: "school"
                }
              }
            },
            {
              href: "/classes",
              title: "Turmas",
              ref: "classes",
              icon: {
                element: "font-awesome-icon",
                class: "side-bar-sub-icon",
                attributes: {
                  icon: "chalkboard"
                }
              }
            },
            {
              href: "/grades",
              title: "Notas",
              ref: "grades",
              icon: {
                element: "font-awesome-icon",
                class: "side-bar-sub-icon",
                attributes: {
                  icon: "star"
                }
              }
            },
            {
              href: "/attendances",
              title: "Presenças",
              ref: "attendances",
              icon: {
                element: "font-awesome-icon",
                class: "side-bar-sub-icon",
                attributes: {
                  icon: "check"
                }
              }
            },
            {
              href: "/events",
              title: "Eventos",
              ref: "events",
              icon: {
                element: "font-awesome-icon",
                class: "side-bar-sub-icon",
                attributes: {
                  icon: "calendar-week"
                }
              }
            }
          ]
        },
        {
          href: "",
          title: "Sair",
          ref: "log_out",
          icon: {
            element: "font-awesome-icon",
            class: "side-bar-icon",
            attributes: {
              icon: "sign-out-alt"
            }
          }
        }
      ]
    };
  }
};
