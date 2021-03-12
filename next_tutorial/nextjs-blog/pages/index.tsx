import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

// getStaticPropsでreturnした値を受け取る
export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={utilStyles.headingMd}>…</section>
      {/* クラスを2つ指定する */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

/**
 * これはサーバーサイドで実行される
 * 本番環境ではビルド時にのみ実行される
 * そのためクエリパラメータやHTTPヘッダなどは利用することが出来ない
 * 
 * ページからのみexportできる
 */ 

 // TS version
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


// JS version
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     // propsとしてデータを返す
//     props: {
//       allPostsData
//     }
//   }
// }

/**
 * SSRでリクエスト時にデータを取得する必要がある場合にはgetServerSidePropsを使う
 */
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     }
//   }
// }

/**
 * SWRというReactフックもある
 * クライアント側でデータを取得する場合におすすめ
 */