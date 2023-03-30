export const Footer = () => {
    return <>
        <footer className="bg-yellow flex flex-row flex-wrap container mx-auto justify-between px-24">
            <div className="flex flex-col mb-5 md:mb-0">
                <p className="text-green font-bold">Doormat Navigation</p>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </div>
            <div className="flex flex-col mb-5 md:mb-0">
                <p className="text-green font-bold">Contact</p>
                <p>+1-555-234-5678</p>
            </div>
            <div className="flex flex-col mb-5 md:mb-0">
                <p className="text-green font-bold">Social Media Links</p>
                <a>Facebook</a>
                <a>Instagram</a>
                <a>TikTok</a>
            </div>
        </footer>
    </>
};