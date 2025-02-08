"use client"
import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import 'animate.css/animate.min.css';

const Header = ({ title }) => {
    const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center mx-4 mt-4 animate__animated animate__bounce animate__delay-0.5s">
            <button className="text-color-primary" onClick={handleBack}>
                <ArrowSquareLeft size={28} />
            </button>
            <h3 className="text-lg text-color-primary font-bold">
                {title}
            </h3>

        </div>
    )
}

export default Header