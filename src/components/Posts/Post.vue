<template>
  <v-container style="margin-top: 70px">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1 class="primary--text">{{ post.title }}</h1>
          </v-card-title>
          <v-card-media :src="post.imageUrl" height="600px"></v-card-media>
          <v-card-text>
            <div class="info--text mb-1">{{ post.date | date }} - {{ post.location }}</div>
            <hr>
            <div class="mt-3">{{ post.description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon class="primary--text">favorite</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    post () {
      return this.$store.getters.loadedPost(this.id)
    }
  }
}
</script>
