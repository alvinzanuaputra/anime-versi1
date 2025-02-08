"use client"
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "@/components/AnimeList/CommentInput.css";

const MAX_COMMENT_LENGTH = 500;

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
    const [comment, setComment] = useState("");
    const [isCreated, setIsCreated] = useState(false);
    const [commentCount, setCommentCount] = useState(0);
    const [animationClass, setAnimationClass] = useState("");
    const [isOverLimit, setIsOverLimit] = useState(false);
    const router = useRouter();
    const textareaRef = useRef(null);

    useEffect(() => {
        const fetchCommentCount = async () => {
            const response = await fetch(`/api/v1/comment/count?anime_mal_id=${anime_mal_id}`);
            const data = await response.json();
            const storedCommentCount = parseInt(localStorage.getItem("commentCount"), 10) || 0;
            setCommentCount(storedCommentCount || data.count);
        };

        fetchCommentCount();
    }, [anime_mal_id]);

    useEffect(() => {
        localStorage.setItem("commentCount", commentCount.toString());
    }, [commentCount]);

    const handleInput = (event) => {
        const inputComment = event.target.value;

        // Check if comment exceeds the character limit
        if (inputComment.length <= MAX_COMMENT_LENGTH) {
            setComment(inputComment);
            setIsOverLimit(false); // Reset the flag when within the limit
        } else {
            setIsOverLimit(true);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            // Prevent the default behavior of the Enter key (e.g., new line)
            event.preventDefault();

            // Call the handlePost function when Enter is pressed
            handlePost(event);
        }
    };


    const handlePost = async (event) => {
        event.preventDefault();

        // Memeriksa apakah komentar tidak kosong sebelum mengirim
        if (comment.trim() !== "") {
            const data = { anime_mal_id, user_email, comment, username, anime_title };
            const response = await fetch("/api/v1/comment", {
                method: "POST",
                body: JSON.stringify(data),
            });

            const postComment = await response.json();

            if (postComment.isCreated) {
                setIsCreated(true);
                setComment("");
                setCommentCount(commentCount + 1);
                setAnimationClass("animate__typing");
                router.refresh(false);

                setTimeout(() => {
                    setAnimationClass("");
                }, 2000);
                textareaRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className="flex flex-col rounded-border mt-4 gap-2 ">
            <textarea
                ref={textareaRef}
                placeholder="Be The first Comment ! (max 200)"
                onChange={handleInput}
                onKeyPress={handleKeyPress}
                value={comment}
                className={`py-2 text-color-primary bg-color-hitam px-2 rounded-[1px] border ${isOverLimit ? "border-color-red" : "border-color-accent"
                    } h-20 text-[10px] lg:text-[13px] lg:h-28`}
                style={{
                    fontStyle: "italic",
                }}
            />

            <div className="flex items-center justify-between">
                <div className="flex items-center py-1 px-2 pr-3 bg-color-hitam text-color-hitam rounded-[1px] border border-color-accent shadow-sm shadow-color-accent  hover:text-color-hitam text-[10px] 
                    duration-500 transition-all">
                    <h3 className=" text-color-primary text-[9px] lg:text-[14px]" style={{ fontStyle: "italic" }}>
                        Status :
                    </h3>
                    {isCreated && (
                        <h3 className={`ml-1 text-[9px] lg:text-[14px] text-color-accent ${animationClass}`}
                            style={{ fontStyle: "italic" }}>
                            Sended ...
                        </h3>
                    )}
                </div>
                <button
                    onClick={handlePost}
                    className="py-1 px-2 bg-color-accent text-color-hitam rounded-[1px] border border-color-hitam shadow-sm shadow-color-primary hover:text-color-hitam  font-bold text-[10px] lg:text-[14px] 
                    hover:shadow-none
                    duration-500 transition-all"
                >
                    Post Comment
                </button>
            </div>
            <h4 className="text-color-primary text-xs lg:text-[16px] mt-6 mb-2 ">{`Your Comments Just Now : ${commentCount} `}</h4>
        </div>


    );
};

export default CommentInput;