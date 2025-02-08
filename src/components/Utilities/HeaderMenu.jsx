import 'animate.css/animate.min.css';

const HeaderMenu = ({ title }) =>
{
    return (
        < div> 
        <div className = "border-t-2 border-color-third flex justify-center items-center p-4 animate__animated animate__fadeInDown animate__delay-2s">
            <span className="text-color-accent flex gap-4 lg:text-2xl font-bold ">|<h3 className = "lg:text-2xl text-color-primary">{title}</h3>|</span>
        </div>
        </div>
    )
}

export default HeaderMenu