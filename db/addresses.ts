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
      address: "Pils laukums 4-1, Riga, LV-1050, Latvia",
      phone: "+371 26622113",
      email: "info@millwood.lv"
   },
   {
      title: "Representative in Ukraine:",
      address: "Yevhena Konovaltsia St, 36, Kyiv, Ukraine, 02000",
      phone: "+380 672453950",
   },
   {
      title: "Representative in Belgium",
      address: "Rue Sneessens 1, 1040 Etterbeek, 1040 Belgium",
      phone: "+324 77974797",
      email: "benelux@millwood.lv"
   },
]
