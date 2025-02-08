import AnimeList from "@/components/AnimeList"
import Button from "@/components/AnimeList/Footer"
import Header from "@/components/AnimeList/Header"
import ReviewList from "@/components/AnimeList/ReviewList"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"
import ShareButton from "@/components/AnimeList/ShareButton"


const Page = async () => {
    let reviewAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
    reviewAnime = reproduce(reviewAnime, 18);
    const topAnime = await getAnimeResponse("top/anime", "limit=18")

    return (
        <div>
            <section>
                <Header title="Top Anime" linkTitle="See All" linkHref="/populer" />
                <ReviewList api={topAnime} />
            </section>
            <section>
                <Header title="Recommedation Anime" linkTitle="See All" linkHref="/populer" />
                <AnimeList api={reviewAnime} />
            </section>
            <footer className="border-t-2 border-color-third pb-6 gap-10 pt-6">
                <div className="flex flex-wrap border-b-2 border-color-third shadow-lg pb-6">
                    <div className="mx-4 lg:flex flex-rows-4">
                        <div className="w-full px-4 mb-2">
                            <h2 className="font-bold text-3xl text-color-accent mb-5 mt-2"
                                style={{
                                    fontStyle: "italic"
                                }}
                            >ZNUAVIN</h2>
                            <p className="text-xs text-color-primary grid mb-16 md:w-1/4 lg:w-1/2">
                                ZNUAVIN, menjadi destinasi utama bagi penggemar anime di Indonesia. Menyajikan list anime, ZNUAVIN berkomitmen memberikan akses tanpa batas kepada para pecinta anime.  ZNUAVIN hadir untuk memenuhi kebutuhan hiburan anime tanpa biaya berlangganan, seperti Netflix, Disney+, HBO, Apple TV+, dan Amazon Prime Video.

                                Kami berupaya memberikan pengalaman untuk melihat anime populer yang memuaskan untuk para penikmat anime di Indonesia. Penting untuk dicatat bahwa ZNUAVIN khusus fokus pada anime dan tidak menyediakan konten film atau serial TV dari Indonesia.

                                Tetap pantau perkembangan website ini, karena kami terus berupaya mengembangkan layanan demi memenuhi kebutuhan penggemar anime di seluruh Indonesia.

                                <span className="font-bold">(Website ini masih berada pada tahap pengembangan).</span></p>
                        </div>
                        <div className="w-full gap-1 px-4 mb-12 md:w-1/5 lg:mr-20">
                            <h3 className="font-bold text-color-primary text-xl mb-5 pt-4">Contact Me</h3>
                            <p className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all"><a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=zanualvin06@gmail.com">zanualvin06@gmail.com</a></p>
                            <p className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all"><a href="https://www.google.com/maps/place/JinuL+garage+spesialis+motor+INJEKSI+sport%26metic/@-7.672191,112.2544065,17z/data=!3m1!4b1!4m6!3m5!1s0x2e786927ab6458cb:0xd1d4dd5964b6f4b4!8m2!3d-7.6721963!4d112.2569814!16s%2Fg%2F11ghfqrpg3?entry=ttu"> Jl. Wedani Kecamatan Ngoro Kabupaten Jombang</a></p>
                            <p className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all"><a href="https://www.google.com/maps/place/Jawa+Timur/@-6.9019615,110.9404378,7z/data=!3m1!4b1!4m6!3m5!1s0x2da393f79feeb5c5:0x1030bfbca7cb850!8m2!3d-7.5360639!4d112.2384017!16zL20vMDF2Zndk?entry=ttu">Jawa Timur</a></p>
                            <p className="text-[13px] pb-8 text-color-accent hover:text-color-primary hover:underline duration-500 transition-all lg:text-[14px]"><a href="https://wa.me/6281217835337">6281217835337</a></p>

                        </div>
                        <div className="w-full px-4 mb-12 pb-8 md:w-1/2 pt-4">
                            <h3 className="font-semibold text-xl text-color-primary mb-5 lg:mr-20">Original Series</h3>
                            <ul className="text-color-accent grid grid-cols-1">
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Apple TV+</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Amazon</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Disney+</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">HBO</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Netflix</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">The CW</li>
                            </ul>
                        </div>
                        <div className="w-full px-4 pb-7 lg:w-1/3 md:w-1/3 pt-4">
                            <h3 className="font-semibold text-xl text-color-primary mb-5">Category</h3>
                            <ul className="text-color-accent grid grid-cols-1">
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Action</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Aventure</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Garde</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Mystery</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Suspense</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Coming Soon</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Movie</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Romance</li>
                                <li className="text-sm inline-block text-color-accent hover:text-color-primary hover:underline duration-500 transition-all">Slice of Life</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="lg:w-full lg:flex flex-cols-1">
                    <div className="justify-items-start pt-1 lg:w-full lg:flex lg:pt-10 lg:justify-between">
                        <h1 className="mx-8 pt-2 text-color-primary text-sm pb-3 border-t-color-accent">
                            Copyright © 2024 by <a href="/"><span className="underline text-color-primary hover:text-color-accent">ZNUAVIN</span></a>. All Rights Reserved.
                        </h1>
                        <div className="ml-8 lg:flex items-end gap-2 flex flex-cols-5 pb-2">
                            <a href="https://youtube.com/@alvinnzett1773"
                                target="_blank"
                                className="w-9 h-9 flex justify-center items-center rounded-lg overflow-hidden border border-color-accent hover:bg-color-hitam hover:border-color-dark duration-500 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffff" className="hover:fill-color-accent duration-500 transition-all" viewBox="0 0 256 256"><path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path></svg>
                            </a>
                            <a href="https://www.instagram.com/znualvin_"
                                target="_blank"
                                className="w-9 h-9 flex justify-center items-center rounded-lg overflow-hidden border border-color-accent hover:bg-color-hitam hover:border-color-dark duration-500 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffff" className="hover:fill-color-accent duration-500 transition-all" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100070957315001"
                                target="_blank"
                                className="w-9 h-9 flex justify-center items-center rounded-lg overflow-hidden border border-color-accent hover:bg-color-hitam hover:border-color-dark duration-500 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffff" className="hover:fill-color-accent duration-500 transition-all" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>
                            </a>

                            <a href="https://t.me/zanuavin"
                                target="_blank"
                                className="w-9 h-9 flex justify-center items-center rounded-lg overflow-hidden border border-color-accent hover:bg-color-hitam hover:border-color-dark duration-500 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffff" className="hover:fill-color-accent duration-500 transition-all" viewBox="0 0 256 256"><path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19Zm-61.14,36L86.15,126.35l-49.6-9.73ZM96,200V152.52l24.79,21.74Zm87.53,8L100.85,135.5l119-85.29Z"></path></svg>
                            </a>

                            <section>
                                <ShareButton />
                            </section>

                            <section >
                                <Button />
                            </section>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Page