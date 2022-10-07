export class RequestPath {
  value: string
  constructor(path: string, variables: {}[]) {
    let newPath = ''
    variables.forEach(v =>
      newPath = path.replace(`{${Object.keys(v)[0]}}`, Object.values(v)[0] as string)
    )
    this.value = newPath
  }
}
