import restaurantImg from '../assets/restaurant.jpg'
import chefsImg from '../assets/restaurant chef B.jpg'

export const About = () => {
    return <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center md:items-start justify-center p-10 w-full md:w-1/2 h-full">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
            </p>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-center w-1/2 h-full md:p-10">
            <img src={restaurantImg} alt="" className='relative object-cover overflow-hidden w-2/3 lg:inset-y-44 xl:inset-y-52 2xl:inset-y-64'/>
            <img src={chefsImg} alt="" className='relative inset-x-28 object-cover overflow-hidden w-2/3 lg:-inset-y-44 xl:-inset-y-64'/>
        </div>
    </div>
}