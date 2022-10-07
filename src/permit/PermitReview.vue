<template>
  <div class="pad">
    <div v-if="noPermitRequired()">
      <ion-text color="light" class="lg-font heavy">Nothing is required! You’re set to build.</ion-text>
    </div>

    <div v-if="requiresOverTheCounter()">
      <ion-text color="light" class="lg-font heavy">Over-the-Counter Submission Process</ion-text>
      <ul>
        <li>Prepare your application including all necessary forms from above,</li>
        <li>If plans are required, prepare two copies of each plan set.</li>
        <li>Go through the OTC review process at San Francisco DBI.</li>
        <li>Once approved, pay permit fees and get your approved permit and job card</li>
      </ul>
    </div>

    <div v-if="requiresInHouse()">
      <ion-text color="light" class="lg-font heavy">In-House Review Process</ion-text>
      <ul>
        <li>Prepare your application including all necessary forms from above and plans are required.</li>
        <li>Submit application (all forms and plans) for electronic review on SFDBI website.</li>
        <li>Track permit approval status at <a href="https://dbiweb02.sfgov.org/dbipts/">https://dbiweb02.sfgov.org/dbipts/</a></li>
        <li>Once approved, pay permit fees and get your approved permit and job card.</li>
      </ul>
    </div>

    <div v-if="!!electricalFormRequired() || plumbingFormRequired()">
      <ion-text color="light" class="heavy">Here are the forms you'll need:</ion-text>
      <ul>
        <li v-if="electricalFormRequired()">
          <a href="https://sfdbi.org/sites/default/files/migrated/FileCenter/Documents/forms/Inspection_Services/Electrical_Permit_Worksheet_2013.pdf&sa=D&source=editors&ust=1665089898012584&usg=AOvVaw2lEkNhdSz2MDaz80fVaVMW">
            Electrical Worksheet
          </a>
        </li>
        <li v-if="plumbingFormRequired()">
          <a href="https://sfdbi.org/sites/default/files/Plumbing%2520Worksheet.pdf&sa=D&source=editors&ust=1665089898012844&usg=AOvVaw0tgfqlomTeRKSAiqdz7WJX">
            Plumbing Worksheet
          </a>
        </li>
      </ul>
    </div>

    <div v-if="plansRequired()">
      <ion-text color="light" class="heavy">You'll need to submit plans for the following:</ion-text>
      <ul>
        <li v-if="hasNewBathroom()">New bathroom</li>
        <li v-if="hasNewLaundryroom()">New laundry room</li>
        <li v-if="hasGarageDoor()">Garage door replacement</li>
        <li v-if="hasExteriorDoors()">Exterior doors</li>
      </ul>
    </div>

    <div class="margin-top border-top">
      <ion-text color="medium"><pre>{{permitJs}}</pre></ion-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonicComponents } from '@/common/IonicComponents'
import router from '@/router'
import { PermitService } from '@/permit/PermitService'
import { ExteriorProject, InteriorProject, Permit, Specialty } from '@/permit/permit.ts'

export default defineComponent({
  components: { ...IonicComponents },
  computed: {
    permit(): Permit { // TODO move to onMount, change methods to computed props
      const id = router.currentRoute.value.params.id as string
      const permit = PermitService.get(id)
      if (permit === null) throw new Error('Unknown permit ' + id)
      return permit
    },
    permitJs() {
      const permit = PermitService.get(router.currentRoute.value.params.id as string)
      return JSON.stringify(permit, null, 2)
    }
  },
  methods: {
    requiresInHouse() {
      return this.permit.interiorProjects.includes(InteriorProject.Other)
          || this.permit.exteriorProjects.includes(ExteriorProject.Other)
    },
    requiresOverTheCounter() {
      return !this.requiresInHouse()
          && (this.permit.interiorProjects.some(p => [InteriorProject.NewBathroom, InteriorProject.NewLaundryRoom, InteriorProject.BathroomRemodel].includes(p))
          || this.permit.exteriorProjects.some(p => [ExteriorProject.GarageDoorReplace, ExteriorProject.ExteriorDoors, ExteriorProject.Reroofing].includes(p)))
    },
    noPermitRequired() {
      return !this.requiresInHouse() && !this.requiresOverTheCounter()
    },
    electricalFormRequired() {
      return this.permit.specialties.includes(Specialty.Electrical)
    },
    plumbingFormRequired() {
      return this.permit.specialties.includes(Specialty.Plumbing)
    },
    plansRequired() {
      return this.permit.interiorProjects.some(p => [InteriorProject.NewBathroom, InteriorProject.NewLaundryRoom].includes(p))
          || this.permit.exteriorProjects.some(p => [ExteriorProject.GarageDoorReplace, ExteriorProject.ExteriorDoors])
    },
    hasNewBathroom() { return this.permit.interiorProjects.includes(InteriorProject.NewBathroom) },
    hasNewLaundryroom() { return this.permit.interiorProjects.includes(InteriorProject.NewLaundryRoom) },
    hasGarageDoor() { return this.permit.exteriorProjects.includes(ExteriorProject.GarageDoorReplace) },
    hasExteriorDoors() { return this.permit.exteriorProjects.includes(ExteriorProject.ExteriorDoors) }
  }
});
</script>

<style lang="scss">

</style>
