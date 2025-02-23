"use client"
import {
    
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import    {Control} from "react-hook-form"       
import { FormFieldType } from "./forms/PatientForm"
 import Image from "next/image"
 import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'





interface CustomProps {
    control:Control<any>,
    fieldType:FormFieldType,
    name:string,
    label?:string,
    placeholder?:string,
    iconSrc?:string,
    iconAlt?:string,
    disabled?:boolean,
    dateFormat?:string,
    showTimeSelect?: boolean,
    children?:React.ReactNode,
    RenderSkelton?:(field:any) =>React.ReactNode,




}

const RederField = ({field,props}:{field:any; props: CustomProps})  => {
const {fieldType,iconSrc, iconAlt,placeholder} = props;

    switch (fieldType) {
      case FormFieldType.INPUT:
         return (
          <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {props.iconSrc && (
            <Image
              src={props.iconSrc}
              height={24}
              width={24}
              alt={props.iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
         )
          case FormFieldType.PHONE_INPUT:
            return(
              <FormControl>
                <PhoneInput
            defaultCountry="US"
            placeholder={props.placeholder}
            international
            withCountryCallingCode  
            value={field.value}
            onChange={field.onChange}  

             
            className="shad-input border-0" 

          />
              </FormControl>
            )

         default:
      break;
    }
    
   
  }

const CustomFormField = ( props:CustomProps) => {
 const {control,fieldType,name,label} = props;
  



  return (
    
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex-1">
              {fieldType != FormFieldType.CHECKBOX && label &&(
                <FormLabel>{label}</FormLabel>
              )}
              

            
              <RederField field={field} props={props} />

               <FormMessage className="shad-error"/>
            </FormItem>
          )}
        />
  )
}

export default CustomFormField
