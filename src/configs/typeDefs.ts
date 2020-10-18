import { fileLoader } from 'merge-graphql-schemas'
import { join } from 'path'

const typesGlob = join('src','entities','**', '*.graphql')

const files = fileLoader(typesGlob, {
  recursive: true
})

export default files