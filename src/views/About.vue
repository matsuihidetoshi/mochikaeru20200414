<template>
  <div class="about">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1>このサイトについて</h1>
          <v-card class="pa-3">
            <p class="description">
              浜松市の有志のエンジニアによって、
              開発・保守されて居ます。
              下記のGitHubのリポジトリに対して
              issueやpull requestを
              追加していただくことで開発に
              貢献していただくことができます。
            </p>
            <a href="https://github.com/matsuihidetoshi/mochikaeru20200414" target="_blank">GitHub</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.description > span {
  display: inline-block;
}
</style>
