import Bio from "./Bio";
import Projects from "./Projects";
import Skills from "./Skills"
import Contact from "./Contact";


export default function Home() {
    return (
        <div >
            <Bio />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}