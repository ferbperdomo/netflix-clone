import { getProducts, Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Plans from '../components/Plans'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'
import useList from '../hooks/useList'
import useSubscription from '../hooks/useSubscription'
import payments from '../lib/stripe'
import { Movie } from '../typings'
import requests from '../utils/requests'

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
  animationMovies: Movie[]
  fantasyMovies: Movie[]
  upcomingMovies: Movie[]
  products: Product[]
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
  animationMovies,
  fantasyMovies,
  upcomingMovies,
  products
}: Props) => {

  const { loading, user } = useAuth()
  const showModal = useRecoilValue(modalState)
  const subscription = useSubscription(user)
  const movie = useRecoilValue(movieState)
  const list = useList(user?.uid)

  if (loading || subscription === null) return null

  if (!subscription) return <Plans products={products} />

  return (
    <div
      className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] 
      lg:h-[140vh] ${showModal && '!h-screen overflow-hidden'}`}>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <main className=' relative pl-4 pb-24 lg:space-y-20 lg:pl-16' >

        <Banner animationMovies={animationMovies} />

        <section className="md:space-y-24">
          {list.length > 0 && <Row title='Mi lista' movies={list} />}
          <Row title="Popular en Netflix" movies={trendingNow} />
          <Row title="Animación" movies={animationMovies} />
          <Row title="Fantasía" movies={fantasyMovies} />
          <Row title="Futuros estrenos" movies={upcomingMovies} />
          <Row title="Películas de miedo" movies={horrorMovies} />
          <Row title="Top" movies={topRated} />
          <Row title="Acción y aventuras" movies={actionMovies} />
          <Row title="Comedias" movies={comedyMovies} />
          <Row title="Romances" movies={romanceMovies} />
          <Row title="Documentales" movies={documentaries} />
        </section>

      </main>
      {showModal && <Modal />}

    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  }).then((res) => res)
    .catch((error) => console.log(error.message))

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    animationMovies,
    fantasyMovies,
    upcomingMovies,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    fetch(requests.fetchAnimationMovies).then((res) => res.json()),
    fetch(requests.fetchFantasyMovies).then((res) => res.json()),
    fetch(requests.fetchUpcomingMovies).then((res) => res.json()),
  ])
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      animationMovies: animationMovies.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      fantasyMovies: fantasyMovies.results,
      documentaries: documentaries.results,
      upcomingMovies: upcomingMovies.results,
      products,
    }
  }
}
