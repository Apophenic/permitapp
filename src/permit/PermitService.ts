import { ID, Permit } from '@/permit/permit'

// replace with http calls to an actual api
export namespace PermitService {
  const permits: Permit[] = [
    JSON.parse('{"id":"1","projectType":"Interior Work","interiorProjects":["New bathroom"],"exteriorProjects":[],"specialties":["Electrical","Plumbing"]}')
  ]

  export function save(permit: Permit): ID {
    permit.id = Math.random().toString(36).substring(2) // hack; uuid preferred
    permits.push(permit)
    return permit.id
  }

  export function get(id: ID): Permit | null {
    return permits.find(p => p.id === id) ?? null
  }
}
