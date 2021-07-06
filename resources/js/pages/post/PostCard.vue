<template>
    <v-card>
        <div>{{ post.title }}</div>
        <div>{{ post.content }}</div>
    </v-card>
</template>

<script>
export default {
    props: ["post"]
};
</script>

<style lang="scss" scoped></style>
