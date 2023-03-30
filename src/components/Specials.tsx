import { MenuCard, MenuItem } from "./MenuCard"

export const Specials = ({ menuItems }: { menuItems: MenuItem[] }) => {
    return <div className="flex flex-col items-center mt-10 md:mt-36">
        <div className="flex flex-row w-4/5 md:w-1/2 justify-between items-center">
            <h2>Specials</h2>
            <button className='bg-yellow rounded-xl w-3/5 sm:w-2/5 md:w-2/5 lg:w-1/5 h-12 font-medium xxl-btn'>Online Menu</button>
        </div> 
        <div className="flex flex-row flex-wrap justify-center w-full items-center">
            {menuItems.map((menuItem, index) => <MenuCard menuItem={menuItem} />)}
        </div>
    </div>
}