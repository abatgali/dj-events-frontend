import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'
import Showcase from '@/components/Showcase'
import { useRouter } from 'next/router'


export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm, events',
}