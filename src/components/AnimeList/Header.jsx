import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="border-t-2 border-color-third flex justify-between items-center pt-5 pb-5 px-4 pr-2 animate__animated animate__fadeInRight animate__delay-1s">
        <h1 className="font-bold text-custom1 text-color-primary lg:text-2xl"><span className="mr-2 font-bold text-color-accent">|</span>{title}</h1>
            {
                linkHref && linkTitle 
                ?
                <Link href={linkHref} className="mr-2 text-color-accent text-[14px] underline
                hover:text-color-accent
                hover:bg-color-blue
                duration-2000
                transition-all">
                    {linkTitle}
                </Link>
                :                 null
            }

        </div>
    )
}
export default Header








