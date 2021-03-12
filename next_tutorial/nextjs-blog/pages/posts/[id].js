import Layout from '../../components/layout'

// Reactコンポーネント
export default function Post() {
  return <Layout>...</Layout>
}

// 必要
export async function getStaticPaths() {
  // idとして取りうる値のリストを返す
}

// 必要
export async function getStaticProps({ params }) {
  // params.idを使用してブログ投稿に必要なデータを取得する
}