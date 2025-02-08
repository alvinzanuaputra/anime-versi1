import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import 'animate.css/animate.min.css';

const Page = async () => {
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email },
    });

    return (
        <section className="pb-4 px-4 border-t-2 border-color-third animate__animated animate__fadeInLeft animate__delay-0.5s">
            <Header title={"Collections"} />
            <div className="w-50 h-20 mb-4">
                {collection.length === 0 ? (
                    <p className="text-color-accent flex items-center justify-center font-bold">"Collections are not found."</p>
                ) : (
                    collection.map((collect, index) => (
                        <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="my-4 max-h-[200px] flex bg-color-third rounded-lg border border-color-accent">
                            <Image
                                src={collect.anime_image}
                                alt={collect.anime_image}
                                width={350}
                                height={350}
                                className="my-2 mx-2 max-h-[350px] max-w-[100px] lg:w-full overflow-hidden"
                            />
                            <div className=" text-color-primary pt-4 bottom-0 w-full h-16">
                                <div className="pl-4 text-[10px] md:text-lg font-bold">{collect.anime_title}</div>
                                <div className="pl-4 text-[10px] md:text-[16px] text-color-accent underline italic">From Znuavin All Right Reserved.</div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </section>
    );
};

export default Page;
