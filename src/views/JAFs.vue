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