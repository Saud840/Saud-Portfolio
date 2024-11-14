import Navbar from "../Navbar";
import Link from "next/link";

function Project() {
    return(
    <div>
        <div className="bg-[#004D7B] h-screen">
        <Navbar />
        <div className="bg-[#FFFFFF] h-fit mt-10 ml-6 mr-10 rounded-2xl">
            <table>
                <tr>
                    <td><Link href="https://weatherappbysaud.netlify.app/"><img src="./app.png" alt="projects" width="380" className="ml-3 mt-12 mb-2"/>
                    <p className="text-center font-thin mb-10">WEATHER APP</p></Link></td>
                    <td><Link href="https://saud840.github.io/Calculator/"><img src="./calculator.png" alt="projects" width="170" className="ml-4 mt-12 mb-2"/>
                    <p className="text-center font-thin mb-10">CALCULATOR</p></Link></td>
                    <td><Link href="https://saud840.github.io/Registration-Page-Practice/"><img src="./registration.png" alt="projects" width="220" className="ml-4 mt-12 mb-2"/>
                    <p className="text-center font-thin mb-10">USER REGISTRATION PAGE</p></Link></td>
                    <td><Link href="https://webpagebysaud.netlify.app/"><img src="./WEBPAGE.png" alt="projects" width="450" className="ml-2 mt-12 mb-2 W-8"/>
                    <p className="text-center font-thin mb-10">WEB PAGE</p></Link></td>
                </tr>
            </table>
            </div>
        </div>
    </div>
    );
}

export default Project