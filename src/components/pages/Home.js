import Heading from "../sections/headingPage/Heading";
import About from "../sections/headingPage/About"
import Specials from "../sections/headingPage/Specials";
import Testimonials from "../sections/headingPage/Testimonials";
export default function Home(){
    return(
        <>
        <Heading/>
        <main>
            <Specials />
            <Testimonials />
            <About/>
        </main>
        </>
    );
}