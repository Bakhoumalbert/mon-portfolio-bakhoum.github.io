import { PointBleu } from "../../typography/particules/pointBleu"

interface educationInterface {
  titleDiplome: string;
  begin: string;
  end: string;
  diplome: string;
}

export const Education: React.FC<educationInterface> = ({begin, end, diplome, titleDiplome}) => {
  return (
    <div className="flex flex-row pb-6">
      <PointBleu />
        <div className="flex flex-col space-y-2">
          <h3 className="text-base md:text-xl text-[44566C] font-ttl cursor-pointer">{titleDiplome}</h3>
          <p className="text-[#8697A8] text-sm md:text-lg">{`${begin} - ${end}`}</p>
          <p className="text-[#5F6F81] text-sm md:text-lg">{diplome}</p>
        </div>
    </div>
  )
}
