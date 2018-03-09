<template>
  <v-container style="margin-top: 70px;">
    <v-layout row wrap>
      <v-flex xs12 md8 offset-md2>
        <v-layout row>
          <v-flex xs6><h1 class="primary--text">Alle Posts</h1></v-flex>
          <v-flex xs6 class="text-sm-right"><v-btn class="primary" router to="/posts/new"><v-icon left>create</v-icon> Neuer Post</v-btn></v-flex>
        </v-layout>
        <hr>
      </v-flex>
    </v-layout>

    <v-layout row wrap v-for="post in posts" :key="post.id" class="mt-3">
      <v-flex xs12 md8 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media :src="post.imageUrl" height="180px"></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
              <v-card-title primary-title>
                <div>
                  <h1 class="white--text mb-0">{{ post.title }}</h1>
                  <div>{{ post.date | date }}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat :to="'/posts/' + post.id">
                  <v-icon left light>arrow_forward</v-icon>
                  Weiterlesen
                </v-btn>
              </v-card-actions>
            </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>
