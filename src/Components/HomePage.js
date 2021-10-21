
import Nav from './Nav'
import Logo from './Logo';
import WallPaper from './WallPaper';

function HomePage() {
    return (
        <div className="App">
            <WallPaper />
            <div className="top-nav">
            <Logo />
            <Nav />
            </div>
         
      </div>
    )
}

export default HomePage