import Error from '@/components/Error';
import Loading from '@/components/Loading';
import { useGetRestaurants } from '@/hooks/useRestaurant'
import Head from 'next/head'
import Link from 'next/link';
import MenuTopBar from '../components/MenuTopBar'

const RestaurantCard = ({ id, title }: { id: string; title: string }) => {
  return <Link href={`/restaurants/${id}`} className="border bg-green-900 rounded-md text-2xl text-white w-full my-1 py-2 shadow-2xl">
    <h1 className='text-center'>{title}</h1>
  </Link>
}

export default function Home() {

  const { data: restaurants, isLoading, isError } = useGetRestaurants();

  return (
    <>
      <Head>
        <title>RestroBizz</title>
        <meta name="description" content="Take your restaurant online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center">
        <MenuTopBar title='Restro Bizz' />
        {isError && <Error error={"Something went wrong"} />}
        {isLoading && <Loading />}
        <div className="mt-32 px-5 w-full items-center justify-center flex flex-col md:grid md:grid-cols-4 md:gap-2">
          {!isError && !isLoading && restaurants.map(({ title, id }: any) =>
            <RestaurantCard key={id} id={id} title={title} />
          )}
        </div>
      </main>
    </>
  )
}

