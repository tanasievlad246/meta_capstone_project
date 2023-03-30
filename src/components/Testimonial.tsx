import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface ITestimonial {
    name: string;
    review: string;
    rating: number;
    imageSrc: string;
}

const RatingStars = ({ rating }: { rating: number }) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} style={{ color: '#F4CE14', width: '12px'}}/>);
    }
    return <div className="flex flex-row">{stars}</div>;
}

export const Testimonial = ({ testimonial }: { testimonial: ITestimonial }) => {
    const {rating} = testimonial;

    return <>
        <div className="flex flex-col items-center w-52 h-48 bg-lightgray m-10 justify-center p-5 rounded-t-xl">
            <div className="flex flex-row w-full pb-5">
                <RatingStars rating={rating} />
            </div>
            <div className="flex flex-row w-full justify-between">
                <img src={testimonial.imageSrc} alt="" className="object-cover block w-12 h-12"/>
                <p>{testimonial.name}</p>
            </div>
            <div className="w-full pt-5">
                <p className="text-sm">{testimonial.review}</p>
            </div>
        </div>
    </>
}