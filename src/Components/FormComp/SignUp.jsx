import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
const [formData, setFormData] = useState({})

    const firstname = useRef("")
    const lastname = useRef("")
    const email = useRef("")
    const password = useRef("")
const SignUpSubmitHanlder = async (e) =>{
    e.preventDefault()
    const object = {
        firstname : firstname.current.value,
        lastname : lastname.current.value ,
        email : email.current.value ,
        password : password.current.value
    }
    try{
        const url = `${import.meta.env.VITE_APP_BACKEND_URL}/registration-api/`
        const fetchData = await fetch(url,{
            method : "POST",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify(object)
        })
        const response = await fetchData.json()
        alert(JSON.stringify(response))
        console.log(response)


    }catch(err){
        console.log("Something Went Wrong ..! ",err)
    }

}
console.log(formData)
    return (
        <div className='form-main w-full h-screen flex'>
            <div className='image   w-[40%]  h-screen max-sm:hidden'>
                <img className='h-full w-full object-cover' src='https://img.freepik.com/free-vector/cute-cat-meditation-yoga-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated-flat_138676-8638.jpg?t=st=1742539793~exp=1742543393~hmac=31266f5c00e9b56966f3c4ad7ab1c3c51fe47f7fb51631cf6198239ec5ac95de&w=826' />
            </div>
            <div className=' form  w-[60%]    py-5 px-16 max-sm:px-5 max-sm:py-0 max-sm:w-full '>
                <div className='w-full font-semibold flex justify-between items-center'>
                    <span className='text-2xl'>Petpy.in</span>
                    <span className=''>If you have an account <Link to={"/signin"} style={{color : "blue"}}>Sign in</Link></span>

                </div>

                <div className='signUp max-sm:py-2  h-[92%] flex items-center'>
                    <div className=' max-h-full flex flex-col justify-center  w-full  '>
                        <h1 className='heading text-7xl font-bold text-green-600 max-sm:text-6xl max-sm:mt-2'>Let's Get Started </h1>
                        <form className='form  mt-20 flex flex-col gap-3 max-sm:mt-3 max-sm:gap-0 '>
                            <label className='flex gap-3 max-sm:flex-col'>
                                <label className='flex flex-col w-full gap-1 max-sm:gap-0'>
                                    <label for="text" className=' font-semibold text-[18px] ' >First Name</label>
                                    <input ref={firstname} type='text' className='p-2 border-2 border-black rounded-md ' placeholder='Enter username' />
                                </label>
                                <label className='flex flex-col w-full gap-1  max-sm:gap-0'>
                                    <label for="text" className='font-semibold text-[18px]' >Last Name</label>
                                    <input ref={lastname}  type='text' className='p-2 w-full border-2 border-black rounded-md ' placeholder='Enter full name' />
                                </label>
                            </label>

                            <label className='flex gap-3 mt-2  max-sm:flex-col'>
                                <label className='flex flex-col w-full gap-1  max-sm:gap-0'>
                                    <label for="text" className='font-semibold text-[18px] ' >Email Address</label>
                                    <input ref={email}  type='text' className='p-2 border-2 border-black rounded-md' placeholder='Enter email address' />
                                </label>
                                <label className='flex flex-col w-full gap-1  max-sm:gap-0'>
                                    <label for="text" className='font-semibold text-[18px] ' >Password</label>
                                    <input ref={password}  type='text' className='p-2 w-full  border-2 border-black rounded-md' placeholder='Enter password' />
                                </label>
                            </label>

                            <div className='flex gap-2 items-center mt-3  max-sm:mt-2'>
                                <input type='checkbox' className=' h-4 w-4 max-sm:mb-5' />
                                <p className='max-sm:text-sm '>I accept to the terms and condition and i agree to the of privecy policy </p>
                            </div>
                            <div className='btn-sign-up mt-3 '>
                                {/* <Link to={"/signin"} > */}
                                    <button 
                                    onClick={SignUpSubmitHanlder}
                                     className='p-2 bg-green-600 border  hover:bg-black px-20 text-base text-white rounded-md font-bold'>Submit</button>
                                {/* </Link> */}
                            </div>
                        </form>
                    </div>
                </div>
                {/*                     
                    <div className='sign-in'>
                        <div className='w-full font-semibold flex justify-between '><span className='text-3xl'>Petpy.in</span> <span>If Dont have An Account? <Link to={"#"} className='text-green-500'  >Sign up</Link></span> </div>
                        <form className='sign-in flex flex-col justify-center items-center gap-2 h-[650px] '>
                            <h1 className='heading text-4xl font-bold text-black w-96'>Sign in to Pety.<span className='text-green-400'>in</span> </h1>

                            <label className='flex flex-col  gap-1 w-96 mt-10'>
                                <label for="text" className=' font-semibold text-[18px]' >Gamil or UserName</label>
                                <input type='text' className='p-2 border-2 border-black rounded-md ' placeholder='Enter username' />
                            </label>

                            <label className='flex flex-col  gap-1 w-96'>
                                <label for="text" className=' font-semibold text-[18px]' >Password</label>
                                <input type='password' className='p-2 border-2 border-black rounded-md w-96' placeholder='Enter username' />
                            </label>
                            <p className='w-96 flex justify-end  text-blue-500 font-serif underline'>
                                <Link to={"forgetpassword"} >Forgot Password</Link>
                            </p>
                            <div className='btn w-96 '>
                                <Link to={"/home"}>
                             <button className='hover:bg-black bg-green-600 w-full py-2 text-white text-base rounded-md'>Sign in </button> 
                             </Link>
                            </div>

                        </form>


                    </div> */}


            </div>

        </div>
    )
}

export default SignUp