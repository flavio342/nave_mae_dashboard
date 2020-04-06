import Vue from "vue";
import Router from "vue-router";

import managers from "../components/managers/index.vue";
import students from "../components/students/index.vue";
import relatives from "../components/relatives/index.vue";
import institutions from "../components/institutions/index.vue";
import classes from "../components/classes/index.vue";
import login from "../components/login/index.vue";
import grades from "../components/grades/index.vue"
import attendances from "../components/attendances/index.vue"
import events from "../components/events/index.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "managers",
      component: managers
    },
    {
      path: "/managers",
      name: "managers",
      component: managers
    },
    {
      path: "/students",
      name: "students",
      component: students
    },
    {
      path: "/relatives",
      name: "relatives",
      component: relatives
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/institutions",
      name: "institutions",
      component: institutions
    },
    {
      path: "/classes",
      name: "classes",
      component: classes
    },
    {
      path: "/grades",
      name: "grades",
      component: grades
    },
    {
      path: "/attendances",
      name: "attendances",
      component: attendances
    },
    {
      path: "/events",
      name: "events",
      component: events
    }
  ]
});
