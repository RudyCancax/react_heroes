import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroesById } from "../helpers";
import { Tag } from "../components";
import { ArrowLeft } from "react-feather";

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = getHeroesById(id);
  
  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to='/marvel' />;
  }

  const {superhero, alter_ego, first_appearance, publisher, characters} = hero;

  const chars = characters.split(',');

  const heroImagePath = `../public/heroes/${id}.jpg`;

  return (
    <>
      <div className="flex justify-center w-1/3 fixed mt-10">
        <div onClick={onNavigateBack} className="flex justify-center items-center w-1/2 h-full bg-blue-500 hover:bg-blue-700 rounded-full ml-auto hover:cursor-pointer">
          <ArrowLeft className="text-white" />
          <h1 className="text-white px-3 py-1">
            Back
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-white font-bold text-xl my-2"> {superhero}</h1>
        <img src={heroImagePath} alt={alter_ego} className="w-1/5 h-auto" />

        <p className="text-white font-bold my-2">{alter_ego}</p>
        <p className="text-white font-bold my-2">First Appearance: <small>{first_appearance}</small></p>
        <div className="flex flex-wrap justify-center w-full">
          {
            chars.map(character => (
                <Tag key={character} tag={character} className="m-1" />
            ))
          }
        </div>
      </div>



    </>
  )
}
