import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-56">
      {/* <div className=" max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
        <Input type="email" placeholder="Email" />
        <Button variant="outline">Button</Button>
      {/* </div> */}
    </main>
  );
}
