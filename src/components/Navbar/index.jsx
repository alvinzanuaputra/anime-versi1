import Link from 'next/link';
import InputSearch from './InputSearch';
import UserActionButton from './UserActionButton';
import 'animate.css/animate.min.css';

const Navbar = () => {
    return (
        <header className="bg-color-third border-b-2 shadow-lg py-3 px-4 lg:py-4 animate__animated animate__slideInDown animate__delay-2s">
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-2">
                <div className="animate__animated animate__slideInDown animate__delay-1s">
                    <Link href="/" className="text-2xl text-color-accent font-mono">
                        ZNUAVIN ANIME
                    </Link>
                </div>
                <InputSearch />
                <UserActionButton />
            </div>
        </header>
    );
};

export default Navbar;
