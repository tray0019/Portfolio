import Project from "../components/Project";
import AboutMe from "../components/AboutMe";
import TechStacks from "../components/TechStacks";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Home(){
    return (
        <>
         <Hero/>
        <AboutMe/>

                <Experience/>
                
<Project/>

        <TechStacks/>
        <Footer/>




        {/* <h1>Tester/Developer/BA</h1> */}
        </>
    );
}

export default Home;