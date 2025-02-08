import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
    const user = await authUserSession();

    return (
        <div className="text-color-primary animate__animated animate__zoomIn  animate__delay-0.7s">

            <div className="border-y-2 text-xs border-color-third">
                <p className="mx-4 py-2">Hello, welcome back <span className="text-color-accent font-serif font-bold">"{user?.name}!!!"</span> </p>
            </div>

            <div className="absolute mx-28 pt-4">
                <h5 className="text-color-accent font-bold text-[10px] underline">DASHBOARD</h5>
                <h5 className="text-[18px] font-semibold">{user?.name}</h5>
                <h4 className="text-xs">{user?.email}</h4>
            </div>

            <div className="pt-4 grid-cols-2">
                <div className="overflow-hidden border-2 border-w-color-primary w-20 rounded-full mx-4">
                    <Image
                        className="object-cover w-full h-full rounded-full"
                        src={user.image}
                        alt="YOUR IMAGE"
                        width={290}
                        height={290}
                    />
                </div>
            </div>

            <div className="mt-4 gap-4 border-y-2 border-color-third">

                <div className="hover:bg-color-blue duration-500 transition-all">
                    <Link href="/users/dashboard/collection" className="hover:bg-color-third duration-500 transition-all">
                        <div className="py-4 flex items-center gap-2 mx-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff" viewBox="0 0 256 256"><path d="M83.19,174.4a8,8,0,0,0,11.21-1.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6A67.88,67.88,0,0,0,163,141.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,81.6,163.2,8,8,0,0,0,83.19,174.4ZM112,112a24,24,0,1,1,24,24A24,24,0,0,1,112,112Zm96-88H64A16,16,0,0,0,48,40V64H32a8,8,0,0,0,0,16H48v40H32a8,8,0,0,0,0,16H48v40H32a8,8,0,0,0,0,16H48v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V40A16,16,0,0,0,208,24Zm0,192H64V40H208Z"></path></svg>
                            <div>
                                <h4 className="font-bold text-[12px]">Collections</h4>
                                <p className="text-[12px]">Your collections that you have ever added</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="hover:bg-color-blue duration-500 transition-all">
                    <Link href="/users/dashboard/comment" className="hover:bg-color-third duration-500 transition-all">
                        <div className="py-4 flex items-center gap-2 mx-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff" viewBox="0 0 256 256"><path d="M216,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H82.5a16,16,0,0,0-10.3,3.75l-.12.11L40,224V64H216ZM88,112a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm0,32a8,8,0,0,1,8-8h64a8,8,0,1,1,0,16H96A8,8,0,0,1,88,144Z"></path></svg>
                            <div>
                                <h4 className="font-bold text-[12px]">Comments</h4>
                                <p className="text-[12px]">Your comments on each film</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="pt-2 flex items-center justify-center">
                <p className="text-color-blue font-bold text-xs">
                    Coming Soon
                </p>
            </div>

            <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="#2B3333" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
            </div>

        </div>
    );
};

export default Page;
