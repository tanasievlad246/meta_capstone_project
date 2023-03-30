import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
export interface MenuItem {
    name: string,
    imageSrc: string,
    description: string,
    price: number
}

export const MenuCard = ({ menuItem }: { menuItem: MenuItem }) => {
    return <>
       <article className="overflow-hidden rounded-lg shadow-lg m-10 flex flex-col justify-between w-64 md:w-80 h-full">

            <p className="h-40 w-full">
                <img alt="Placeholder" className="object-cover block w-full h-full" src={menuItem.imageSrc}/>
            </p>

            <section className="flex items-center justify-between leading-tight p-2 md:p-4 w-full">
                <h4 className="text-lg">
                    { menuItem.name}
                </h4>
                <p className="text-grey-darker text-lg text-yellow">
                  ${ menuItem.price } 
                </p>
            </section>

            <section className="p-5 w-full text-sm md:text-base">
                {menuItem.description}
            </section>

            <section className="flex items-center justify-between leading-none p-2 md:p-4">
                <p className="flex items-center no-underline hover:underline text-black cursor-pointer">
                    <h5 className="ml-2 text-sm" >
                        Order a delivery <FontAwesomeIcon icon={faArrowRight} /> 
                    </h5>
                </p>
            </section>

        </article> 
    </>
}