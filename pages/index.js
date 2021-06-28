import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import PostCard from '../components/post-card'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {

  return (
    <Layout home title="Let's build something cool together.">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Brent. I'm a software engineer living in Southern Maine. I'm glad you're here.</p>
        <p>This site is a portfolio of my work, but also serves as a blog dedicated primarily to professional interests.</p>
        <p>Look around. Provide constructive feedback. Hit me up on social.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.list}>
          {allPostsData.map(card => {
            return (
            <PostCard {...card} />
            )
          })
        }
        </div>
      </section>
    </Layout>
  )
}