<template>
    <div class="footer secondary">
        <div class="mt-3 ml-5 title font-weight-bold">{{ shop.short_name }}</div>
        <div class="mt-5 ml-4 body-2">TEL: {{ shop.tel }}</div>
        <v-btn v-bind:href="'tel:' + shop.tel"><v-icon>mdi-phone</v-icon></v-btn>
    </div>
</template>
<script>
export default {
    name: "Footer",
    props: [
        'shop'
    ]
}
</script>
<style>
.footer {
    display: flex;
    position: fixed;
    height: 50px;
    width: 100%;
    bottom: 0;
}
.footer > a {
    position: absolute;
    right: 10px;
    margin-top: 6px;
}
span > a {
    text-decoration: none;
}
</style>