## Getting Started

First, run the development server:

```bash
yarn dev
```


## Commit Message Format

### コミットコメントを残す理由
- コミットコメントは仕様の変更履歴。過去の仕様の変更敬意を残すためにも、コミットコメントを残すことが重要。
- レビュアーが何に対する変更なのかわかりやすくすることで、レビューコストを減らす。

というように色々とメリットがあるので、個人開発の時もコミット単位やコミットメッセージをちゃんと書くようにする。

### コメントのフォーマット

JIRAを使っているならチケット番号を書くと勝手にリンクしてくれるので便利。
今回はそこまでやるつもりないのでやらない。

```bash
<Prefix> : 修正内容概要

修正した内容の細かい説明
```

#### Prefix
[Angular.js/DEVELOPERS.md](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type)を参考に

```bash
feat: A new feature
fix: A bug fix
docs: Documentation only changes
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf: A code change that improves performance
test: Adding missing or correcting existing tests
chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
test: Adding missing or correcting existing tests
ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
```

適切な単位でコミットを着くことにつながる。

### コミットをする際のルール・補足

- 基本的にtest,buildは通る状態でコミットをする。
  - ただし、これはpushする場合。ローカルではどうでもいい。
  - 整形してからpush
- コミットメッセージは基本的に英語で書く。
  - 表現が難しい場合は日本語でもいい。

## ブランチのルール
github flowを採用する。

### ブランチの種類
- master
- develop
- feature/xxx
- release/YYYYMMDD
- hotfix/xxx
- chore/xxx

### ブランチの役割
- master
  - 運用中の本番環境
  - 本番環境へのデプロイはmasterからのみ
- develop
  - 開発環境
- feature/xxx
  - 機能の追加
  - developからブランチを切る。
  - developにマージする。
- release/YYYYMMDD
  - リリース
  - developからブランチを切る。
  - masterにマージする。
- hotfix/xxx
  - リリース後のバグ修正
  - masterからブランチを切る。
  - masterにマージする。
  - developにマージする。
- chore/xxx
  - チューニングやリファクタリングなど軽微な修正
  - developからブランチを切る。
  - developにマージする。

## Pull Requestのルール
- 基本的には1人での開発なので、Pull Requestは基本的には必要ない。
- このプロジェクトをフォークして使ったり、他の人と開発する場合はPull Requestを使うことになるのでそのとき考える。