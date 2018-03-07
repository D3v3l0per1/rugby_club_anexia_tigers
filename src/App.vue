<template>
  <v-app>

    <!-- SideNav -->
    <v-navigation-drawer temporary fixed v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.tile" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <!-- Navbar -->
    <v-toolbar fixed dark class="primary">
      <v-toolbar-side-icon @click.native="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">Logo</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          flat 
          v-for="item in menuItems" 
          :key="item.title"
          :to="item.link"
        >{{ item.title }}</v-btn>
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
        { icon: '', title: 'Home', link: '/' },
        { icon: '', title: 'Posts', link: '/posts' },
        { icon: '', title: 'Termine', link: '/termine' },
        { icon: '', title: 'Tigers', link: '/tigers' },
        { icon: '', title: 'Sponsoren', link: '/sponsoren' },
        { icon: '', title: 'History', link: '/history' },
        { icon: '', title: 'Kontakt', link: '/kontakt' },
        { icon: '', title: 'Anmelden', link: '/signin' },
        { icon: '', title: 'Registrieren', link: '/signup' }
      ]
    }
  },
  name: 'App'
}
</script>
