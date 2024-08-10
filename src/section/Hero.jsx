import  { useState } from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../component/Button'
import{ shoes,statistics} from '../constant'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../component/ShoeCard'

const Hero = () => {
  const [bigShoeImg ,setBigShoeImg] = useState(bigShoe1);
  return (
   <section
    id = 'home'
    className='w-full flex xl:flex-row flex-col
    justify-center
    min-h-scren
    gap-10
    max-container
    '>
      <div className='relative xl:w-2/5
      fkex fkex-col justify-center
      item-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]
         max-sm:leading-[82px] font-bold'><span 
         className='xl:bg-white xl:whitespace-nowrap relative z-10
         pr-10'>The New Arrival </span><br />
        <span className='text-coral-red
        inline-block mt-3'>Nike</span> Shoes</h1>
        <p className='font-montserrat text-slate-gray text-lg
        leading-8 mt-6 mb-14 sm:max-w-sm'>Dicover the New style of ComFort</p>
        <Button label='shop now' iconURL = {arrowRight}/>
      
      
      <div className='flex justify-center items-start
      flex-wrap w-full mt-20 gap-16'>
         {statistics.map ((stat,index)=>(
               <div key={index}>
                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
               </div>
         ))}

      </div>
      </div>

      <div className='flex justify-center item-start relative flex-1
      xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover
      bg-center'>
        <img src={bigShoeImg} alt="big show 1"
        width={610}
        height={502}
        className='object-contain relative z-10' />
         <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map((image,index)=>(
          <div key={index}>
            <ShoeCard index={index}
            imgURL={image}
            changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
            bigShoeImg={bigShoeImg}/>
          </div>
        ))}
      </div>

     
      </div>
     
      


   </section>
  )
}

export default Hero
