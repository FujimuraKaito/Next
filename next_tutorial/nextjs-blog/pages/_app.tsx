// global.cssはimportするだけで良い？
import '../styles/global.css'
import { AppProps } from 'next/app'
// import { Component } from 'react'

/**
 * 全てのページに共通するトップレベルのコンポーネント
 * このファイルを追加時にはサーバーを再起動
 * ページ間の共通レイアウトを持たせることができる
 * 共通のstateを持つことができる
 * グローバルなCSSを定義できる
 */


// JS version
// function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
// export default App

// TS version
export default function App({ Component, pageProps }) {
  return <Component {...pageProps } />
}
