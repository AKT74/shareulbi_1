import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p className="text-3xl font-medium text-sky-700">Hello world!</p>
      <Button variant="default" asChild>
        <Link href="/login">Login here</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="/signup">Sign up here</Link>
      </Button>
      <Button variant="destructive" asChild>
        <Link href="/home">Home</Link>
      </Button>
    </>
  );
}
