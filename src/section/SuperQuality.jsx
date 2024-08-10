
import Button from '../component/Button'
import {  shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
     <section id="about us"
     className='flex justify-center items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h2>
        <p className='mt-4 lg:max-w-lg info-text '>Ensuring the premium confront with style, a meticulously carfted footwear</p> 
        <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellence ensure your statisfaction</p>
        <div className='mt-7'>
        <Button label="View Detail"/>
      </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="shoe 8" 
        width={570}
        height={522}
        className='object-contain'/>
      </div>
      
     </section>
  )
}

export default SuperQuality
