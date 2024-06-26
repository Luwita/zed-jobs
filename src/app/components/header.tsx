import Link from "next/link";

export default function Header() {
    return (
        <header className=" ">
          <div className=" flex items-center  justify-between nx-auto ">
          <Link href={"/"} className="font-bold text-xl">Zed Jobs</Link>
          <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-md">
           <Link className="bg-gray-200" href={'/login'}>Login</Link>
           <Link className="bg-blue-600 text-white" href={'/new-listing'}>Post a Job</Link>
        </nav>
          </div>
          
        </header>
    );
}