'use client'
import Image from "next/image"
import Link from "next/link"
import left from '../../../icon/Line 13.svg'
import right from '../../../icon/Line 16.svg'
import google from '../../../icon/🦆 icon _google_.svg'
import props from '../../../image/13625 1.svg'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Login() {
    const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
        } = useForm();
        
        const [loading, setLoading] = useState(false);
        const router = useRouter();
    
        const onSubmit = async (data) => {
            console.log(data)
            setLoading(true);
            
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                const ok = true;
                
                if (ok) {
                    reset();
                    // You can change to the page you want to redirect to after signup
                    router.push("/");
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                console.error('Signin error:', error);
            } finally {
                setLoading(false);
            }
        };
    return(
       <div className="w-full  grid xl:grid-cols-2 pb-10 lg:pb-0 items-center justify-center">
                   <div className="md:px-[97px] px-8 py-[84px] container mx-auto">
                       <div className="md:pr-[28px] flex flex-col gap-[10px] pb-[36px]">
                           <h1 className="md:text-[28px] text-[18px] font-semibold">
                           Welcome Back to BetaHouse!
                           </h1>
                           <p className="text-[#181A20D1] text-[16px]">
                           Lets get started by filling out the information below
                           </p>
                       </div>
                       
                       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                           <div className="flex flex-col gap-2 rounded-md">
                               <label htmlFor="email" className="font-medium text-[16px]">
                                   Email
                               </label>
                               <input
                                   {...register('email', {
                                       required: 'Email Address is required',
                                       pattern: {
                                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                           message: 'Invalid email format',
                                       },
                                   })}
                                   id="email"
                                   className="border-[#DEDFE0] border-[2px] w-full text-[#2632388F] p-2 outline-none rounded-[5px] px-3 py-3"
                                   type="email"
                                   placeholder="Enter your email address"
                               />
                               {errors.email && (
                                   <p className="text-red-500 text-[12px]">{errors.email.message}</p>
                               )}
                           </div>
                           
                           <div className="flex flex-col gap-2 rounded-md">
                               <label htmlFor="password" className="font-medium text-[16px]">
                                   Password
                               </label>
                               <input
                                   {...register('password', {
                                       required: 'This field is required',
                                       minLength: {
                                           value: 8,
                                           message: 'Password must be at least 8 characters long',
                                       },
                                       pattern: {
                                           value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                           message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                                       },
                                   })}
                                   id="password"
                                   className="border-[#DEDFE0] border-[2px] w-full text-[#2632388F] p-2 outline-none rounded-[5px] px-3 py-3"
                                   type="password"
                                   placeholder="Enter your password"
                               />
                               {errors.password && (
                                   <span className="text-red-500 text-[12px]">
                                       {errors.password.message}
                                   </span>
                               )}
                           </div>
                           <div className='flex justify-between'>
                           <label className="flex md:gap-2 "  htmlFor="remember">
                              <input type="checkbox" id="remember" />
                              <p className="text-[16px] font-normal">Remember Me</p>
                           </label>
                           <p className="text-[#EC5E5E] text-[16px] font-normal cursor-not-allowed">Forgot Password</p>
                           </div>
                           
                           <button
                               type="submit"
                               disabled={loading}
                               className="w-full bg-[#3D9970] text-white py-[18px] rounded-xl cursor-pointer font-medium hover:bg-[#3D9970] transition duration-200"
                           >
                               {loading ? "Signing up..." : "Sign up"}
                           </button>
                           
                           <div className="flex gap-4 justify-center">
                               <Image className="" alt="vector" src={left}/>
                               <p>or</p>
                               <Image className="" alt="vector" src={right}/>
                           </div>
                           
                           <div className="flex gap-4 justify-center border border-[#000000] cursor-not-allowed py-[18px] rounded-xl">
                               <Image className="" alt="vector" src={google}/>
                               <p>Continue with Google</p>
                           </div>
                           
                           <div className="text-center">
                               <span className="text-gray-600">New User? </span>
                               <Link href="/auth/signup" className="text-[#3D9970] hover:underline">
                                   Sign up
                               </Link>
                           </div>
                       </form>
                   </div>
                   
                   <div className="w-full  relative hidden xl:block">
                       <Image
                           src={props}
                           alt="House"
                           className="w-full rounded-md "
                       />
                      <Link href='/' className="absolute top-15 left-15 flex gap-2 text-white items-center text-[23px] font-bold">
<h1 className="bg-[#3D9970] p-2 rounded-full">BH</h1>
<h1>BetaHouse</h1>
</Link>
                   </div> 
               </div>
    )
}
