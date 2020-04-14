<template>
    <div class="shop">
        <v-container>
            <v-row class="text-center">
                <v-col cols="12">
                    <h1>{{ shop.name }}</h1>
                    <v-row>
                        <v-flex
                        v-for="(item, index, i) in shop.items"
                        v-bind:key="i"
                        xs6 sm6 md4 text-center class="pa-3"
                        >
                            <v-card class="pa-3">
                                <h4>{{ i + 1 + '.' + item.name }}</h4>
                                <img v-if="(item.image_path)" class="itemImage" v-bind:src="require('@/assets/shops/' + shop.key + '/items/' + item.image_path)" alt="">
                                <p>{{ item.description }}</p>
                                <p>¥{{ item.price.toLocaleString() }}-</p>
                            </v-card>
                        </v-flex>
                    </v-row>
                    <v-row>
                        <v-flex
                        v-for="(item, index, i) in shop.side_items"
                        v-bind:key="i"
                        xs6 sm6 md4 text-center class="pa-3"
                        >
                            <v-card class="pa-3">
                                <h4>{{ i + 101 + '.' + item.name }}</h4>
                                <p>{{ item.description }}</p>
                                <p>¥{{ item.price.toLocaleString() }}-</p>
                            </v-card>
                        </v-flex>
                    </v-row>
                    <v-row v-if="(shop.notices)">
                        <v-col
                        v-for="(notice, index) in shop.notices"
                        v-bind:key="index"
                        cols="12"
                        >
                            <v-card class="pa-5">
                                {{ notice }}
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12">
                    <v-card class="pb-8">
                        <h4 class="pa-3">{{ shop.name }}</h4>
                        <v-row class="text-center">
                            <v-flex xs12 sm6 md6 text-center class="pa-3">
                                <img class="shopImage pa-3" v-bind:src="require('@/assets/shops/' + shop.key + '/main.jpg')" alt="main">
                            </v-flex>
                            <v-flex xs12 sm6 md6 text-center class="pa-3">
                                <img class="shopImage pa-3" v-bind:src="require('@/assets/shops/' + shop.key + '/sub.jpg')" alt="sub">
                            </v-flex>
                        </v-row>
                        <p class="pa-3 title">{{ shop.description }}</p>
                        <iframe class="map" v-bind:src="mapBefore + shop.map + mapAfter"></iframe>
                        <v-list-item-group v-model="item" color="primary" class="ml-xs-2 ml-sm-12 body-2">
                            <v-list-item>{{ shop.name }}</v-list-item>
                            <v-list-item>〒{{ shop.zipcode }}</v-list-item>
                            <v-list-item class="address">
                                {{ shop.prefecture }}&nbsp;
                                {{ shop.city }}&nbsp;
                                {{ shop.address }}&nbsp;
                                {{ shop.other_address }}
                            </v-list-item>
                            <v-list-item>注文受付時間:&nbsp;{{ shop.reception_hours }}</v-list-item>
                            <v-list-item>受渡可能時間:&nbsp;{{ shop.delivery_hours }}</v-list-item>
                            <v-list-item>定休日:&nbsp;{{ shop.close }}</v-list-item>
                            <v-list-item>支払い方法:&nbsp;{{ shop.payments }}</v-list-item>
                            <v-list-item>
                                URL:<a v-bind:href="shop.url" target="_blank">{{ shop.url }}</a>
                            </v-list-item>
                        </v-list-item-group>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <Footer v-bind:shop="shop" />
    </div>
</template>
<script>
import Footer from './Footer'
import shops from '../data/shops.json'
export default {
    name: "Shop",
    components: {
        Footer
    },
    data() {
        return {
            shop: shops[this.$route.params.key],
            mapBefore: "https://www.google.com/maps/embed?",
            mapAfter: "\""
        }
    },
}
</script>
<style>
.itemImage {
    height: 120px;
}
.shopImage {
    width: 100%;
}
.shop {
    margin-bottom: 50px;
}
.map {
    width: 90%;
    margin: 5%;
    height: 400px;
}
.address {
    word-break: keep-all;
}
</style>