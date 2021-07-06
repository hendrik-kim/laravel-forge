import Homepage from "../pages/Homepage.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import PostDetail from "../pages/post/PostDetail.vue";
import PostList from "../pages/post/PostList.vue";

export default {
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Homepage
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/posts",
            name: "PostList",
            component: PostList
        },
        {
            path: "/posts/:id",
            name: "PostDetail",
            component: PostDetail
        }
    ]
};
