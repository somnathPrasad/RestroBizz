import Image from "next/image";
import { food } from "../data/foods";

const AddButton = () => {
    return (
        <button className="w-full px-3 py-3 text-center bg-green-400 rounded-md">
            <p className="text-xl font-medium">ADD</p>
        </button>
    )
}

const RemoveButton = () => {
    return (
        <div className="w-full px-3 py-3 text-center bg-red-400 rounded-md">
            <p className="text-xl font-medium">REMOVE</p>
        </div>
    )
}

export default function FoodCard({ food }: { food: food }) {
    console.log(food)
    return (
        <div className="px-3 py-3 my-5 bg-white border rounded-md shadow-lg border-slate-300">
            <div
                className="grid grid-cols-3 "
            >
                <div className="w-full h-full mr-5 rounded-md">
                    {food.image &&
                        <Image
                            alt={food.name}
                            src={food.image}
                            width={150}
                            height={150}
                            className="rounded-md"
                        />
                    }
                </div>
                <div className="flex flex-col justify-between col-span-2 px-5">
                    <div>
                        <p className="text-2xl font-medium">{food.title}</p>
                        <p className="line-clamp-2">{food.description}</p>
                    </div>
                    <p className="text-2xl font-medium">&#x20b9; {food.price}</p>
                </div>
            </div>
            <div className="flex flex-row gap-2 mt-2">
                <RemoveButton />
                <AddButton />
            </div>
        </div>
    )
}