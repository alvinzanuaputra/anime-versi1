import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import NotFound from "@/app/not-found";
import Header from "@/components/Dashboard/Header";

const Page = async ({ params }) => {
  const { keyword } = params;

  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section className="border-t-2 border-color-third">
        <Header />
        <AnimeList api={searchAnime} className="mt-4" />
        {searchAnime && searchAnime.length > 0 && searchAnime[0].someProperty ? (
          <>
            <NotFound />
          </>
        ) : (
          <p className="text-color-dark">...</p>
        )}
      </section>
    </>
  );
};

export default Page;
