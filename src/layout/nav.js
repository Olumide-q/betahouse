
"use client"
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full fixed top-0 left-0 right-0 z-10 bg-transparent shadow-2xl">
            <div className="w-11/12 container mx-auto flex justify-between py-[34px] items-center">
                <Link href='/' className="flex gap-2 text-white items-center text-[23px] font-bold">
                    <h1 className="bg-[#3D9970] p-2 rounded-full">BH</h1>
                    <h1>BetaHouse</h1>
                </Link>
                <div className="hidden lg:flex xl:text-[20px] text-white xl:gap-[34px] lg:gap-[16px] items-center">
                    <p className="cursor-not-allowed hover:text-[#3D9970] transition-colors">Home</p>
                    <p className="cursor-not-allowed hover:text-[#3D9970] transition-colors">Properties</p>
                    <p className="cursor-not-allowed hover:text-[#3D9970] transition-colors">About Us</p>
                    <p className="cursor-not-allowed hover:text-[#3D9970] transition-colors">Blog</p>
                    <p className="cursor-not-allowed hover:text-[#3D9970] transition-colors">Contact Us</p>
                </div>
                <div className="hidden lg:flex xl:text-[20px] text-white items-center gap-[34px]">
                   <Link href="/auth/signup">
                   <button className="xl:px-[40px] lg:px-[28px] py-[18px] rounded-xl border border-[#F5F5F5] hover:bg-white hover:text-black transition-colors">
                        Sign in
                    </button>
                   </Link>
                   <Link href="/auth/login">
                   <button className="xl:px-[40px] lg:px-[28px] py-[18px] rounded-xl bg-[#3D9970] hover:bg-[#2d7a5a] transition-colors">
                        Login
                    </button>
                   </Link>
                </div>

                <div className="lg:hidden  ">
                    <button 
                        onClick={toggleMenu}
                        className="p-3 rounded-full bg-slate-500 text-white hover:bg-slate-600 transition-colors"
                    >
                        {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden fixed  inset-0  bg-opacity-50 z-20" onClick={toggleMenu}>
                    <div className="fixed top-0 right-0 h-auto w-80 bg-white bg-opacity-95 shadow-xl transform transition-transform duration-300 ease-in-out rounded-bl-2xl">
                        <div className="flex justify-end p-6">
                            <button 
                                onClick={toggleMenu}
                                className="p-2 rounded-full bg-slate-500 text-white hover:bg-slate-600 transition-colors"
                            >
                               <IoMdClose />
                            </button>
                        </div>
                        
                        <div className="px-6 py-4 space-y-6">
                            <div className="space-y-4">
                                <p className="text-lg text-gray-800 cursor-not-allowed hover:text-[#3D9970] transition-colors py-2 border-b border-gray-200">
                                    Home
                                </p>
                                <p className="text-lg text-gray-800 cursor-not-allowed hover:text-[#3D9970] transition-colors py-2 border-b border-gray-200">
                                    Properties
                                </p>
                                <p className="text-lg text-gray-800 cursor-not-allowed hover:text-[#3D9970] transition-colors py-2 border-b border-gray-200">
                                    About Us
                                </p>
                                <p className="text-lg text-gray-800 cursor-not-allowed hover:text-[#3D9970] transition-colors py-2 border-b border-gray-200">
                                    Blog
                                </p>
                                <p className="text-lg text-gray-800 cursor-not-allowed hover:text-[#3D9970] transition-colors py-2 border-b border-gray-200">
                                    Contact Us
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 pt-6">
                                <Link href="/auth/signup">
                                <button className="w-full px-6 py-3 rounded-xl border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors">
                                    Sign in
                                </button></Link>
                                <Link href="/auth/login">
                                <button className="w-full px-6 py-3 rounded-xl bg-[#3D9970] text-white hover:bg-[#2d7a5a] transition-colors">
                                    Login
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}