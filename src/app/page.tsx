import Image from "next/image";

import { Button } from "@/_components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/avatar";
import { Checkbox } from "@/_components/ui/checkbox";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
            <Button>New Button</Button>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">
                    You agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </main>
    );
}
