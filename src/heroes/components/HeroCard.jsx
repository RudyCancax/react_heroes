import { Link } from 'react-router-dom';

export const HeroCard = ( { hero }) => {
    const { id, superhero} = hero;
    const heroImagePath = `../public/heroes/${id}.jpg`;

    return (
        <Link to={`/hero/${id}`} 
        className="
            overflow-hidden rounded-lg shadow-lg 
            w-1/6 h-fit 
            bg-slate-500 m-2 
            hover:bg-slate-700 hover:cursor-pointer hover:ring-2 hover:ring-white hover:underline">
            <img alt="Placeholder" className="block h-auto w-full" src={heroImagePath} />

            <header className="flex-col items-center leading-tight p-2">
                {/* <small className="text-grey-darker text-sm ml-1">
                    {first_appearance}
                </small> */}
                <h1 className="text-center text-white font-bold">
                    {superhero}
                </h1>
                <h1 className="text-lg">
                </h1>
            </header>
        </Link>
    )
}
