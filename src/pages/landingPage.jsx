import HeroSection from './heroSection';
import Projects from './projects';
import Skills from './skills';
import ContactMe from './contactMe';
import AboutMe from './aboutMe';

export default function LandingPage() {
return (
    <>
        <HeroSection />
        <br />
        <div>
            <AboutMe />
            <Projects />
            <Skills />
            <ContactMe />
        </div>
    </>
    )
}