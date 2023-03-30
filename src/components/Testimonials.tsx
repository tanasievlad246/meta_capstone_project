import { Testimonial } from "./Testimonial"

export const Testimonials = () => {
    const testimonials = [
        { name: 'Jon Doe', review: 'Lorem ipsum dolor sit amet.', rating: 5, imageSrc: require('/home/tanasie_vlad/projects/meta_capstone_project/src/assets/lemon dessert.jpg')},
        { name: 'Jon Doe', review: 'Lorem ipsum dolor sit amet.', rating: 5, imageSrc: require('/home/tanasie_vlad/projects/meta_capstone_project/src/assets/lemon dessert.jpg')},
        { name: 'Jon Doe', review: 'Lorem ipsum dolor sit amet.', rating: 5, imageSrc: require('/home/tanasie_vlad/projects/meta_capstone_project/src/assets/lemon dessert.jpg')},
        { name: 'Jon Doe', review: 'Lorem ipsum dolor sit amet.', rating: 5, imageSrc: require('/home/tanasie_vlad/projects/meta_capstone_project/src/assets/lemon dessert.jpg')},
    ]
    return <>
        <div className="flex flex-col bg-green items-center h-auto xl:h-[65vh]">
            <h2 className="mt-24">Testimonials</h2> 
            <div className="flex flex-row flex-wrap justify-center">
                {testimonials.map((testimonial, index) => <Testimonial testimonial={testimonial} />)}
            </div>
        </div> 
    </>
}