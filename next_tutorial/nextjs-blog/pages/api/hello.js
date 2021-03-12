// 簡単なAPIのエンドポイントを作ることができる
export default (req, res) => {
  // 良い使用例: フォーム入力を処理する→安全にサーバーサイドのコードをかける
  // ex.) const email = req.body.email
  res.status(200).json({ text: 'Hello' })
}