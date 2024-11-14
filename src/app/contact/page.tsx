import Navbar from "../Navbar";

function Contact() {
    return(
        <div>
            <div className="bg-[#004D7B] h-screen">
            <Navbar  />
                <div className="text-white mt-10 ml-10">
                    <fieldset>
                        <legend className="font-bold">Personal Information</legend>
                        <br />
                        <label>Name: </label>
                        <input type="text" required className="text-black"/>
                        <br />
                        <br />
                        <label>Email: </label>
                        <input type="email" required className="text-black"/>
                        <br />
                        <br />
                        <label>Phone Number: </label>
                        <input type="number" required className="text-black"/>
                        <br />
                        <br />
                        <label>Country: </label>
                        <input type="number" required className="text-black"/>
                        <br />
                        <br />
                        <label>City: </label>
                        <input type="number" required className="text-black"/>
                        <br />
                        <br />
                        <label>Whats Project You Want: </label>
                        <input type="number" required className="text-black"/>
                        <br />
                        <br />
                        <label>Any Design: </label>
                        <input type="file" required className="text-black"/>
                        <br />
                        <button className="border-2 p-3 m-2 mt-6 rounded-2xl font-semibold hover:bg-black hover:text-white">Submit</button>
                    </fieldset>
                </div>
                <br />
            </div>
            <div>
                <iframe src="https://bit.ly/3O8KmAO" width="900" height="360" className="-mt-96  m-auto mr-8"></iframe>
            </div>
            
        </div>
    );
}

export default Contact