import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export default function SetupPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="text-center text-red-950">
        <p className="py-4 uppercase">Admin dashboard</p>
        <p>This is protected rout</p>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
