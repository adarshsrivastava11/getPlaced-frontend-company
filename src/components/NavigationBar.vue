<template>
<div>
 <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span class="title ml-3 mr-5"><span class="font-weight-light">get</span>Placed</span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
      />

      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="dark"
    >
      <v-list
        dense
        class="dark"
      >
        <template v-for="(item, i) in items">
              <v-subheader v-if="item.heading" :key="i">
               <b> {{ item.heading }} </b>
              </v-subheader>
          
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          />
          <v-list-item
            v-else
            :key="i"
            link
          >
            <v-list-item-action>
              <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
              <router-link :to="item.url"  class="grey--text"> {{ item.text }} </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'lightbulb-outline', text: 'Newsfeed', url: '/dashboard' },
        { icon: 'reminder', text: 'Colleges', url: '/dashboard/colleges' },
        { divider: true },
        { heading: 'JAF' },
        { icon: 'plus', text: 'Create New JAFs', url: '/dashboard/jafs' },
        { icon: 'format-list-text', text: 'View All JAFs', url: '/dashboard/jafs' },
        { divider: true },
        { icon: 'archive', text: 'Profile', url: '/' },
      ],
    }),
  }
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
