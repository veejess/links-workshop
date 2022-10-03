import type {NextPage} from 'next'
import Head from 'next/head'
import LinkEntry from "../components/LinkEntry"
// @ts-ignore
import {links, name} from "/config.json"

const Home: NextPage = () => {
  return (
      <div className="app">
        <Head>
          <title>My Links</title>
          <meta name="description" content={`${name}'s Links`}/>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
        </Head>

        <main>
          <div>
            {name}
          </div>
          {links.map(LinkEntry)}
        </main>
      </div>
  )
}

export default Home
