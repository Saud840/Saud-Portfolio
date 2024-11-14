import Link from "next/link"

function Navbar() {
    return(
        <div className="flex justify-between gap-3 ml-20">
            <img src="./logo.jpg" alt="logo" className="mt-2"/>
            <div className="mr-4 mt-8 text-[#FFFFFF] font-bold">
                <Link href='./' className="mr-4">HOME</Link>
                <Link href='./project' className="mr-4">PROJECTS</Link>
                <Link href='./contact' className="mr-4">CONTACT</Link>
            </div>
        </div>
    );
  }


export default Navbar
