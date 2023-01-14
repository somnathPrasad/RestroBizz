import Head from 'next/head'
import useFoods from '../hooks/useFoods'
import Loading from '../components/Loading'
import Error from '../components/Error'
import FoodCard from '../components/FoodCard'
import { food as foodType } from "../data/foods"
import MenuTopBar from '../components/MenuTopBar'

export default function Home() {
  const { data: foods, isLoading, isError, error } = useFoods();
  return (
    <>
      <Head>
        <title>RestroBizz</title>
        <meta name="description" content="Take your restaurant online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center">
        <MenuTopBar />
        <div className='px-5 mt-20'>
          {isLoading && <Loading />}
          {isError && <Error error={error} />}
          {!isLoading && !isError && foods && foods.map((food: foodType) => <FoodCard key={food.id} food={food} />)}
        </div>
      </main>
    </>
  )
}

