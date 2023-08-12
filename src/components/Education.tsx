import { PointBleu } from "../typography/particules/pointBleu"

export const Education = () => {
  return (
    <div className="flex flex-row pb-6">
      <PointBleu />
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl text-[44566C] font-ttl cursor-pointer">Administration Réseaux</h3>
          <p className="text-[#8697A8]">2021 - 2023</p>
          <p className="text-[#5F6F81]">Licence validée</p>
        </div>
    </div>
  )
}
