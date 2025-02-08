import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentPost from "@/components/AnimeList/CommentBox";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"
import Header from "@/components/AnimeList/Header";
import AnimeID from "@/components/AnimeList/AnimeID";
import 'animate.css/animate.min.css';


let animeId = await getNestedAnimeResponse("watch/promos/popular", "entry")
animeId = reproduce(animeId, 6);

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`);
    const user = await authUserSession();
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id },
    });
    const truncateWords = (text, numWords) => {
        if (text == null) {
            return '';
        }
        const words = text.split(' ');
        const truncatedWords = words.slice(0, numWords);
        const truncatedText = truncatedWords.join(' ');
        return truncatedText;
    };
    const starArray = Array.from({ length: 5 }, (_, index) => index);




    return (
        <div className="py-4 border-t-2 border-color-third bg-color-hitam text-left overflow-x-hidden animate__animated animate__zoomIn animate__delay-1s">
            <div className="flex border-y-2 mb-4 border-color-third">
                <navbar className="text-[9px] py-2 w-full flex justify-center items-center bg-color-dark text-color-primary gap-1 lg:text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 256 256"><path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z"></path></svg><section className="rounded  bg-color-accent">ATTENTION !!</section> STILL MAINTENANCE.   JOIN GROUP TELEGRAM<a href="https://t.me/zanuatech"><section className="underline text-color-accent hover:text-color-primary duration-500 transition-all">ZNUAVIN.</section></a>
                </navbar>
            </div>

            <div className="flex flex-rows-2 text-color-primary border-y-2 border-color-third bg-color-dark px-4 py-6 lg:py-8">
                <div className="w-8/7 lg:w-8/11 justify-center">
                    <Image
                        src={anime.data.images.webp.large_image_url}
                        alt={anime.data.images.jpg.large_image_url}
                        width={323}
                        height={150}
                        className="shadow-color-hitam shadow-xl my-1 w-3/4 ml-4 lg:w-5/7 md:w-2/3"
                    />
                </div>
                <div className="text-[11px] md:text-[10px] lg:text-lg sm:text-[19px] xs:pl-2">
                    <h2 className="flex font-bold text-[14px] lg:font-semibold md:text-2xl lg:text-3xl sm:text-2xl text-color-primary">{truncateWords(anime.data.title, 4)}
                    </h2>
                    <div className="font-semibold flex flex-row mb-4 lg:my-4">{truncateWords(anime.data.background, 3)} unleashed</div>
                    <div className="w-full flex flex-rows-3 my-1 gap-4 mt-2 text-[8px] lg:gap-10 lg:text-lg">
                        <p>For {anime.data.rank}</p>
                        <p>{anime.data.source}</p>
                        <p className="flex flex-rows-3">{truncateWords(anime.data.duration, 2)}</p>
                        <p className="flex flex-rows-4">{truncateWords(anime.data.rating, 2)}</p>
                    </div>
                    <div className="flex-rows-4">
                        <div className="py-1  flex flex-cols-2 border-y-2 border-color-third w-full lg:pb-3 lg:mt-1">
                            <div className="flex flex-rows-2 w-11 h-8 text-base lg:w-14 lg:h-12 lg:text-2xl bg-color-third rounded-[2px] border border-color-blue">
                                <h3 className="m-[4px] ml-[7px] lg:mt-2">{anime.data.score}</h3>
                                <div className=" flex flex-cols-2 ml-6 gap-1 ">
                                    <h1 className="absolute text-[10px]  lg:text-base">Rate</h1>
                                    <div className="mt-4 flex flex-row gap-1 lg:mt-7 w-3/4 hover:fill-color-accent lg:w-full">{starArray.map((index) => (
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="lg:ml-[2px] hover:fill-color-accent"
                                            width="17" height="17" fill="#fff" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-36 text-[9px] items-center my-1 lg:text-base lg:my-2">
                            <h1>Episode : {anime.data.episodes}</h1>
                        </div>
                        <div className="text-[8px] md:text-xs sm:text-xs lg:text-base">
                            <h3 className="">
                                Nime {anime.data.season}
                                <span className=" text-color-accent mx-1 lg:mx-3">|</span>
                                {anime.data.status}
                                <span className=" text-color-accent mx-1 lg:mx-3">|</span>
                                {anime.data.type}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-40">


            </div>

            {user && !collection && (
                <CollectionButton
                    anime_mal_id={id}
                    user_email={user?.email}
                    anime_image={anime.data.images.webp.image_url}
                    anime_title={anime.data.title}
                />
            )}
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            <div className="border-y-2 border-color-third bg-color-dark px-8 py-3 my-4">
                <h1 className="text-color-primary font-bold ">Synopsis</h1>
                <h3 className="text-color-primary my-4 text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs">{anime.data.synopsis}</h3>
            </div>



            <section>
                <Header title="Top Reviews" />
                <AnimeID api={animeId} />
            </section>


            <div className="mx-8 bg-color-hitam">
                <div className="flex items-center border-b-2 border-color-accent pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" className="" viewBox="0 0 256 256">
                        <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                    </svg>

                    <h3 className="mx-1 text-[12px] text-color-primary lg:text-[16px]">
                        {" "}
                        Viewer Comment{" "}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
                {user && (
                    <CommentInput
                        anime_mal_id={id}
                        user_email={user?.email}
                        username={user?.name}
                        anime_title={anime.data.title}
                    />
                )}
                <CommentPost anime_mal_id={id} />
            </div>

            <footer className="bg-color-hitam mx-8 pt-80 text-[7px] md:text-[11px] sm:text-[11px] lg:text-[11px] ">
                <div className="text-color-primary">
                    <section className="flex items-center gap-8 py-3 border-b-2 border-color-blue">
                        <h3 className="">
                            Original Title
                        </h3>
                        <h3 className="ml-6">
                            {truncateWords(anime.data.title, 2)}
                        </h3>
                    </section>
                    <section className="flex items-center gap-8 py-3 border-b-2 border-color-blue">
                        <div className="">IMDb Rating</div>
                        <section className="bg-color-blue rounded-sm flex items-center py-0.5 px-2 gap-1 ml-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256"><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path></svg>
                            <p >{anime.data.score}</p>
                        </section>
                        <h3 className="">{anime.data.favorites} votes</h3>
                    </section>
                    <section className="flex items-center py-3 gap-8 border-b-2 border-color-blue">
                        <h3 className="">TMDb Rating</h3>
                        <section className="bg-color-blue rounded-sm flex items-center gap-1 py-0.5 px-2 ml-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256"><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path></svg>
                            <h3 >{anime.data.scored_by}</h3>
                        </section>
                        <h3 className="text-color-primary">{anime.data.rank} votes</h3>
                    </section>

                    <section className="bg-color-hitam flex flex-cols-10 items-center gap-1 pt-4 mr-20">
                        <div className="flex items-center">Shared </div>
                        <div className="mr-6">{anime.data.members}</div>
                        <div className="bg-color-accent">
                            <h3 className="text-color-primary"></h3>
                        </div>
                        <div className="ml-2 bg-color-secondary px-2 mr-1 py-1 rounded-sm flex items-center hover:bg-color-dark transition-all lg:px-1">

                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"

                                width="16" fill="#fff" height="16" viewBox="0 0 24 24">
                                <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path>
                            </svg>
                            <a href="https://www.facebook.com/profile.php?id=100070957315001"><p className="text-color-primary ">Facebook</p></a>
                        </div>

                        <div className="bg-color-accent mr-1 px-2 py-1 rounded-sm flex items-center hover:bg-color-dark transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#fff" width="16" height="16" viewBox="0 0 50 50">
                                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                            </svg>
                            <a href="https://www.twitter.com/AlvinZanua"><p className="text-color-primary">Twitter</p></a>
                        </div>
                        <div className="bg-color-green px-2 mr-10 py-1 hover:bg-color-dark transition-all rounded-sm">
                            <h3 className="text-color-primary"></h3>

                            <a href="https://wa.me/628121783537"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" fill="#fff" viewBox="0 0 50 50">
                                <path d="M 25 2 C 12.318 2 2 12.318 2 25 C 2 28.96 3.0228906 32.853062 4.9628906 36.289062 L 2.0371094 46.730469 C 1.9411094 47.073469 2.03325 47.440312 2.28125 47.695312 C 2.47225 47.892313 2.733 48 3 48 C 3.08 48 3.1612344 47.989703 3.2402344 47.970703 L 14.136719 45.271484 C 17.463719 47.057484 21.21 48 25 48 C 37.682 48 48 37.682 48 25 C 48 12.318 37.682 2 25 2 z M 16.642578 14 C 17.036578 14 17.428437 14.005484 17.773438 14.021484 C 18.136437 14.039484 18.624516 13.883484 19.103516 15.021484 C 19.595516 16.189484 20.775875 19.058563 20.921875 19.351562 C 21.069875 19.643563 21.168656 19.984047 20.972656 20.373047 C 20.776656 20.762047 20.678813 21.006656 20.382812 21.347656 C 20.086813 21.688656 19.762094 22.107141 19.496094 22.369141 C 19.200094 22.660141 18.892328 22.974594 19.236328 23.558594 C 19.580328 24.142594 20.765484 26.051656 22.521484 27.597656 C 24.776484 29.583656 26.679531 30.200188 27.269531 30.492188 C 27.859531 30.784188 28.204828 30.734703 28.548828 30.345703 C 28.892828 29.955703 30.024969 28.643547 30.417969 28.060547 C 30.810969 27.477547 31.204094 27.572578 31.746094 27.767578 C 32.288094 27.961578 35.19125 29.372062 35.78125 29.664062 C 36.37125 29.956063 36.766062 30.102703 36.914062 30.345703 C 37.062062 30.587703 37.062312 31.754234 36.570312 33.115234 C 36.078313 34.477234 33.717984 35.721672 32.583984 35.888672 C 31.565984 36.037672 30.277281 36.10025 28.863281 35.65625 C 28.006281 35.38625 26.907047 35.028734 25.498047 34.427734 C 19.575047 31.901734 15.706156 26.012047 15.410156 25.623047 C 15.115156 25.234047 13 22.46275 13 19.59375 C 13 16.72475 14.524406 15.314469 15.066406 14.730469 C 15.608406 14.146469 16.248578 14 16.642578 14 z"></path>
                            </svg>
                            </a>
                        </div>
                    </section>

                </div>
            </footer>
            <section className=" bg-color-hitam mt-4 pt-3 border-t-2 border-color-blue ">
                <div className="text-[7px] md:text-[11px] sm:text-[11px] lg:text-[11px] mx-6 flex items-center gap-4">
                    <h3 className="text-color-accent">Home </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fff" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg>
                    <p className="text-color-accent">Anime </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fff" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg>
                    <h3 className="text-color-accent">{truncateWords(anime.data.title, 4)}</h3>
                </div>
            </section>
            
        </div>
    );
};
export default Page;