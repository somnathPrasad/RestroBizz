import Image from "next/image";
import { food } from "../data/foods";

const AddButton = () => {
    return (
        <button className="bg-green-400 text-center rounded-md px-3 py-3 w-full">
            <p className="text-xl font-medium">ADD</p>
        </button>
    )
}
const RemoveButton = () => {
    return (
        <div className="bg-red-400 text-center rounded-md px-3 py-3 w-full">
            <p className="text-xl font-medium">REMOVE</p>
        </div>
    )
}

export default function FoodCard({ food }: { food: food }) {
    return (
        <div className="bg-white my-5 py-3 px-3 rounded-md border border-slate-300 shadow-lg">
            <div
                className="grid grid-cols-3 "
            >
                <div className="rounded-md mr-5 w-full h-full">
                    <Image
                        alt={food.name}
                        src={food.image}
                        width={150}
                        height={150}
                        className="rounded-md"
                    />
                </div>
                <div className="col-span-2 px-5 flex flex-col justify-between">
                    <div>
                        <p className="text-2xl font-medium">{food.name}</p>
                        <p className="line-clamp-2">{food.description}</p>
                    </div>
                    <p className="text-2xl font-medium">&#x20b9; {food.price}</p>
                </div>
            </div>
            <div className="flex flex-row mt-2 gap-2">
                <RemoveButton />
                <AddButton />
            </div>
        </div>
    )
}