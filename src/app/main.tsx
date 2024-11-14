function Main() {
    return(
        <div className="bg-[#FFFFFF] h-screen mt-36 ml-20 mr-20 rounded-2xl">
            <br />
            <div className="flex justify-between">
            <img src="./banner.jpg" width="310" height="100" alt="pic" className="ml-10 rounded-lg mt-4" />
            <div className="m-auto ml-14 mt-10">
                <p className="font-thin text-1xl">HELLO EVERYBODY I AM,</p> 
                <h1 className="font-bold text-5xl mt-3">SAUD ZUBAIR</h1>    
                <h3 className="text-1xl mt-2 font-semibold">JUNIOR UI/UX DEVELOPER</h3>    
                <p className="font-thin text-1x mt-2">You will begin to realise why this excercise is called the Dickens Pattern (with <br /> reference to the ghost showing Scoorge some different futures)</p>
                <img src="./calender.jpg" alt="" width="20" className="mt-12"  /><p className="ml-10 -mt-5 font-thin">23 October, 1997</p>
                <img src="./phone.jpg" alt="" width="20" className="mt-12"/><p className="ml-10 -mt-6 font-thin">0305-2766318</p>
                <img src="./message.jpg" alt="" width="20" className="mt-12"/><p className="ml-10 -mt-5 font-thin">m.saud840@gmail.com</p>
                {/* <img src="./house.jpg" alt="" width="30" className="mt-10"/> */}
                </div>
            </div>
        </div>
    );
}

export default Main