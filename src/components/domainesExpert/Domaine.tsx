import { Expertise } from "./Expertise"

export const Domaine = () => {
  return (
    <div><div className="mt-10">
    <h2 className="text-2xl">Mon Expertise IT : Technologies des Informations</h2>
    <div className="grid md:grid-cols-2 gap-6 py-10">
      <Expertise />
      <Expertise />
      <Expertise />
      <Expertise />
      <Expertise />
    </div>
  </div></div>
  )
}
