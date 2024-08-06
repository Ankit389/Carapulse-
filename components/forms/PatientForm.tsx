"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"

import { UserFormValidation } from "@/lib/vaildation"; 
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"

import { useRouter } from "next/navigation" 

 export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA='textarer',
  PHONE_INPUT ='phoneinput',
  CHECKBOX='checkbox',
  DATE_PICKER ='datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
 } 



const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const PatientForm = () => {
const  router = useRouter();

const  [isLoading,setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone:"",
    },
  })
 
  
  function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);

    try {
    //   const userData = {name,email,phone};
       
    // const user =  await  createUser(userData);
       
    //    if(user) router.push(`/patients/${user.$id}/register`)

    }catch (error) {
         console.log(error);
    }
    
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
         <section className="mb-12 space-y-4">
          <h1 className="header"> Hi There 👋 </h1>
           <p className="text-yellow-600">
            Schedule your first  appointment.
           </p>
         </section>
          
        <CustomFormField
        fieldType={FormFieldType.INPUT}
         control={form.control}
          name="name"
          label="Full name"
          placeholder="john Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
         
         
        />
        <CustomFormField
        fieldType={FormFieldType.INPUT}
         control={form.control}
          name="email"
          label="Email"
          placeholder="21bme011@smvdu.ac.in"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
         
         
        />
        <CustomFormField
        fieldType={FormFieldType.INPUT}
         control={form.control}
          name="phone"
          label="Phone numbar"
          placeholder="(555) 123-4567"
          
         
         
        />
    
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm
