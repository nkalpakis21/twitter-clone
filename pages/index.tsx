
import Sidebar from '@/components/app-bar/Sidebar'
import MainFeed from '@/components/feed/MainFeed'
import Widgets from '@/components/widget/widgets'
import Head from 'next/head'
import Image from 'next/image'


export default function Home({newsResults, whoToFollow}: any) {


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex min-h-screen mx-auto'>
        <Sidebar/>
        <MainFeed />
        <Widgets articles={newsResults.articles} whoToFollow={whoToFollow.results} />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const newsResults = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json')
    .then(result => result.json());

  const whoToFollow = await fetch('https://randomuser.me/api/?results=50')
    .then(result => result.json());

  return {
    props: {
      newsResults,
      whoToFollow,
    }
  }
}