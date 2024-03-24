import Image from "next/image";
import {Button} from '@/components/ui/button'
import { LoginButton } from "@/components/auth/login-button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets:["latin"],
  weight:["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300 to-blue-800">
<div className="text-center space-y-6">

  <h1 className={cn("text-white text-6xl font-semibold drop-shadow-md" , font.className)}>Auth</h1>
  <p className=" text-white text-lg">A simple authentication service</p>
</div>

<LoginButton>
<Button variant="secondary" size="lg" >Sign in</Button>
</LoginButton>
    </main>
  );
}
