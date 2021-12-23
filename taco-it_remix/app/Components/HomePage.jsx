
import Nav from './Nav'
import Logo from './Logo';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Home from './Home';
import Footer from './Footer';

function HomePage() {
    return (
        <div className="App w-screen overflow-hidden ">
            <div className="home-container h-screen w-full">
                <div className="flex flex-col md:flex-row items-center justify-between">               
                <Logo />
                <Nav />
                </div>
                <Home />
            </div>
            <div className="services-container bg-gray-200 h-screen w-screen m-0 p-0 overflow-hidden">
                <Services />
            </div>
            <div className="contact-container h-screen">
                <Contact />
            </div>
            <div className="about-container bg-gray-700 text-white lg:h-screen">
                <About />
            </div>
            <div className="footer-container h-40 bg-gray-200">
                <Footer />
            </div>

        </div>
    )
}

export default HomePage