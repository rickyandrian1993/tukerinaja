export interface LocationTypes {
  city: string
  branches?: {
    name: string
    address: string
    phone: string
  }[]
}