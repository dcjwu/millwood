export type DbAddressesType = {
   title: string
   company?: string
   regNr?: string
   address: string
   phone: string
   email?: string
}

export const dbAddresses: DbAddressesType[] = [
   {
      title: "Head Office",
      company: "SIA Millhouse Trade",
      regNr: "440203387800",
      address: "Pils Laukums 4-1, Riga, LV-1050, Latvia",
      phone: "+371 26622113",
      email: "info@millwood.lv"
   },
   {
      title: "Representative in Ukraine:",
      address: "Pils Laukums 4-1, Riga, LV-1050, Latvia",
      phone: "+371 26622113",
   },
   {
      title: "Representative in Belgium",
      address: "Pils Laukums 4-1, Riga, LV-1050, Latvia",
      phone: "+371 26622113",
      email: "info@millwood.lv"
   },
]