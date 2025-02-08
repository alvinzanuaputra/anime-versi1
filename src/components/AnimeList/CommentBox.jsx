import prisma from "@/libs/prisma";
import React from "react";
import 'animate.css/animate.min.css';

const MAX_COMMENT_HEIGHT = 80;

const CommentBox = async ({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

    const reversedComments = comments.reverse();

    return (
        <div className='grid gird-col mb-10 border-t-2 border-color-accent gap-4 '>
            <div className="w-44 lg:w-56 flex items-center text-color-accent rounded-[1px] border border-color-accent">
                <h3 className="text-[9px] lg:text-[12px] px-1 mt-1 mb-0.5 bg-color-hitam ">
                    Scroll Your Box Comment For More
                </h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                    width="9"
                    height="9"
                    fill="#39A7FF"
                    viewBox="0 0 256 256"
                >
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                    width="9"
                    height="9"
                    fill="#39A7FF"
                    viewBox="0 0 256 256"
                >
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
            </div>

            {comments.length === 0 && (
                <div className="text-[10px] lg:text-[16px] mt-10 text-center text-color-primary px-1 mb-0.5 
                animate__animated animate__delay-5s animate__fadeInLeft">
                    "Comment Not Found" 
                    <p>
                    <span className="text-color-accent">Or you must be sign in first to see all</span>
                    </p>
                </div>
                
            )}

            {reversedComments.map((comment) => {
                const isOverMaxHeight = comment.comment.length > MAX_COMMENT_HEIGHT;
                const commentContainerStyle = {
                    maxHeight: isOverMaxHeight ? `${MAX_COMMENT_HEIGHT}px` : "auto",
                };

                return (
                    <div key={comment.id} className="text-xs text-color-primary p-4">
                        <div>
                            <section className="w-72 h-8 pt-2 underline bg-color-accent text-color-dark font-bold lg:text-[15px] md:w-1/2 sm:w-1/2 lg:w-full">
                                <p className="mx-4">{comment.username}</p>
                            </section>

                            <section
                                className={`w-72 min-h-[40px] bg-color-hitam border-[1px] border-color-primary overflow-y-auto sm:w-1/2 md:w-1/2 lg:w-full`}
                                style={commentContainerStyle}
                            >
                                <p className="mx-4 py-2 overflow-auto ">{comment.comment}</p>
                            </section>

                            <section className="flex mr-1.5 lg:mr-0 items-center">
                                <p className="py-1 bg-color-accent rounded-b-sm text-[7px] px-3 lg:text-xs">
                                    Guest
                                </p>
                            </section>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CommentBox;
