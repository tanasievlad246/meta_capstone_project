import { Testimonial } from "./Testimonial"

export const Testimonials = () => {
    const testimonials = [
        { name: 'Jon Doe', review: 'Lorem ipsum dolor sit amet.', rating: 5, imageSrc: require('/home/tanasie_vlad/projects/meta_capstone_project/src/assets/lemon dessert.jpg')},
        { name: 'Jon Doe', review: 'Lorem ipsum dolor sit amet.', rating: 4, imageSrc: require('/home/tanasie_vlad/projects/meta_capstone_project/src/assets/lemon dessert.jpg')},
        { name: 'Jon Doe', review: 'Lorem ipsum dolor sit amet.', rating: 5, imageSrc: require('/home/tanasie_vlad/projects/meta_capstone_project/src/assets/lemon dessert.jpg')},
        { name: 'Jon Doe', review: 'Lorem ipsum dolor sit amet.', rating: 3, imageSrc: require('/home/tanasie_vlad/projects/meta_capstone_project/src/assets/lemon dessert.jpg')},
    ]
    return <>
        <div className="flex flex-col bg-green items-center h-auto sm:h-2/3 md:h-4/5">
            <h2 className="mt-24">Testimonials</h2> 
            <div className="flex flex-row flex-wrap">
                {testimonials.map((testimonial, index) => <Testimonial testimonial={testimonial} />)}
            </div>
        </div> 
    </>
}