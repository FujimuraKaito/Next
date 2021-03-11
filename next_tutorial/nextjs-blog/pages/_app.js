import '../styles/global.css'
// 全てのページに共通するトップレベルのコンポーネント
// このファイルを追加時にはサーバーを再起動

export default function App({ Component, pageProps }) {
  return <Component {...pageProps } />
}
