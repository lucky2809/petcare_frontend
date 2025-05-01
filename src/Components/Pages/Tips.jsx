import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Tips() {

    const data = [
        {
            "icon": "ic:sharp-tips-and-updates",
            "headline": " Pet Boarding Tips –",
            "descriptions": "Learn how to prepare your furry friend for a comfortable stay at our facility.Get expert advice on keeping your pet happy and healthy.",
            "color": "text-yellow-600"    
        },
        {
            "icon": "healthicons:health",
            "headline": "  Health & Wellness –",
            "descriptions": "Get expert advice on keeping your pet happy and healthy. Get expert advice on keeping your pet happy and healthy.",
            "color": "text-green-600"
        }, {
            "icon": "mynaui:funny-circle-solid",
            "headline": " Fun Activities –",
            "descriptions": "Discover the engaging activities we offer to make your pet’s stay enjoyable. Get expert advice on keeping your pet happy and healthy..",
            "color": "text-orange-600"
        },
        {
            "icon": "mdi:customer-service",
            "headline": "  Customer Storie –",
            "descriptions": "Read heartwarming tales from pet parents who trust us with their beloved companions. Get expert advice on keeping your pet happy and healthy.",
            "color": "text-blue-600"
        }, {
            "icon": "bxs:offer",
            "headline": " Special Offers & Update –",
            "descriptions": "Stay in the loop about promotions, new services, and seasonal deals! Get expert advice on keeping your pet happy and healthy.",
            "color": "text-red-600"
        },
    ];


    return (
        <div>
            <div className='max-2xl:px-60 xl:px-15 md:px-15 px-1 py-5 flex gap-2 min-2xl:gap-15 w-full h-full max-sm:flex max-sm:flex-col max-sm:w-full max-sm:px-5'>
                <div className='border-1 border-slate-300 flex  flex-col gap-6 rounded-lg w-full min-2xl:w-[2000px] bg-white py-8 px-7 max-sm:px-4'>
                    <p className='text-3xl font-semibold'>
                        Service for every dog and cat
                    </p>
                    <div className='flex flex-col gap-5 justify-center w-full mt-5 min-2xl:text-xl'>
                        {
                            data.map((data_inner, index) => {
                                return (
                                    <section key={index} className='flex items-center gap-3'>
                                        <span className='text-3xl  font-semibold'>
                                            <Icon width={30} className={data_inner.color} icon={data_inner.icon} />
                                        </span>
                                        <div className='flex flex-col '>
                                            <span className='text-lg font-semibold min-2xl:text-2xl'>
                                                {data_inner.headline}
                                            </span>
                                            <span className='text-gray-400 text-[17px]'>
                                                {data_inner.descriptions}
                                            </span>
                                        </div>
                                    </section>
                                )
                            })
                        }

                        <p className='min-2xl:text-lg px-10'>We are passionate about creating a safe, fun, and loving environment for your pets. Follow our blog to stay informed and ensure your pet receives the best care possible!
                        </p>

                    </div>
                </div>

                <div className=' flex flex-col rounded-lg gap-5 justify-between w-full bg-white max-sm:h-full'>
                    <div className='relative'>
                        <img className="object-fit h-[46rem] max-sm:h-full w-full rounded-lg" src={`${import.meta.env.BASE_URL}WhatsApp Image 2025-04-02 at 13.04.44_ed1530e4.jpg`} alt="" />
                        <div className='absolute -top-5 max-sm:-top-1 h-full flex flex-col justify-between p-2'>
                            <div className=' p-5 max-sm:p-1'>
                                <p className='text-white flex flex-col gap-4  max-sm:gap-1'><span className='flex flex-col '><span className='text-8xl max-sm:text-5xl font-extrabold text-green-900'>Trusted</span> <span className='text-8xl max-sm:text-5xl font-extrabold text-green-900'> cat care</span></span><span className='text-7xl max-sm:text-4xl font-bold'> Feeding,</span><span className='text-6xl max-sm:text-4xl font-bold'> Grooming,</span><span className='text-5xl max-sm:text-3xl font-bold max-sm:font-semibold'> Health monitoring.</span></p>
                            </div>
                            <div className='px-5 max-sm:px-1'>
                                <button className='btn flex items-center gap-6 rounded-lg bg-green-700 text-white hover:bg-green-950 p-4 max-sm:p-2 max-sm:gap-4'>Lets Get Started<Icon width={30} className=' text-white border-1 rounded-full p-1 max-sm:w-5.5 max-sm:h-5.5' icon={"mingcute:arrow-right-fill"} /></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Tips