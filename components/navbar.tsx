import Link from "next/link";
import Image from "next/image";
import UserAvatarMenu from "@/components/useravatarmenu"


export function Navbar() {
  return (
    <header className="w-full border-b bg-[#1F3573]">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3 hover:cursor-pointer">
            <Link href="/home">
          <Image
            src="/images/logo/shareulbi_logo.png"
            alt="Logo"
            width={200}
            height={60}
          />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-14">
          <Link
            href="/home"
            className="font-medium border-b-2 border-[#E8562C] pb-1 text-[#E8562C]"
          >
            Home
          </Link>
          <Link href="/e-learning" className=" text-white">
            E-Learning
          </Link>
          <Link href="/works" className=" text-white">
            Works
          </Link>
          <Link href="/profile" className="text-white">
            Profile
          </Link>
        </nav>

        {/* Identity */}
        <div className="flex items-center gap-3">
          <div className="text-right leading-tight">
            <p className="text-sm font-semibold text-white">Nayaka Taqwa</p>
            <p className="text-xs  text-white">Student</p>
          </div>

          {/* Avatar (2 display) */}
            {/* <div className="flex -space-x-2">
                <Link href="/profile">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
                </Link>
            </div> */}
            <UserAvatarMenu />
        </div>
        
      </div>
    </header>
  );
}
