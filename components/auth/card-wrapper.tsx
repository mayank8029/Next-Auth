"use client"

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "@/components/auth/header";

import { Social } from "./social";

interface CardWrapperProps{
    children: React.ReactNode ; 
    headerLabel:string; 
    backButtonLabel: string ; 
    backButtonHref:String; 
    showSocial?:boolean 
}


export const CardWrapper = ({
   children, 
   headerLabel, 
   backButtonLabel, 
   backButtonHref, 
   showSocial 
}: CardWrapperProps)=>{
   return (
    <Card className="w-[400px] shadow-md"
    >
        <CardHeader>
            <Header label = {headerLabel}/>
        </CardHeader>
        <CardContent>
        {children}
        </CardContent>
        {
            showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )
        }
    </Card>
   )
}