import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"
import 'animate.css/animate.min.css';

const UserActionButton = async() => {
    const user = await authUserSession();

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2 animate__animated animate__bounce animate__delay-4s">
            {
                user ? <Link href="/users/dashboard" className ="inline-block bg-color-dark text-color-primary rounded-lg border border-color-accent py-1 px-12 lg:font-bold
                hover:text-color-accent hover:bg-color-dark hover:border-color-dark duration-500 transition-all text-[14px] lg:text-[16px] lg:py-1 sm:text-[16px] sm:py-1"> Dashboard </Link> : null
            }
            <Link href={actionURL} className = "inline-block bg-color-dark text-color-primary rounded-lg border border-color-accent py-1 px-12 lg:font-bold hover:text-color-accent hover:bg-color-dark hover:border-color-dark duration-500 transition-all text-[14px] lg:text-[16px] lg:py-1 sm:text-[16px] sm:py-1">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton