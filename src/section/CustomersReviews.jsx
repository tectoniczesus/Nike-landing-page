
import { reviews } from '../constant'
import ReviewCard from '../component/ReviewCard'

const CustomersReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>What Our <span className='text-coral-red'>Customers</span> Say?</h3>
      <p className='info-text text-center m-auto mt-4 max-w-lg'>hear geniune stories from our satisfied customers about their expectional expriences with us
      </p>
    <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
      {reviews.map((review, index)=>(
        <ReviewCard key={index}
        imgURL = {review.imgURL}
        customerName = {review.customerName}
        rating = {review.rating}
        feedback = {review.feedback}
        />
      ))}
    </div>
    
    </section>
  )
}

export default CustomersReviews
