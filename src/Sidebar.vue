<template>
  <div class="menu">
    <div class="pad-half-top pad-half-left">
      <img src="@/assets/logo.png" class="size-48"/>
    </div>
    <div class="pad">
      <ion-icon :icon="statsChartOutline" :color="isStatsRoute ? 'primary' : 'light'" @click="goToStats" class="size-32 clickable margin-half-bottom"></ion-icon>
      <ion-icon :icon="addCircleOutline" :color="isAddToLibraryRoute ? 'primary' : 'light'" @click="goToAddLibrary" class="size-32 clickable margin-half-bottom"></ion-icon>
      <ion-icon :icon="documentTextOutline" :color="isPlaylistsRoute ? 'primary' : 'light'" @click="goToPlaylists" class="size-32 clickable margin-half-bottom"></ion-icon>
      <ion-icon :icon="documentAttachOutline" :color="isSmartPlaylistsRoute ? 'primary' : 'light'" @click="goToSmartPlaylists" class="size-32 clickable margin-half-bottom"></ion-icon>
      <ion-icon :icon="musicalNotesOutline" :color="isNowPlayingRoute ? 'primary' : 'light'" @click="goToNowPlaying" class="size-32 clickable margin-half-bottom"></ion-icon>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Route, RouteService } from './common/RouteService'
  import { IonicComponents, IonicIcons } from '@/common/IonicComponents'

  export default defineComponent({
    components: { ...IonicComponents },
    setup: () => (IonicIcons),
    computed: {
      isArtistsRoute: () => RouteService.onRoute(Route.Artists),
      isStatsRoute: () => RouteService.onRoute(Route.Stats),
      isPlaylistsRoute: () => RouteService.onRoute(Route.Playlists),
      isSmartPlaylistsRoute: () => RouteService.onRoute(Route.SmartPlaylists),
      isAddToLibraryRoute: () => RouteService.onRoute(Route.AddToLibrary),
      isNowPlayingRoute: () => RouteService.onRoute(Route.NowPlaying)
    },
    methods: {
      goToArtists: () => RouteService.goTo(Route.Artists),
      goToStats: () => RouteService.goTo(Route.Stats),
      goToPlaylists: () => RouteService.goTo(Route.Playlists),
      goToSmartPlaylists: () => RouteService.goTo(Route.SmartPlaylists),
      goToAddLibrary: () => RouteService.goTo(Route.AddToLibrary),
      goToNowPlaying: () => RouteService.goTo(Route.NowPlaying)
    }
  })
</script>

<style scoped lang="scss">
  @import "theme/variables.scss";

  .menu {
    flex: 0 0 64px;
    border-right: 1px solid $dark;
    border-bottom: 1px solid $dark;
  }
</style>
