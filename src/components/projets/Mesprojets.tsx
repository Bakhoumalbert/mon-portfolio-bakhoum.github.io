
interface featurecardInterface {
  title: string;
  description: string;
  image: string;
  className?: string;
  datetm?: string;
  mois?: string;
}

export const Mesprojets: React.FC<featurecardInterface> = ({title,description, image,className,datetm, mois}) => {
  return (
    <div className="h-auto w-auto flex flex-col ">
      <span className="relative top-[68px] w-1/3 text-white bg-orange-400 rounded-tl-2xl rounded-br-2xl">
        <span className="py-2 flex flex-col justify-center items-center">
        <h2 className="text-white text-xl">{datetm}</h2>
        <p className="truncate">{mois}</p>
        </span>
      </span>
      <div className="h-2/3">
        <img src={image} alt="project picture" className={`rounded-t-2xl border-t border-collapse object-cover ${className || ""}`} />
      </div>
      <div className="h-1/3 bg-[#F5F8F9] p-6 rounded-b-2xl">
        <h2>{title}</h2>
        <p className="text-[#5F6F81]">{description}</p>
      </div>
    </div>
  )
}
