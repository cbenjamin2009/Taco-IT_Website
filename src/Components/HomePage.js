
import Nav from './Nav'
import Logo from './Logo';
import WallPaper from './WallPaper';

function HomePage() {
    return (
        <div className="App">
            <WallPaper />
            <div className="flex flex-col md:flex-row items-center py-2 mx-2 justify-between">
            <Logo />
            <Nav />
            </div>
         
      </div>
    )
}

export default HomePage