# Pull Request Policy

Pull Request で気をつける点をまとめます。
Pull Request を作成した人もしくはレビューする人は、以下の内容を確認して Pull Request に問題がないか確認してください。

## zenn-cli で実行して正しく動作しているか確認する

Pull Request のコードが正しく動作しているかを zenn-cli を使って動作確認してください。難しい場合は、なるべくテストコードなどでコードの正当性を確認できるようにしてください。

## 誤字脱字や不要な文字が含まれていないか確認する

誤字脱字などには注意しましょう。レビューの際もなるべく発見できるよう努力してください。

## 不要なコードが含まれていないか確認する

不要なコードが含まれていないか確認してください。
もし意図的なモノであった場合は、なるべくその旨をコメントなどに残してください。

**不要なコードの例**

- コメントアウトやログの消し忘れ
- 未使用の変数

## XSS になるようなコードが含まれていないか確認する

XSS になるようなコードが含まれていないか確認してください。

**XSS が発生しやすい例**

- ユーザーから入力された値をHTMLに埋め込む処理
- ユーザーから入力された値から正規表現などで値を取り出す処理
- パッケージのアップデート( 依存関係に XSS が発生している可能性があります )

## モバイル端末での表示が考慮されているか確認する

Pull Request の修正内容にフロントエンドが関わる場合は、モバイル端末などのレスポンシブデザインが正しく動作しているか確認してください。

## パフォーマンスに問題がない確認する

パフォーマンスに影響を与えるような処理がないか確認してください。

**パフォーマンスに問題が発生する例**

- 重い処理をループしている
- キャッシュの設定を忘れる or 間違えている
- 非同期処理にできる部分を非同期処理にしていない

## テストが正しく実装されているか確認する

テストが正しく実装されているか確認してください。特に XSS が発生しそうな処理に対しては、必ずテストを書くようにしてください。

## Pull Reuqest の内容は妥当か確認する

Pull Request の内容が正しく実装されている確認してください。関係が薄い修正が含まれている場合は、別の Pull Request に分けるなどして Pull Request が膨らみすぎないように注意してください。