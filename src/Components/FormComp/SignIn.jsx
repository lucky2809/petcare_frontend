import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {
    const [isHideShow, setIsHideShow] = useState(false)
    const email = useRef("")
    const password = useRef("")
    const navigate = useNavigate()
    const signInHandler = async (e) => {
        e.preventDefault()

        const object = {
            email: email.current.value,
            password: password.current.value
        }
        // console.log(object)

        try {
            const url = `${import.meta.env.VITE_APP_BACKEND_URL}/login/`
            const fetchData = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(object)
            })
            const data = await fetchData.json()
            if (fetchData.ok) {
                localStorage.setItem("accessToken", data.token)
                alert(JSON.stringify(data.massage))
                navigate("/home")
            } else {
                console.log("somthing went wrong ..!")
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        signInHandler()
    }, [])

    return (
        <div className='form-main w-full h-screen flex bg-white '>
            <div className='image   w-[40%]  h-screen max-sm:hidden'>
                <img className='h-full w-full object-cover' src='https://img.freepik.com/free-vector/cute-cat-meditation-yoga-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated-flat_138676-8638.jpg?t=st=1742539793~exp=1742543393~hmac=31266f5c00e9b56966f3c4ad7ab1c3c51fe47f7fb51631cf6198239ec5ac95de&w=826' ></img>
            </div>
            <div className='form  w-[60%]   py-5 px-16 max-sm:w-full max-sm:px-4  max-sm:py-2'>

                {/* <div className='signUp'>
                        <div className='w-full font-semibold flex justify-between '><span className='text-3xl'>Petpy.in</span> <span>If Dont have An Account? <Link to={"#"} className='text-green-500' onClick={() => setIsHideShow(!isHideShow)}  >Sign in</Link></span> </div>
                        <div className=' h-full flex flex-col max-h-full justify-center mt-10'>
                        <h1 className='heading text-7xl font-bold text-green-600 mt-16'>Let's Get Started </h1>
                        <form className='form  mt-20 flex flex-col gap-3'>
                            <label className='flex gap-3'>
                                <label className='flex flex-col w-full gap-1'>
                                    <label for="text" className=' font-semibold text-[18px]' >UserName</label>
                                    <input type='text' className='p-2 border-2 border-black rounded-md ' placeholder='Enter username' />
                                </label>
                                <label className='flex flex-col w-full gap-1 '>
                                    <label for="text" className='font-semibold text-[18px]' >Full Name</label>
                                    <input type='text' className='p-2 w-full border-2 border-black rounded-md' placeholder='Enter full name' />
                                </label>
                            </label>

                            <label className='flex gap-3 mt-2'>
                                <label className='flex flex-col w-full gap-1'>
                                    <label for="text" className='font-semibold text-[18px] ' >Email Address</label>
                                    <input type='text' className='p-2 border-2 border-black rounded-md' placeholder='Enter email address' />
                                </label>
                                <label className='flex flex-col w-full gap-1'>
                                    <label for="text" className='font-semibold text-[18px] ' >Password</label>
                                    <input type='text' className='p-2 w-full  border-2 border-black rounded-md' placeholder='Enter password' />
                                </label>
                            </label>

                            <div className='flex gap-2 items-center mt-3'>
                                <input type='checkbox' className=' h-4 w-4' />
                                <p>I accept to the terms and condition and i agree to the of privecy policy </p>
                            </div>
                            <div className='btn mt-3'> <Link to={"/home"} > <button
                            // onClick={alertHandler}

                             className='p-2 bg-green-600 hover:bg-black px-10 text-base text-white rounded-md font-bold'>Submit</button> </Link> </div>
                        </form>
                        </div>
                    </div> */}

                <div className='sign-in  h-[97%]'>
                    <div className='w-full font-semibold flex justify-between items-center'>
                        <span className='text-2xl'>Petpy.in</span>
                        <span className=''>If you don't have an account <Link to={"/"} style={{ color: "blue" }}>sign up</Link></span>

                    </div>
                    <form className='sign-in flex flex-col justify-center items-center gap-2 h-[100%]  '>
                        <h1 className='heading text-4xl font-bold text-black w-96 max-sm:w-full'>Sign in to Petpy.<span className='text-green-400'>in</span> </h1>

                        <label className='flex flex-col  gap-1 w-96 mt-10 max-sm:w-full'>
                            <label for="text" className=' font-semibold text-[18px]' >Gamil or UserName</label>
                            <input ref={email} type='text' className='p-2 border-2 border-black rounded-md  max-sm:w-full' placeholder='Enter username' />
                        </label>

                        <label className='flex flex-col  gap-1 w-96  max-sm:w-full'>
                            <label for="text" className=' font-semibold text-[18px]' >Password</label>
                            <input ref={password} type='password' className='p-2 border-2 border-black rounded-md w-96  max-sm:w-full' placeholder='Enter username' />
                        </label>
                        <p className='w-96 flex justify-end  text-blue-500 font-serif underline  max-sm:w-full'>
                            <Link to={"/forgetpassword"} >Forgot Password</Link>
                        </p>
                        <div className='btn w-96  max-sm:w-full rounded-md border-green-600'>
                            {/* <Link to={"/home"} className='rounded-md'> */}
                            <button onClick={signInHandler}
                                className='hover:bg-black bg-green-600 w-full py-2 text-white text-base rounded-md '>Sign in </button>
                            {/* </Link> */}
                        </div>

                    </form>


                </div>


            </div>

        </div>
    )
}

export default SignIn