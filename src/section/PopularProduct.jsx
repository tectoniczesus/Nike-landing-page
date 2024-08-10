import { products } from "../constant"
import PopularProductCard from "../component/PopularProductCard"

const PopularProduct = () => {
  return (
     <section>
      <div>
        <h2 className="text-4xl font-palanquin font-bold">Our 
        <span className="text-coral-red"> Popular</span> Product</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Expreince the top quality of our product</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
       grid-cols-1 sm:gap-6 gap-4">
         {products.map((product)=>(
          <PopularProductCard key={products.name} {...product}/>
         ))}
      </div>
     </section>
  )
}

export default PopularProduct
