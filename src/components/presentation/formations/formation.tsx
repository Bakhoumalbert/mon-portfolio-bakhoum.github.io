import { formationFieldType } from "../../../types/formation-fields"


export const Formation = ({name ,description}: formationFieldType) => {
    const desc = (
        <p>
            {
                description.map((desc: string, index: number) => (
                    <>{index === description.length -1 ? ` ${desc}` : ` ${desc} |`}</>
                ))
            }
        </p>
    )
    return (
        <div className=" pl-14 md:pl-20 flex flex-col space-x-2">
            <div className="flex flex-row items-center space-x-3">
                <p className="relative w-5 h-3 items-center justify-center">
                    <span className="absolute w-full h-full bg-blue-600"></span>
                </p>
                <strong className="flex flex-row space-x-3">{name} : </strong>
            </div>
            <div>
                <p className="flex flex-row pl-10 space-x-3">
                <p>-</p>
                <p> {desc}</p>
                </p>
            </div>
        </div>
    )
}
