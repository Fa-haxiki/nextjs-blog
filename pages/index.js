import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>我 === 你爹</p>
        <Link href="/posts/first-post">
          <a>叫爸爸👨</a>
        </Link>
      </section>
    </Layout>
  )
}
