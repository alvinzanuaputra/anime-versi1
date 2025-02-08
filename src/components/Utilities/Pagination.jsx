import { ArrowArcLeft, ArrowArcRight, CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";
import 'animate.css/animate.min.css';

const Pagination = ({ page, lastPage, setPage}) => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const backToMain = () => {
        setPage(1);
    }

    const handleGotoearlypage = () => {
        setPage(1); // Mengubah ke halaman pertama
        scrollTop();
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1);
        scrollTop();
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1);
        scrollTop();
    }

    const handleGotolastpage = () => {
        setPage(lastPage); // Mengubah ke halaman terakhir
        scrollTop();
    }

    return (
        
        <div className="border-t-2 border-color-third mx-6 flex justify-center items-center pt-4 gap-4 pb-8 text-color-primary sm:flex flex-no-wrap animate__animated animate__slideInLeft  animate__delay-1.5s">
            <button onClick={handleGotoearlypage} className="px-2 rounded border border-color-primary underline transition-all hover:bg-color-accent hover:border-color-dark hover:text-color-dark duration-500">
                        <ArrowArcLeft size={26} />
            </button>

            {page <= 1 ? null :
                <button onClick={handlePrevPage} className="px-2 rounded border border-color-primary underline transition-all hover:bg-color-accent hover:border-color-dark hover:text-color-dark duration-500" style={{ marginRight: '10px' }}>
                    <CaretDoubleLeft size={25} />
                </button>
            }
            <p className="text-color-accent text-base flex items-center gap-2">
                <span className="text-color-accent ">{page}</span>
                <span className="mx-1 text-color-primary"> Of </span>
                <span className="text-color-accent">{lastPage}</span>
            </p>

            {page >= lastPage ? null :
                <button onClick={handleNextPage} className="px-2 rounded border border-color-primary underline transition-all hover:bg-color-accent hover:border-color-dark hover:text-color-dark duration-500" style={{ marginLeft: '10px' }}>
                    <CaretDoubleRight size={25} />
                </button>
            }

            <button onClick={handleGotolastpage} className="px-2 rounded border border-color-primary underline transition-all hover:bg-color-accent hover:border-color-dark hover:text-color-dark duration-500 sm:flex flex-no-wrap" >
            <ArrowArcRight size={26} />
            </button>
        </div>

        
    )
}

export default Pagination;
