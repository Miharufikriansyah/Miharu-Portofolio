import Navbar from "./Navbar"

export default function Header() {
    return (
        <header className=" bg-secondary top-0 left-0 w-full flex items-center z-10 py-2 px-5 fixed bg-opacity-95 rounded-b-md md:py-4">
        <div className="flex justify-between w-full">
        <a href="" className="text-white font-bold text-base md:text-lg">MIHARU SITE</a>
        <Navbar/>
        </div>
    </header>
    )
}