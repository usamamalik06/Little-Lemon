import Heading from "../sections/headingPage/Heading";
import About from "../sections/headingPage/About"
import Specials from "../sections/headingPage/Specials";
export default function Home(){
    return(
        <>
        <Heading/>
        <main>
            <Specials />
            <About/>
        </main>
        </>
    );
}