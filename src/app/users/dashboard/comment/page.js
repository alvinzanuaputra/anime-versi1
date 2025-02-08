import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import React from 'react'
import Link from 'next/link'
import Header from '@/components/Dashboard/Header'
import 'animate.css/animate.min.css';


const Page = async () => {
    const user = await authUserSession();
    const comments = await prisma.comment.findMany({ where: { user_email: user.email } });

    return (
        <section className="pt-2 px-2 w-full border-t-2 border-color-third animate__animated animate__slideInLeft animate__delay-0.5s">
            <Header title={'Comments'} />
            <div className="grid grid-cols-1 py-4 gap-4 animate__animated animate__zoomIn animate__delay-0.2s">
                {comments.length === 0 ? (
                    <div className="text-color-accent flex items-center justify-center font-bold">"Comment not found !!!"</div>
                ) : (
                    comments.map((comment) => (
                        <Link
                            href={`/anime/${comment.anime_mal_id}`}
                            key={comment.id}
                            className="bg-color-hiam text-color-primary p-4"
                        >
                            <div className="flex items-center text-[12px] lg:text-[12px] px-1 mt-1 mb-0.5 font-semibold">
                                Scroll Your Box Comment For More
                                <section>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256"><path d="M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z"></path></svg>
                                </section>
                            </div>
                            <div>
                                <section className="w-72 h-8 pt-2 underline bg-color-accent text-color-dark font-bold lg:text-[15px] md:w-1/2 sm:w-1/2 lg:w-full">
                                    <p className="mx-4">{comment.anime_title}</p>
                                </section>

                                <section
                                    className={`w-72 min-h-[40px] bg-color-hitam border-[1px] border-color-primary overflow-y-auto sm:w-1/2 md:w-1/2 lg:w-full`}
                                >
                                    <p className="mx-4 py-2 overflow-auto">{comment.comment}</p>
                                </section>

                                <section className="flex mr-1.5 lg:mr-0 items-center">
                                    <p className="py-1 bg-color-accent rounded-b-sm text-[7px] px-3 lg:text-xs">Guest</p>
                                </section>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </section>
    );
};

export default Page;