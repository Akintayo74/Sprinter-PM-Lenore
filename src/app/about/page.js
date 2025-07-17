import Link from "next/link";
import Button from "@/components/Button";

function About() {
    return (
        <div className="flex justify-center items-center min-h-full bg-sprinter-blue">
            Hey there! <Link href="/" className="hover:bg-amber-400">Home</Link>

            <Button variant="danger">
                Login
            </Button>
        </div>
    )
}

export default About;