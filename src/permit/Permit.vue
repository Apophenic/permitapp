<template>
  <div class="pad">
    <div class="margin-bottom">
      <div class="margin-half-bottom">
        <ion-text color="light" class="heavy">What sort of residential work are you doing?</ion-text>
      </div>
      <ion-select v-model="projectType">
        <ion-select-option v-for="t of ProjectTypes" :value="t">{{t}}</ion-select-option>
      </ion-select>
    </div>
    <div v-if="projectType === 'Interior Work'" class="margin-half-bottom">
      <div class="margin-half-bottom">
        <ion-text color="light" class="heavy">What sort of interior work are you doing?</ion-text>
      </div>
      <ion-select v-model="interiorProjects" multiple>
        <ion-select-option v-for="p of InteriorProjects" :value="p">{{p}}</ion-select-option>
      </ion-select>
    </div>
    <div v-if="projectType === 'Exterior Work'" class="margin-half-bottom">
      <div class="margin-half-bottom">
        <ion-text color="light" class="heavy">What sort of exterior work are you doing?</ion-text>
      </div>
      <ion-select v-model="exteriorProjects" multiple>
        <ion-select-option v-for="p of ExteriorProjects" :value="p">{{p}}</ion-select-option>
      </ion-select>
    </div>
    <div v-if="hasProjects" class="margin-half-bottom">
      <div class="margin-half-bottom">
        <ion-text color="light" class="heavy">Does the project involve the following?</ion-text>
      </div>
      <ion-select v-model="specialties" placeholder="None" multiple>
        <ion-select-option v-for="s of Specialties" :value="s">{{s}} </ion-select-option>
      </ion-select>
    </div>
    <ion-button @click="submit()" class="float-right" :disabled="!canSubmit">Submit</ion-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonicComponents } from '@/common/IonicComponents'
import { ExteriorProject, ExteriorProjects, InteriorProject, InteriorProjects, Permit, ProjectType, ProjectTypes, Specialties, Specialty } from '@/permit/permit.ts'
import { PermitService } from '@/permit/PermitService'
import { ToastService } from '@/common/ToastService'
import { Route, RouteService } from '@/common/RouteService'

export default defineComponent({
  components: { ...IonicComponents },
  data: () => ({
    ProjectTypes, InteriorProjects, ExteriorProjects, Specialties,
    projectType: '' as ProjectType,
    interiorProjects: [] as InteriorProject[],
    exteriorProjects: [] as ExteriorProject[],
    specialties: [] as Specialty[]
  }),
  computed: {
    canSubmit() {
      return !!this.projectType && (this.hasProjects)
    },
    hasProjects() {
      return this.interiorProjects.length > 0 || this.exteriorProjects.length > 0
    }
  },
  methods: {
    async submit() {
      const permit = new Permit(null, this.projectType, this.interiorProjects, this.exteriorProjects, this.specialties)
      const id = PermitService.save(permit)
      await ToastService.success('Success! Please see above for additional requirements')
      await RouteService.goTo(Route.Review, id)
    }
  },
  watch: {
    projectType: function() {
      this.interiorProjects = []
      this.exteriorProjects = []
      this.specialties = []
    }
  }
});
</script>

<style lang="scss">

</style>
