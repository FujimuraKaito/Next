import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

// Reactコンポーネント
export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}


// TS version
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

// JS version
// 必要→本番環境ではビルド時に実行される
// export async function getStaticPaths() {
//   // idとして取りうる値のリストを返す
//   // getAllPostIdsは外部のAPIエンドポイントからデータをフェッチしてきても良い
//   const paths = getAllPostIds()
//   return {
//     paths,
//     // falseにすると404ページに飛ぶ
//     fallback: false
//   }
// }


// TS version
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}

// JS version
// 必要
// export async function getStaticProps({ params }) {
//   // params.idを使用してブログ投稿に必要なデータを取得する
//   const postData = await getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }
