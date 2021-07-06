<template>
    <div>
        <div v-for="post in postList" :key="post.id">
            <router-link
                :to="{
                    path: `/posts/${post.id}`
                }"
            >
                <post-card :post="post" />
            </router-link>
        </div>
    </div>
</template>

<script>
import PostCard from "./PostCard.vue";
export default {
    components: { PostCard },
    data() {
        return {
            postList: null
        };
    },
    created() {
        this.getPostList();
    },
    methods: {
        async getPostList() {
            await axios.get(`/api/posts`).then(res => {
                this.postList = res.data;
            });
        }
    }
};
</script>

<style lang="scss" scoped></style>
