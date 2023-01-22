import Error from "@/components/Error";
import Loading from "@/components/Loading";
import MenuTopBar from "@/components/MenuTopBar";
import useFoods from "@/hooks/useFoods";
import { food as foodType } from "@/data/foods"
import FoodCard from "@/components/FoodCard";
import { useRouter } from "next/router";
import Head from "next/head";
import { useGetRestaurantInfo } from "@/hooks/useRestaurant";

export default function Restaurant() {
    const { id } = useRouter().query;
    const { data: foods, isLoading, isError, error } = useFoods(id);
    const { data: info } = useGetRestaurantInfo(id);
    return (
        <>
            <Head>
                <title>{info ? info.title : "RESTROBIZZ"}</title>
                <meta name="description" content="Take your restaurant online" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center">
                <MenuTopBar />
                <div className='grid-cols-3 gap-3 px-5 mt-24 md:px-20 md:grid'>
                    {isLoading && <Loading />}
                    {isError && <Error error={error} />}
                    {!isLoading && !isError && foods.length === 0 && <div>No items in this menu yet.</div>}
                    {!isLoading && !isError && foods && foods.map((food: foodType) => <FoodCard key={food.id} food={food} />)}
                </div>
            </main>
        </>
    )
}