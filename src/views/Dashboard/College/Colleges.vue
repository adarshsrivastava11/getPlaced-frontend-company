<template>
<v-container>
     <v-row>

      <v-col>
          <CollegeCard />
      </v-col>


      <v-col>
           <CollegeCard />
      </v-col>

    </v-row>
     <v-row>

      <v-col>
          <CollegeCard />
      </v-col>


      <v-col>
           <CollegeCard />
      </v-col>

    </v-row>
    </v-container>
</template>

<script>
import CollegeCard from '@/components/CollegeCard';

export default {
    components: {
        CollegeCard
    }
}
</script>