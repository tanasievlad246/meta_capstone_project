import bruschetaImage from '../assets/restauranfood.jpg';
import '../App.css'

export const HeroSection = () => {
    return <article className="flex flex-row h-[50vh] md:h-[65vh] bg-green">
        <section className="grid grid-flow-row w-full h-full md:items-center lg:justify-center align-middle">
            <div className='ml-8 lg:ml-28 xl:ml-60'>
                <h1 className='md:text-7xl'>Hero Section</h1>
                <h2>Chicago</h2>
                <p className='text-md w-full mx-auto px-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className='ml-8 lg:ml-28 xl:ml-60'>
                <button className='bg-yellow rounded-xl w-1/2 sm:w-1/2 md:w-1/5 lg:w-2/4 xl:w-2/4 h-12 font-medium xxl-btn'>Reserve a Table</button>
            </div>
        </section>
        <section className="hidden lg:flex lg:flex-col w-full h-full items-center">
            <img src={bruschetaImage} alt='cook holding a tray of bruscheta' className='overflow-hidden relative top-10 rounded-3xl h-6/6 w-4/6'/>
        </section>
    </article> 
};