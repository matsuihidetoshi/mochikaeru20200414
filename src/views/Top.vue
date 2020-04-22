<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          お店の味を<br>モチカエル！
        </h1>

        <p class="title">
          お店とおうちを<br>つなげるサイト
        </p>

        <v-btn to="/shops" class="title success">お店の一覧</v-btn>
      </v-col>

      <v-col cols="12">
        <iframe class="map" v-bind:src="map"></iframe>
      </v-col>

      <v-col cols="12">
        <p class="title">
          掲載希望の店舗様は<br>こちら⬇︎から
        </p>

        <v-btn href="https://forms.gle/m9tUPgG9JTgxEsZi8" class="title success" target="_blank">お店掲載申請</v-btn>
      </v-col>

      <v-flex xs12 sm12 md4 text-center class="pa-3">
        <v-card min-height="400px" class="pt-5 align-center">
          <h2 class="headline font-weight-bold mb-3 mt-7">
            使い方
          </h2>
          <div>お店を選ぼう</div>
          <v-btn to="/shops" class="title success">お店の一覧</v-btn>
          <div>⬇︎</div>
          <div>メニューをチェック</div>
          <div>⬇︎</div>
          <div>お店にTEL予約</div>
          <div>⬇︎</div>
          <div>お店に行って受け取ろう！</div>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4 text-center class="pa-3 mh-10">
        <v-card min-height="400px" class="pa-3" align="center">
          <h2 class="headline font-weight-bold mb-3 mt-7">
            QRコードでシェアしよう！
          </h2>
          <v-card width="200px" class="mt-10">
            <v-img
              :src="require('../assets/qr.png')"
              class="my-3"
              contain
              height="200"
            />
          </v-card>
          <p>mochikaeru.com</p>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4 text-center class="pa-3 mh-10">
        <v-card min-height="400px" class="pa-3">
          <h2 class="headline font-weight-bold mb-3 mt-7">
            大事なページ
          </h2>
          <p class="description">
            浜松市では、新型コロナウイルス
            感染症防止のために各種の
            対策サイトを公開して居ます。
            オープンソースプロジェクトとして
            進行しており、下記リンクより
            開発に貢献していただくことができます。
          </p>
          <p
            v-for="(link, i) in importantLinks"
            :key="i"
            class="mx-1"
            target="_blank"
          >
            <a :href="link.href" target="_blank">{{ link.text }}</a>
          </p>
        </v-card>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Top',

    data: () => ({
      importantLinks: [
        {
          text: '新型コロナウイルス感染症拡大防止サイト',
          href: 'https://stopcovid19.code4hamamatsu.org/',
        },
        {
          text: '浜松市の休業要請に基づく協力金の支給について',
          href: 'https://www.city.hamamatsu.shizuoka.jp/sangyoshinko/shougyo2.html',
        },
        {
          text: '防止サイトGitHub',
          href: 'https://github.com/code-for-hamamatsu',
        },
        {
          text: 'このサイトのGitHub',
          href: 'https://github.com/matsuihidetoshi/mochikaeru20200414',
        },
      ],
      map: "https://www.google.com/maps/d/embed?mid=1znYQhKGizcZab2ZTFwQ8r88Kekl1IiQn&hl=ja",
    }),
  }
</script>
<style>
.description span {
  display: inline-block;
}
.map {
    width: 90%;
    margin: 5%;
    height: 400px;
}
</style>