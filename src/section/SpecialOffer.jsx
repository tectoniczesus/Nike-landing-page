import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../component/Button"

const SpecialOffer = () => {
  return (
   <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
    <div className="flex-1">
      <img src={offer} alt="offer" width={773} height={687} className="object-conttain w-full"/>
    </div>
    <di className='flex flex-col flex-1'>
      <h2 className="text-4xl font-palanquin font-bold">
        <span className="text-coral-red">Special </span>
        Offer
      </h2>
      <p className="mt-4  info-text">Embark on a shopping jounery that redefine your experience with 
       unbeatable deals
       </p>
       <p className="mt-6 info-text">
        Navigate a realm of posibilites designed to fullfill your unique desire
       </p>
       <div className="gap-4 flex flex-wrap  mt-11">
        <Button label='Shop Now' iconURL={arrowRight}/>
        <Button label="learn more" backgroundColor = "bg-white" borderColor='border-slate-gray'
        textColor = 'text-slate-gray'/>
       </div>
    </di>
   </section>
  )
}

export default SpecialOffer
