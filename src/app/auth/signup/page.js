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

export default function SignUp() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
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
                router.push("/auth/login");
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Signup error:', error);
        } finally {
            setLoading(false);
        }
    };
    
    return(
        <div className="w-full  grid xl:grid-cols-2 pb-10 lg:pb-0 items-center justify-center">
            <div className="md:px-[97px] px-8 py-[84px] container mx-auto">
                <div className="md:pr-[28px] flex flex-col gap-[10px] pb-[36px]">
                    <h1 className="md:text-[28px] text-[18px] font-semibold">
                        Join our community of home seekers and explore the possibilities that await.
                    </h1>
                    <p className="text-[#181A20D1] text-[16px]">
                        Lets get started by filling out the information below
                    </p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-[16px] font-medium mb-1">
                                First Name
                            </label>
                            <input
                                {...register('firstName', {
                                    required: 'This Field is required',
                                    pattern: {
                                        value: /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/,
                                        message: 'Please enter a valid first name',
                                    },
                                })}
                                type="text"
                                id="firstName"
                                className="border-[#DEDFE0] border-[2px] w-full text-[#9C9C9C] p-2 outline-none rounded-[5px] px-3 py-3"
                                placeholder="Enter Name"
                            />
                            {errors.firstName && (
                                <span className="text-red-500 text-end text-[12px]">
                                    {errors.firstName.message}
                                </span>
                            )}
                        </div>
                        
                        <div>
                            <label htmlFor="lastName" className="block text-[16px] font-medium mb-1">
                                Last Name
                            </label>
                            <input
                                {...register('lastName', {
                                    required: 'This Field is required',
                                    pattern: {
                                        value: /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/,
                                        message: 'Please enter a valid last name',
                                    },
                                })}
                                type="text"
                                id="lastName"
                                className="border-[#DEDFE0] border-[2px] w-full text-[#2632388F] p-2 outline-none rounded-[5px] px-3 py-3"
                                placeholder="Enter Name"
                            />
                            {errors.lastName && (
                                <span className="text-red-500 text-[12px]">
                                    {errors.lastName.message}
                                </span>
                            )}
                        </div>
                    </div>
                    
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
                    
                    <div>
                        <label htmlFor="confirmPassword" className="block text-[16px] font-medium mb-1">
                            Confirm Password
                        </label>
                        <input
                            {...register('confirmPassword', {
                                required: 'This field is required',
                                validate: (value) =>
                                    value === watch('password') || 'Passwords do not match',
                            })}
                            type="password"
                            id="confirmPassword"
                            className="border-[#DEDFE0] border-[2px] w-full text-[#2632388f] p-2 outline-none rounded-[5px] px-3 py-3"
                            placeholder="Confirm your password"
                        />
                        {errors.confirmPassword && (
                            <span className="text-red-500 text-[12px]">
                                {errors.confirmPassword.message}
                            </span>
                        )}
                    </div>
                    
                    <label className='flex flex-row md:gap-2 md:text-center text-sm md:text-[16px]' htmlFor="remember">
                        <input type="checkbox" id="remember" />
                        <span className="text-[#3D9970]">I agree to Terms of Service</span> and <span className="text-[#3D9970]">Privacy Policies</span>
                    </label>
                    
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
                    
                    <div className="flex gap-4 justify-center border border-[#000000] cursor-not-allowed  py-[18px] rounded-xl">
                        <Image className="" alt="vector" src={google}/>
                        <p>Continue with Google</p>
                    </div>
                    
                    <div className="text-center">
                        <span className="text-gray-600">Already have an account? </span>
                        <Link href="/auth/login" className="text-[#3D9970] hover:underline">
                            Sign in
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

