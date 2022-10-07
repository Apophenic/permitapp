export type ID = string

export class Permit {
  constructor(
      public id: ID|null,
      public projectType: ProjectType,
      public interiorProjects: InteriorProject[],
      public exteriorProjects: ExteriorProject[],
      public specialties: Specialty[]) {}
}

export enum ProjectType {
  Interior = 'Interior Work', Exterior = 'Exterior Work'
}
export const ProjectTypes = Object.values(ProjectType)

export enum InteriorProject {
  NewBathroom = 'New bathroom', NewLaundryRoom = 'New laundry room', BathroomRemodel = 'Bathroom remodel', Other = 'Other'
}
export const InteriorProjects = Object.values(InteriorProject)

export enum ExteriorProject {
  GarageDoorReplace = 'Garage door replacement', ExteriorDoors = 'Work on exterior doors', Reroofing = 'Re-roofing', Fences = 'Building fences less than 6 feet', Other = 'Other'
}
export const ExteriorProjects = Object.values(ExteriorProject)

export enum Specialty {
  Electrical = 'Electrical', Plumbing = 'Plumbing'
}
export const Specialties = Object.values(Specialty)
