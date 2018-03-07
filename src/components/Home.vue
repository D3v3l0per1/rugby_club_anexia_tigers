<template>
  <div id="Home">
    <v-container>

      <v-layout row style="margin-top: 70px">
        <v-flex xs10 offset-xs1>
          <v-carousel>
            <v-carousel-item
              v-for="post in posts"
              :key="post.id"
              :src="post.imageUrl"
              @click.native="onLoadPost(post.id)">
              <div class="title">
                {{ post.title }}
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>

      <v-layout row mt-4>
        <v-flex xs12>
          <h1 class="headline">NEWS</h1>
          <hr>
        </v-flex>
      </v-layout>

      <v-layout row mt-0>
        <v-flex xs12 sm4 style="padding: 10px" v-for="post in latestPosts" :key="post.id">
          <v-card>
            <v-card-media :src="post.imageUrl" height="200px"  @click="onLoadPost(post.id)" style="cursor: pointer"></v-card-media>
            <v-card-title>
              <div>
                <h3 class="headline mb-0">{{ post.title }}</h3>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn icon><v-icon>favorite</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn flat @click="onLoadPost(post.id)">Weiterlesen</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    <v-parallax src="http://www.edinburghrugby.org/sites/default/files/editor/images/13868149.jpg"></v-parallax>
  </div>
</template>

<script>
  export default {
    computed: {
      posts () {
        return this.$store.getters.featuredPosts
      },
      latestPosts () {
        return this.$store.getters.latestPosts
      }
    },
    methods: {
      onLoadPost (id) {
        this.$router.push('/posts/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
