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
    <Layout home title="<BrentDanley />">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Brent. I'm a software engineer living in Southern Maine. I'm glad you're here.</p>
        <p>This site is a portfolio of my work, but also serves as a blog dedicated primarily to professional interests.</p>
        <p>The intended audience is prospective employers and any front-end developer seeking advice, tips, how-tos, and best practices. This site is for you, but it also gives me a platform to develop and improve skills I think are important but that I don't do as a regular part of my job. Showing someone how to do something is a great research motivator and a tool for me to guage my own level of knowledge in the myriad topics covered.</p>
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