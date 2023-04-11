import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Tech from "./components/Tech"
import Works from "./components/Works"
import Feedbacks from "./components/Feedbacks"
import Contact from "./components/Contact"
import Stars from "./components/canvas/Stars"

function App() {

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-black">
                <Stars />
                <Navbar />
                <Hero />
                <About />
                <Tech />
                <Experience />
                <Works />
                {/* <Feedbacks /> */}
                <Contact />
            </div>
        </BrowserRouter>
    )
}

export default App
