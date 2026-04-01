import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "../ui/separator";

export function Header() {
    return (
        <div className="mb-10">
            <div className="flex justify-between py-5 items-center">
                <div className="flex">
                    <Image
                        className="mr-5"
                        src="/astronomia_670x350.png"
                        width={60}
                        height={60}
                        alt="Logo"
                    />
                    <span className="text-4xl">AstronomIA</span>
                </div>
                <ModeToggle />
            </div>
            <Separator />
        </div>
    )
}