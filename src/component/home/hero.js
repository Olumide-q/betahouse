"use client"
import { useState } from 'react';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
export default function Hero() {
    const [bedrooms, setBedrooms] = useState(0);

    const incrementBedrooms = () => setBedrooms(prev => prev + 1);
    const decrementBedrooms = () => setBedrooms(prev => Math.max(0, prev - 1));
    return(
        <div className="hero w-full">
            <div className="lg:w-11/12 container mx-auto flex flex-col lg:gap-[52px] pt-30 pb-[87px] ">
            <div className="lg:px-[125px] flex flex-col text-center text-white gap-[24px]">
               <div className="xl:text-[68px] lg:text-[52px] text-[38px] font-bold">
               <h1 >Browse Our Properties</h1>
               </div>
               <div className="lg:text-[26px] font-normal lg:px-[102px] xl:px-[222px]">
               <p >Find your perfect home among our curated properties. Start browsing now!</p>
               </div>
            </div>
            <div className="bg-transparent backdrop-blur  shadow-2xl p-8">
                <div className=" bg-white flex lg:flex-row flex-col text-center rounded-xl lg:justify-between ">
                    <div className=' py-[20px] xl:pl-[51px] lg:px-[26px] xl:pr-[101px] text-center '>
                        <h5 className='text-[#30343B] text-[14px]  font-semibold'>LOCATION</h5>
                        <p className='text-[15px] font-normal'>eg. Gbagada</p>
                    </div>
                    <div className=' py-[20px] text-center xl:pl-[54px] lg:px-[26px] xl:pr-[101px] lg:border-r lg:border-l '>
                    <h5 className='text-[#30343B] text-[14px] font-semibold'>PROPERTY TYPE</h5>
                    <p className='text-[15px] font-normal'>eg. Duplex, Bedroom Flat</p>
                    </div>
                    <div className='flex flex-col items-center  py-[20px]  '>
                        <p className='text-[#30343B] text-[14px] font-semibold'>BEDROOM</p>
                        <div  className="flex items-center justify-center gap-4  ">
                        <button
                        onClick={decrementBedrooms}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={bedrooms === 0}>
                            <CiCircleMinus />
                            </button>
                            <span className="text-md font-normal text-center ">
                                        {bedrooms}
                                    </span>
                            <button
                            onClick={incrementBedrooms}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                <CiCirclePlus />
                                </button>
                        </div>
                    </div>
                    <div className='bg-[#3D9970] py-[12px] lg:py-[32px] lg:rounded-r-xl  rounded-b-xl text-white xl:px-[82px] lg:px-[26px]  font-medium'>
                        <p> Find Property</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
