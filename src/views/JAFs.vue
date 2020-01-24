<template>
<v-container>
     <v-row>

      <v-col>
          <JAFCard />
      </v-col>


      <v-col>
           <JAFCard />
      </v-col>

    </v-row>
     <v-row>

      <v-col>
          <JAFCard />
      </v-col>


      <v-col>
           <JAFCard />
      </v-col>

    </v-row>
    <v-btn
              fixed
              dark
              fab
              bottom
              right
              color="pink"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
    </v-container>
</template>

<script>
import JAFCard from '@/components/JAFCard';

export default {
    components: {
        JAFCard
    }
}
</script>