"use client"
import { cookies } from "next/headers"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function() {
    useEffect(() => {
const cookieStore = cookies()
const jwttoken = cookieStore.get("jwttoken");
const router = useRouter()

if(jwttoken)
{
    console.log("found token")
    router.push('/signup')
}
else{
    console.log("no token found")
}    
     
    }, [third])
    
    return <p>this is home</p>
}