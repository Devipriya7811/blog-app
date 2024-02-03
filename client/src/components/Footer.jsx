

const Footer = () => {
    return(
        <>
    <div className="mt-8 w-full bg-black px-8 md:px-[350px] flex justify-between text-sm py-8 ">
        <div className="flex flex-col text-white">
            <p>Featured Blogs</p>
            <p>Most viewed</p>
            <p>Readers choice</p>
        </div>
        <div className="flex flex-col text-white">
            <p>Forum</p>
            <p>Support</p>
            <p>Recent posts</p>
        </div>
        <div className="flex flex-col text-white">
            <p>Privacy policy</p>
            <p>About us</p>
            <p>Terms & conditions</p>
            <p>Terms of service</p>
        </div>
    </div>
    <p className="py-2 pb-2 text-center text-white bg-black">All rights deserved @Blog Market 2024</p>
    </>
    )
}
export default Footer;