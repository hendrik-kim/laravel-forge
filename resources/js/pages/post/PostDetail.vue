<template>
    <div>
        <div>{{ post }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: ""
        };
    },
    created() {
        axios.get(`/api/posts/${this.$route.params.id}`).then(res => {
            this.post = res.data;
        });
    }
};
</script>

<style lang="scss" scoped></style>
