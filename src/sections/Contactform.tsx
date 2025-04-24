"use client";

import { use, useState } from "react";
import axios from "axios";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/app/schemas/formSchema";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod"
import { SeactionHeader } from "@/components/SectionHeader";
const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    form.reset();

  }

// zod implementation
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (e: any) => {
    console.log("formData", formData);
    console.log("inside submit");
    e.preventDefault();

    try {
      // with axios
      const res = await axios.post("/api/contact", formData);
      console.log("res", res);
    } catch (err) {
      throw err;
      console.log("error", err);
    }
  };

  return (
    <div className="container">
        <div className="lg:p-20 mb-10">
          <SeactionHeader
            subtitle=""
            title=" Contact Me"
            description=""
          />
        <Form  {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 text-white ">
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 ">
    <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full md:w-1/2">
              <FormLabel>Name</FormLabel>
              <FormControl>
              <Input {...field} name="name"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

    <FormField 
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem className="w-full md:w-1/2">
        <FormLabel>Email</FormLabel>
        <FormControl>
        <Input {...field} name="email" />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
    />
    </div>

<FormField
  control={form.control}
  name="message"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Message</FormLabel>
      <FormControl>
        <Textarea {...field} name="message"/>
      </FormControl>
      <FormMessage />
    </FormItem>  
  )}
/>
<Button type="submit" className="p-2 m-2 w-[100px]">Send</Button>
    </form>
    </Form>
    </div>                                  
    </div>
  );
}
