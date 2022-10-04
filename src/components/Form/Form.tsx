import React from "react"

import axios from "axios"

import { Button } from "@lib/Button/Button"

import s from "./Form.module.scss"

type FormType = {
   name: string
   company: string
   email: string
   message: string
}

const initialState: FormType = {
   name: "",
   company: "",
   email: "",
   message: ""
}

export const Form: React.FC = (): JSX.Element => {

   const ref = React.useRef<HTMLButtonElement>(null)

   const [form, setForm] = React.useState<FormType>(initialState)

   const [loading, setLoading] = React.useState<boolean>(false)
   const [error, setError] = React.useState<string>("")
   const [success, setSuccess] = React.useState<string>("")

   const handleInputChange = (event: React.SyntheticEvent): void => {
      const target = event.target as HTMLInputElement
      const {
         name,
         value
      } = target

      setForm({
         ...form,
         [name]: value
      })
   }

   const handleFormSubmit = async (event: React.SyntheticEvent): Promise<void> => {
      event.preventDefault()
      setLoading(true)

      await axios.post("api/contact", form)

         .then(res => {
            setLoading(false)
            setError("")
            if (res.status === 200) {
               setSuccess("Email sent successfully")

               setTimeout(() => {
                  setForm(initialState)
                  setSuccess("")
               }, 2500)

            } else {
               setError("Unexpected response")
            }

         })

         .catch(err => {
            setError(err.response.message)
         })

      ref.current && ref.current.blur()
   }

   return (
      <form className={s.form} onSubmit={handleFormSubmit}>

         <div className={s.wrapper}>
            <input required name="name" placeholder="Name"
                   type="text"
                   value={form.name} onChange={handleInputChange}/>

            <input name="company" placeholder="Company"
                   type="text"
                   value={form.company} onChange={handleInputChange}/>

            <input required name="email" placeholder="Email"
                   type="email"
                   value={form.email} onChange={handleInputChange}/>

            <textarea required name="message" placeholder="Your message"
                      rows={4}
                      value={form.message} onChange={handleInputChange}/>
         </div>

         <Button ref={ref} ariaLabel="contact-us" error={error}
                 loading={loading} success={success}
                 type="submit"
                 variant="secondary">
            Submit
         </Button>

      </form>
   )
}