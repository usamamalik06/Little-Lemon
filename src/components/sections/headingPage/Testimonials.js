import Carousel from './TestimonialCarousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials(){
    return(
        <section className='testimonials'>
            <article className='testimonials-topbar'>
                <h1>Testimonials</h1>
            </article>
        
        <section className='testimonials-cards'>
            <TestimonialCard name="Mike" description="This is the best Mediterranean food that I've ever had!" />
            <TestimonialCard name="Chen" description="I really loved the cozy vibes and 
            delicious food here."/>
            <TestimonialCard name="Casey" description="I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture."/>
            <TestimonialCard name="Joey" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
        </section>
        <section className='testimonials-carousel'>
            <Carousel />
        </section>
        </section>
    ); 
}