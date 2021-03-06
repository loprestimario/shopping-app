import type { NextPage } from 'next'
import Head from 'next/head'

const Blog: NextPage = () => {
  return (
    <div className="home-page">
      <Head>
        <title>Blog Page</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>Blog page</div>
    </div>
  )
}

export default Blog