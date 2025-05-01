import React from 'react'
import { Link } from 'react-router-dom'

function ForgetPassword() {
    return (
        <div className='forgetPassword-main h-screen w-full flex'>
            <div className='h-screen w-[40%] max-sm:hidden'>
                <img className='h-full w-full object-cover' src='https://img.freepik.com/free-vector/cute-tiger-confused-thinking-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-9749.jpg?t=st=1742538044~exp=1742541644~hmac=313efb28e404e828bd21f564de7a8d8e70122382076a991fedff140c8b3243c7&w=826' />
            </div>
            <div className='h-screen w-[60%] py-5 px-16  max-sm:w-full  max-sm:px-4 '>
                <div className='w-full font-semibold flex justify-between '><span className='text-3xl'>Pety.in</span>  </div>
                <form className='sign-in flex flex-col justify-center items-center gap-3 h-[650px] '>
                    <h1 className='heading text-4xl font-bold text-black w-96  max-sm:w-full'>Forget Password </h1>


                    <label className='flex flex-col  gap-1 w-96  max-sm:w-full'>
                        <label for="text" className=' font-semibold text-[18px]' >Email </label>
                        <input type='password' className='p-2 border-2 border-black rounded-md w-96  max-sm:w-full' placeholder='Enter your email ' />
                    </label>
                    <p className='w-96 flex justify-end  text-blue-500 font-serif underline'>
                        {/* <Link to={"forgetpassword"} >Forgot Password</Link> */}
                    </p>
                    <div className='btn w-96  max-sm:w-full'>
                        <Link to={"/addnewpassword"} >
                        <button className=' bg-green-900 hover:bg-black w-full py-2 text-white text-base rounded-md'>Submit </button>
                        </Link>
                    </div>

                </form>


            </div>

        </div>
    )
}

export default ForgetPassword