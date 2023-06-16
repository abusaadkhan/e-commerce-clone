import React from "react";

const Footer = () => {
    return(
        <div>
            <div className="w-full h-screen bg-[#faedeb] flex flex-col  items-center text-center gap-24 p-10 box-border mt-4 text-[#7c8382]" >
                
                    <div>
                        <h1 className=" text-4xl font-semibold m-4 mt-16 text-black " >Subscribe To Get Offers In Your Inbox</h1>
                        <h2 className="  mt-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti earum ipsam neque so</h2>
                    </div>
                    <div className="flex w-2/5 max-[640px]:flex-col max-[640px]:w-full max-[640px]:items-center " >
                        <input className="px-4 py-2 w-4/6 max-[640px]:w-full" placeholder="Your email address" />
                        <button className="px-4 py-2 w-2/6 bg-black text-white max-[640px]:w-full ">Subscribe</button>
                    </div>
                    <div>
                        <ul className="list-none flex flex-wrap gap-20 max-[640px]:flex-col max-[640px]:gap-10" >
                            <li>Men</li>
                            <li>Women</li>
                            <li>Electronics</li>
                            <li>Jewelery</li>
                        </ul>
                    </div>
                
            </div>
            <div className="bg-black w-full h-20 flex justify-center items-center text-white " >
                <p>Copyright &copy; E-Commerce Store | Powerred by E-Commerce store </p>
            </div>
        </div>
    )
}

export default Footer