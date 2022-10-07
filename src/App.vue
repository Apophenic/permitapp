<template>
  <div class="center-page-content">
    <ion-button v-if="isRootRoute()" @click="startProcess()" class="margin-top">Start permit process</ion-button>
    <router-view class="content"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonicComponents } from '@/common/IonicComponents'
import { Route, RouteService } from '@/common/RouteService'

export default defineComponent({
    components: {...IonicComponents},
    methods: {
      isRootRoute() {
        return !RouteService.getCurrentRoute()
      },
      startProcess() {
        RouteService.goTo(Route.Permit)
      }
    }
  });
</script>

<style lang="scss">
  @import "theme/main.scss";
</style>
