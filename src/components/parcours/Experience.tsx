import { PointBleu } from "../../typography/particules/pointBleu"

interface experienceInterface {
  titleExperience: string;
  begin: string;
  end: string;
  experiences: string;
}

export const Experience: React.FC<experienceInterface> = ({titleExperience, begin, end, experiences}) => {
  return (
    <div className="flex flex-row pb-6">
      <PointBleu />
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-ttl cursor-pointer">{titleExperience}</h3>
          <p className="text-[#8697A8] text-sm md:text-lg">{`${begin} - ${end}`}</p>
          <p className="text-[#5F6F81] text-sm md:text-lg">{experiences}</p>
        </div>
    </div>
  )
}
