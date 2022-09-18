import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Beomseok Ko</title>
      </Head>

      <section>
        <p className={homeStyles.headingMd}> 
          [Beomseok Ko Introduction]
        </p>
        <p className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
          (This is a website)
        </p>
        <section>
          <h2 className={homeStyles.headingLg}>Blog</h2>
          <ul className={homeStyles.list}>

          </ul>
        </section>
      </section>
    </div>
  )
}

export default Home
