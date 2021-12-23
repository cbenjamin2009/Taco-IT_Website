
import Nav from '../../Components/Nav'
import Logo from '../../Components/Logo';

export default function Manage() {
 
    return (
        <div className="App w-screen overflow-hidden h-screen bg-indigo-500">
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between">               
            <Logo />
            <Nav />
            </div>
        </div>
        <section className="w-2/3 mx-auto bg-indigo-400 mt-10 p-10">
            <h3 className="text-3xl text-black text-center pb-10">Consulting Services</h3>
            <p className="mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsa quo corrupti rem itaque iste eum delectus provident? A alias at temporibus enim corrupti deleniti facilis, corporis eius quae non voluptate doloremque quo perspiciatis nam saepe dolorem cupiditate tenetur. Laudantium aliquam aut ipsa tempore, itaque corporis nam asperiores blanditiis maxime?</p>
        </section>
        </div>
    )

}