
import Nav from './Nav'
import Logo from './Logo';
import WallPaper from './WallPaper';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Work from './Work';
import Home from './Home';
import Footer from './Footer';

function HomePage() {
    return (
        <div className="App w-screen overflow-x-hidden m-0">
            <WallPaper />
            <div className="flex flex-col md:flex-row items-center py-2 mx-2 justify-between">
            <Logo />
            <Nav />
            </div>
            <div className="home-container h-screen">
                <Home />
            </div>
            <div className="contact-container h-screen">
                <Contact />

            </div>
            <div className="about-container bg-gray-700 text-white lg:h-screen">
                <About />
            </div>

            <div className="services-container bg-gray-400 lg:h-screen">
                <Services />
            </div>

            <div className="my-work-container bg-gray-700 lg:h-screen text-white">
                <Work />
            </div>
         
            <div className="footer-container h-40 bg-gray-200">
                <Footer />
            </div>

      </div>
    )
}

export default HomePage