import { useState } from "react"
import Button from "./Button"

export default function ContactForm() {

    const [formValues,setFormValues] = useState({
        name : "",
        email : "",
        phone : "",
        desc : ""
    });


    return (
        <form action="https://getform.io/f/1521c966-4974-45e3-8f7e-788df09cd3c1" method="POST" encType="multipart/form-data" id="contact" className="w-full p-2 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm text-primary after:content-['*'] after:ml-0.5 md:text-lg lg:text-xl">Name</label>
                <input type="text" id="name" name="name" className="border border-primary rounded-md focus:outline-secondary p-1 " onChange={(e) => setFormValues({...formValues, name : e.target.value})} value={formValues.name}/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm text-primary after:content-['*'] after:ml-0.5 md:text-lg lg:text-xl">Email</label>
                <input type="email" id="email" name="email" className="border border-primary rounded-md focus:outline-secondary p-1 " onChange={(e) => setFormValues({...formValues, email : e.target.value})} value={formValues.email}/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm text-primary after:content-['*'] after:ml-0.5 md:text-lg lg:text-xl">Phone Number</label>
                <input type="text" id="phone" name="phone" className="border border-primary rounded-md focus:outline-secondary p-1 " onChange={(e) => setFormValues({...formValues, phone : e.target.value})} value={formValues.phone}/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="desc" className="text-sm text-primary after:content-['*'] after:ml-0.5 md:text-lg lg:text-xl">Project Description</label>
                <textarea name="desc" id="desc" cols="30" rows="10" className="border border-primary rounded-md focus:outline-secondary p-1 " onChange={(e) => setFormValues({...formValues, desc : e.target.value})} value={formValues.desc}></textarea>
            </div>
            <Button name={"Hire Me!"} type={'submit'}/>
        </form>
    )
}