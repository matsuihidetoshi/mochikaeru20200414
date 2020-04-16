<template>
  <div class="shops">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1>お店一覧</h1>
            <v-row>
              <v-flex
              v-for="(shop, index) in shops"
              v-bind:key="index"
              xs6 sm6 md4 text-center class="pa-3"
            >
              <v-card min-height="200px" class="pa-3">
                <router-link v-bind:to="{ name : 'ShopDetail', params : { key: shop.key }}" @click.native="setShop(shop.key)">
                    <h3>{{ shop.short_name }}</h3>
                    <img class="thumbnail mt-3" v-bind:src="require('@/assets/shops/' + shop.key + '/thumbnail.jpg')" alt="">
                </router-link>
              </v-card>
            </v-flex>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import shops from '../data/shops.json'
import url from '../data/url.json'
import axios from 'axios'

export default {
  name: 'ShopIndex',
  data () {
      return {
          shops: shops,
          apiShops: null 
      }
  },
  methods: {
    setShop: function(key) {
      localStorage.shop = key
    }
  },
  mounted() {
    axios.get(url.data, {
      params: {

      }
    }).then(result => {
      this.apiShops = result.data
    }).catch(error => {
      this.apiShops = error
    })
  }
}
</script>
<style>
.thumbnail {
    height: 100px;
}
</style>
    