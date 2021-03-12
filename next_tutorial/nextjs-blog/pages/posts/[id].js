import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

// Reactコンポーネント
export default function Post({ postData }) {
  return (
    <Layout>
      { postData.title }
      <br />
      { postData.id }
      <br />
      { postData.date }
    </Layout>
  )
}

// 必要
export async function getStaticPaths() {
  // idとして取りうる値のリストを返す
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

// 必要
export async function getStaticProps({ params }) {
  // params.idを使用してブログ投稿に必要なデータを取得する
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}