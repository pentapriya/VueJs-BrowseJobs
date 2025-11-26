import { createWebHistory,createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobDataView from "@/views/JobDataView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:"home",
            component:HomeView
        },
        {
            path:'/jobs',
            name:"jobs",
            component:JobsView
        },
        {
            path:'/jobs/:id',
            name:"view-jobs",
            component:JobDataView
        },
        {
            path:'/jobs/add',
            name:"add-jobs",
            component:AddJobView
        },
        {
            path:'/jobs/edit/:id',
            name:"edit-jobs",
            component:EditJobView
        },
         {
            path:'/:catchAll(.*)',
            name:"Not Found",
            component:NotFoundView
        }
    ]
})

export default router