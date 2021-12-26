import Head from 'next/head'
import Image from 'next/image'

import { Header, Feed, Modal } from '../components'


export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram-Next</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>

      {/* Header */}
        <Header/>
      {/* Feed */}
        <Feed/>
      {/* Modal */}
        <Modal/>
    </div>
  )
}
