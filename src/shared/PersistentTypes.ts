export type LocationPersistent = {
  college: string,
  name: string
}

export type BookingPersistent = {
  location: LocationPersistent,
  user: {
    name: string,
    email:string
  },
  time: Date
}
