import Image from 'next/image'
import located from '../icon/Icon (4) copy.svg'
import phone from '../icon/Icon (7).svg'
import mail from '../icon/Icon (8).svg'
import Link from 'next/link'
export default function Footer() {
    return(
        <div className="bg-[#035A33] w-full">
            <div className="w-11/12 container mx-auto pt-[80px] px-[31px] text-white">
                <div className='flex lg:flex-row flex-col gap-8  justify-between border-b border-[#6F6F6F] pb-[87px]'>
                    <div className='flex flex-col lg:w-[26%] gap-[21px]  '>
                    <Link href='/' className="flex gap-2 text-white items-center text-[23px] font-bold">
                    <h1 className="bg-[#3D9970] p-2 rounded-full">BH</h1>
                    <h1>BetaHouse</h1>
                </Link>
                <div className='text-[16px] font-normal'>
                    <p>Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex text-[15px] gap-3 font-normal'>
                          <Image className="" alt="vector" src={located}/>
                          <p>95 Tinubu Estate, Lekki, Lagos</p>
                    </div>
                    <div className='flex text-[15px] gap-3 font-normal '>
                    <Image className="" alt="vector" src={phone}/>
                    <p>+234 675 8935 675</p>
                    </div>
                    <div className='flex text-[15px] gap-3 font-normal'>
                    <Image className="" alt="vector" src={mail}/>
                    <p>support@rentbetahouse.com</p>
                    </div>
                </div>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <h1 className='text-[23px] font-bold'>Quick Links</h1>
                        <p className='cursor-not-allowed'>Home</p>
                        <p className='cursor-not-allowed'>Properties</p>
                        <p className='cursor-not-allowed'>About</p>
                        <p className='cursor-not-allowed'>Contact us</p>
                        <p className='cursor-not-allowed'>Blog</p>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                    <h1 className='text-[23px] font-bold'>More</h1>
                        <p>Agents</p>
                        <p>Affordable Houses</p>
                        <p>FAQ’s</p>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                    <h1 className='text-[23px] font-bold'>Popular Search</h1>
                        <p>Apartment for sale</p>
                        <p>Apartment for rent</p>
                        <p>3 bedroom flat</p>
                        <p>Bungalow</p>
                    </div>
                </div>
                <div className='flex  lg:flex-row flex-col gap-4 justify-between pt-[37px] pb-[57px]'>
                    <p>Copyright 2023 Betahouse | Designed by Michael.fig</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}