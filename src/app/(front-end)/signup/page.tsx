"use client";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import axios from "axios";
// import { cookies } from "next/headers";

import { useRouter } from "next/navigation";

const formSchema = z.object({
  displayname: z.string().min(2, {
    message: "Name must be atleast two characters",
  }),
  email: z.string().email("Please insert a valid email adddress"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be less than 100 characters long" })
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(
      /[$!@%*?&#]/,
      "Password must contain at least one special character"
    ),
  phone: z.string().min(2, { message: "Please enter phone" }),
  // terms1: z.literal(true, {
  //   errorMap: () => ({ message: "You must accept the terms and conditions" }),
  // }),
});

export default function ProfileForm() {
  // useEffect(() => {
  //   const cookieStore = cookies();
  //   const jwttoken = cookieStore.get("jwttoken");
  //   const router = useRouter();

  //   if (jwttoken) {
  //     console.log("found token");
  //     router.push("/signup");
  //   } else {
  //     console.log("no token found");
  //   }
  // }, [third]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      displayname: "",
      email: "",
      phone: "",
      password: "",
      // terms1: false,
    },
  });

  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value.terms1) {
        form.clearErrors("terms1");
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Log the form values
      console.log("values:  ", values);

      // Make the POST request
      const response = await axios.post("/api/users/signup", values);

      // Show success message
      alert(response.data.message);
    } catch (error) {
      // Handle errors
      console.log(error);
      alert(error.response.data.error);
    }
  }

  return (
    <div className="bg-red-500 flex p-4 h-screen  items-center">
      <div className=" max-w-md mx-auto mt-8 flex flex-col items-center   shadow-md p-6 rounded-lg bg-white space-y-5">
        <img
          className="h-20 w-20 object-fill rounded-large"
          src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/ecommerce.png"
          alt=""
        />

        <p className="text-4xl font-bold">Sign up</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col space-y-4"
          >
            <FormField
              control={form.control}
              name="displayname"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John doe" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex items-center justify-start  space-x-2">
                  <Checkbox id="terms" {...field} onChange={field.onChange} />

                  <div className="">
                    <p className="text-sm">
                      By clicking, I agree to
                      <Link href={"Terms&COnditions"}>
                        {" "}
                        Terms and conditions
                      </Link>
                    </p>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit">Sign up</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
