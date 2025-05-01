import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import Adoptive from './Adoptive'
// import Blog from './Blog'
import Footer from '../NavComp/Footer'
import Navbar from '../NavComp/Navbar'



function BlogDetails() {
    return (
        <div>
            <Navbar />
            <div className='flex gap-2 px-18 p-10'>

                <div className=' px-2 flex flex-col gap-5 w-[70%]'>
                    <div className=' flex justify-between'>
                        <p className='text-lg text-green-600 font-bold'>Cats</p>
                        <p className='text-md text-blue-800 font-bold'>4 min read</p>
                    </div>
                    <div className=''>
                        <p className='text-3xl font-bold'>
                            How to Choose the Best Wet Cat Food for Your Cat
                        </p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex item-center gap-2'>
                            <div className=' h-full'>
                                <Icon width={50} className='' icon={"qlementine-icons:user-16"} />
                            </div>
                            <div className='h-full pt-1'>
                                <p className='text-[14px] font-semibold'>LUCKY Editorial</p>
                                <p className='text-[13px]'>Content writter</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg font-semibold'>Mar 27, 25</p>
                        </div>
                    </div>

                    <div className=''>
                        <p className='text-[18px]'>Being a cat parent comes with a lot of love, cuddles, and let’s be honest, a fair bit of responsibilities and decision-making, especially when it comes to their food. With endless options lining the shelves, choosing the best wet cat food can be overwhelming.</p>
                        <p className='text-[18px]'>
                            You want something nutritious, delicious, and suited to your cat’s needs, but how do you pick the right one?
                        </p>
                        <p className='text-[18px]'>
                            The good news is that it does not have to be complicated. In this blog, we will share with you what you need to factor in when selecting the right cat food for the furry member of your family.
                        </p>

                    </div>
                    <div className=''>
                        <p className='text-3xl font-bold'>
                            Understand Your Cat’s Nutritional Needs
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-[18px]'>
                            Cats are not just picky eaters, they have unique dietary needs that are very different from dogs. ,They are obligate carnivores, which means their diet must be rich in animal-based proteins and fats.
                        </p>
                        <p className='text-[18px]'>
                            Here are some crucial points that you have to keep in mind while choosing the ideal wet food for your cat:
                        </p>

                        <div className='flex items-center'>
                            <li className=''></li>
                            <p className='text-[18px]'>
                                <span className='font-bold'>
                                    Protein:
                                </span>
                                The Building Block of Health
                            </p>
                        </div>
                        <p className='text-[18px]'>
                            It is one of the crucial parts of a cat’s diet because it helps in energy production, muscle growth, and immune functions. You must consider food that includes real meat like chicken, fish, turkey. Without having enough protein, cats can become lethargic, lose muscle mass, or develop certain health issues over time.
                        </p>


                        <div className='flex items-center'>
                            <li className=''></li>
                            <p className='text-[18px]'>
                                <span className='font-bold'>
                                    Taurine:
                                </span>
                                A Must-Have for Eye & Heart Health
                            </p>
                        </div>
                        <p className='text-[18px]'>
                            Cats require taurine, which is an amino acid found in animal proteins, to support their heart, vision, and overall well-being. Since their bodies do not produce enough taurine naturally, it must come from their food. A lack of taurine can lead to serious vision problems and heart conditions, so always check the ingredients list for this crucial nutrient.
                        </p>


                        <div className='flex items-center'>
                            <li className=''></li>
                            <p className='text-[18px]'>
                                <span className='font-bold'>
                                    Fats:
                                </span>
                                The Key to a Healthy Coat & Joints
                            </p>
                        </div>
                        <p className='text-[18px]'>
                            Fats do more than provide energy, they help keep your cat’s coat shiny, skin healthy, and joints strong. Omega-3 and Omega-6 fatty acids, often found in fish oil and animal fats, reduce inflammation, promote a shiny coat, and boost brain function. If your cat has dry skin or a dull coat, they might need more healthy fats in their diet.
                        </p>


                        <div className='flex items-center'>
                            <li className=''></li>
                            <p className='text-[18px]'>
                                <span className='font-bold'>
                                    Essential Vitamins and Minerals
                                </span>

                            </p>
                        </div>
                        <p className='text-[18px]'>
                            Just like us, cats need a mix of vitamins and minerals to stay healthy. Nutrients like Vitamin A, Vitamin D, B vitamins, calcium, and zinc support vision, bone strength, energy, and immune function. A well-balanced wet food should naturally contain these nutrients, without relying too much on artificial additives.
                        </p>
                        <div className='flex items-center'>
                            <li className=''></li>
                            <p className='text-[18px]'>
                                <span className='font-bold'>
                                    Easily Digestible Food:
                                </span>
                                Happy Tummies
                            </p>
                        </div>
                        <p className='text-[18px]'>
                            Cats have sensitive stomachs, and some ingredients do not sit well with them. The best wet foods use real meat as the first ingredient and avoid unnecessary fillers, artificial preservatives, and fillers. If your cat has allergies or a sensitive stomach, grain-free or limited-ingredient options might be a good choice.
                        </p>
                        <div className='flex items-center'>
                            <li className=''></li>
                            <p className='text-[18px]'>
                                <span className='font-bold'>
                                    Low Carbs
                                </span>
                            </p>
                        </div>
                        <p className='text-[18px]'>
                            Cats have zero need for carbohydrates. Their natural diet consists of protein and fat, not grains. Serving them vast amounts of carbs like corn, soy, or wheat can lead to digestive issues, obesity, and diabetes. So, if you want to keep your cat’s diet healthy, look for wet food that is low in carbs and free of unnecessary fillers.
                        </p>

                        <div className=''>
                            <p className='text-3xl font-bold'>
                                Consider Your Cat’s Age & Health
                            </p>
                        </div>
                        <p className='text-[18px]'>
                            Kittens, adults, and senior cats have different dietary needs. Kittens need high-protein food to support their growth, whereas senior cats may require food with joint support ingredients like glucosamine. If your cat has any specific health conditions like food allergies, or kidney issues, always consult with your vet for recommendations on the best formulation.
                        </p>


                        <div className=''>
                            <p className='text-3xl font-bold'>
                                Look Out for the Ingredients List
                            </p>
                        </div>
                        <p className='text-[18px]'>
                            A good rule of thumb is to go through the first few ingredients on the packaging. The main ingredient should always be real meat, not by-products or fillers. Also, avoid cat food with artificial preservatives, excessive carbohydrates, and colours, as these do not provide any nutritional value to your cat. Instead, you can opt for formulas enriched with minerals, vitamins, and omega fatty acids for a well-balanced diet.
                        </p>


                        <div className=''>
                            <p className='text-3xl font-bold'>
                                Moisture Content Always Matters
                            </p>
                        </div>
                        <p className='text-[18px]'>
                            One of the biggest advantages of wet food is its high moisture content, which helps keep your cat hydrated. This is especially crucial for cats who do not drink enough water on their own. A moisture-rich diet supports kidney function, urinary health, and overall hydration, reducing the risk of urinary tract infections (UTI) and kidney disease.
                        </p>

                        <div className=''>
                            <p className='text-3xl font-bold'>
                                Texture and Palatability
                            </p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <img src="./public/Texture.webp" alt="" />
                            <p className='text-[18px]'>
                                Cats can be picky eaters, and their preferences vary when it comes to texture. Some cats love pate, while others prefer chunks in gravy or minced options. It may take some trial and error to find the texture your cat enjoys the most. If your feline turns up their nose at one type, try offering a different variety.
                            </p>
                        </div>

                        <div className=''>
                            <p className='text-3xl font-bold'>
                                Transitioning to a New Wet Food
                            </p>
                        </div>
                        <p className='text-[18px]'>
                            If you are introducing a new wet cat food, do so gradually to avoid digestive upset. Mix a small portion of the new food with your cat’s current diet and increase the amount over a week. This allows your cat to adjust to the taste and texture without stomach issues.
                        </p>


                        <div className=''>
                            <p className='text-3xl font-bold'>
                                Portion Control and Feeding Frequency
                            </p>
                        </div>
                        <p className='text-[18px]'>
                            Wet food should be served in appropriate portions based on your cat’s age, weight, and activity level. Most wet food comes in single-serve pouches or cans, making portioning easy. Always follow feeding guidelines on the packaging and adjust as needed to maintain a healthy weight for your cat.
                        </p>
                        <p className='text-[18px]'>
                            Finding the best wet cat food for your cat does not have to be challenging. By focusing on the above-mentioned factors, you can provide them with a nutritious and enjoyable meal.
                        </p>
                        <p className='text-[18px]'>
                            Besides, if you are looking for a delicious and wholesome option, Meowsi offers carefully crafted food made with real ingredients to keep your feline friend healthy and satisfied. Always keep an eye on their health and adjust their food as needed. After all, a well-fed cat is a happy cat!
                        </p>

                    </div>    
                </div>



{/* Related blogs */}
                <div className=' w-[25%] '>
                    <div className='h-20'></div>
                    <div className='border-1 border-slate-300 rounded-md px-6 p-6'>
                    <div className='p-2 py-5'>
                        <p className='text-2xl font-bold'>Related Blogs</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                    <div className='flex p-2 border-1 border-slate-300 gap-2'>
                        <div>
                        <img className=' w-35' src={`${import.meta.env.BASE_URL}blog-1[1].avif`}  alt="" />

                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[15px] font-bold'>
                                How to Choose the Best Wet Cat F...
                            </p>
                            <p className='text-[12px] flex justify-between'>
                                <span>HUFT Editorial</span>
                                <span>Mar 27, 25</span>
                            </p>
                        </div>
                    </div>

                    <div className='flex p-2 border-1 border-slate-300 gap-2'>
                        <div>
                            <img className=' w-35' src={`${import.meta.env.BASE_URL}blog-1[1].avif`}  alt="" />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[15px] font-bold'>
                                How to Choose the Best Wet Cat F...
                            </p>
                            <p className='text-[12px] flex justify-between'>
                                <span>HUFT Editorial</span>
                                <span>Mar 27, 25</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex p-2 border-1 border-slate-300 gap-2'>
                        <div>
                        <img className=' w-35' src={`${import.meta.env.BASE_URL}blog-1[1].avif`}  alt="" />

                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[15px] font-bold'>
                                How to Choose the Best Wet Cat F...
                            </p>
                            <p className='text-[12px] flex justify-between'>
                                <span>HUFT Editorial</span>
                                <span>Mar 27, 25</span>
                            </p>
                        </div>
                    </div>

                    <div className='flex p-2 border-1 border-slate-300 gap-2'>
                        <div>
                        <img className=' w-35' src={`${import.meta.env.BASE_URL}blog-1[1].avif`}  alt="" />

                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[15px] font-bold'>
                                How to Choose the Best Wet Cat F...
                            </p>
                            <p className='text-[12px] flex justify-between'>
                                <span>HUFT Editorial</span>
                                <span>Mar 27, 25</span>
                            </p>
                        </div>
                    </div>

                    <div className='flex p-2 border-1 border-slate-300 gap-2'p>
                        <div>
                        <img className=' w-35' src={`${import.meta.env.BASE_URL}blog-1[1].avif`}  alt="" />

                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[15px] font-bold'>
                                How to Choose the Best Wet Cat F...
                            </p>
                            <p className='text-[12px] flex justify-between'>
                                <span>HUFT Editorial</span>
                                <span>Mar 27, 25</span>
                            </p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                {/* related blogs end */}

            </div>
{/* <div className='m-10 border-1'>
<Adoptive />
</div> */}

<Footer />
        </div>
        
    )
}

export default BlogDetails