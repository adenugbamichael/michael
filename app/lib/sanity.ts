import { createClient } from "next-sanity"

const projectId = "2qyw3d47"
const dataset = "production"
const apiVersion = "2023-01-01"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
