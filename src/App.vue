<template>
    <v-app>
      <navigation></navigation>

      <v-content transition="slide-x-transition">
          <router-view></router-view>
      </v-content>
    </v-app>
</template>

<script>
import navigation from '@/components/navigation';

export default {
    name: 'App',
    components: {navigation}
};
</script>
