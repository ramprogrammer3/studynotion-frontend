import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { login } from '../../../services/operations/authAPI';


const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const {email,password} = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email,password,navigate))
    }

    return (
        <form onSubmit={handleOnSubmit} className='mt-6 flex flex-col gap-y-4'>

            <label htmlFor="" className='w-full'>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Email Address
                    <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    placeholder='Email'
                    type="email"
                    name="email"
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[6px] md:p-[12px]
                     text-richblack-5"
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    value={formData.email}
                    onChange={handleOnChange}
                />
            </label>

            <label htmlFor="" className='relative'>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Password
                    <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    placeholder='password'
                    type={showPassword ? "text" : "password" }
                    name="password"
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[6px] md:p-[12px] 
                     text-richblack-5"
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    value={formData.password}
                    onChange={handleOnChange}
                />
                <span onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[34px] md:top-[38px] z-[10] cursor-pointer"
                >
                    {
                        showPassword ?
                            (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) :
                            (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)
                    }
                </span>
                <Link to="/forget-password">
                    <p className='text-blue-100 mt-1 ml-auto max-w-max text-[10px] md:text-sm'> Forget Password </p>
                </Link>
            </label>

            <button
                type='submit'
                className='mt-6 rounded-[8px] bg-yellow-50 py-[4px] px-[8px] md:py-[8px] md:px-[12px] font-medium text-richblack-900 '
            >
                Sign In
            </button>

        </form>
    )
}

export default LoginForm