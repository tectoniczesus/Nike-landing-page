import{
  Hero,
  Footer,
  CustomersReviews,
   PopularProduct,
   Services,
   SpecialOffer,
   Subscriber,
   SuperQuality

} from './section';
import Nav from './component/Nav';
const App =() => (
  <main className="relative ">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
        <PopularProduct/>
    </section>
    <section className="padding">
        <SuperQuality/>
    </section>
    <section className="padding-x py-10">
        <Services/>
    </section>
    <section className="padding">
        <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomersReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
        <Subscriber/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
    </section>
  </main>
)
export default App;