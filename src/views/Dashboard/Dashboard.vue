<template>
  <div id="keep">
   <NavigationBar />

    <v-content>
      <v-container
        fluid
        class="grey lighten-4 fill-height"
      >
     
            <router-view />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar';

export default {
    components: {
        NavigationBar
    }
}
</script>
<style>
#keep .v-navigation-drawer__border {
  display: none
}
</style>