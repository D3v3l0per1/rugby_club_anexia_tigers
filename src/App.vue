<template>
  <v-app>

    <!-- SideNav -->
    <v-navigation-drawer temporary fixed v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.tile">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <!-- Navbar -->
    <v-toolbar fixed dark class="primary">
      <v-toolbar-side-icon @click.native="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Logo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-for="item in menuItems" :key="item.title">
        <v-btn flat>{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <router-view/>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        { icon: '', title: 'Home' },
        { icon: '', title: 'News' },
        { icon: '', title: 'Termine' },
        { icon: '', title: 'Tigers' },
        { icon: '', title: 'Sponsoren' },
        { icon: '', title: 'History' },
        { icon: '', title: 'Kontakt' }
      ]
    }
  },
  name: 'App'
}
</script>
