# Project Management Dashboard (Next.js & React Context API)

メンターより提供されたダッシュボードのデモサイトをNext.jsで再現し、さらにバックエンドのデータ永続化層を独自に改善したポートフォリオです。

## 🚀 プロジェクトの概要

本プロジェクトは、Next.jsとReact Context APIを用いた状態管理、およびWeb APIの統合を目的としたタスク管理ダッシュボードです。

### 開発の背景と目的
- **課題の再現**: 提供されたデモサイトのUI/UXおよび機能をNext.js(TypeScript)で再現し、保守性の高いコンポーネント設計を行う。
- **技術的挑戦**: `features` ベースのディレクトリ設計、React Context APIを用いた効率的な状態管理の実装。
- **課題解決（独自改善）**: 
  初期の提供コードではAPIのデータがメモリ保持のみで、デプロイ環境で永続化されない課題がありました。そのため、**Prisma + PostgreSQL**を導入し、実運用可能な構成へ刷新しました。

## 🔗 リンク
- **デモサイト**: https://0400-next-context-api.vercel.app/
- **元となった課題デモ**: https://next-context-api.netlify.app/
- **API仕様書 (Swagger)**: https://next-context-api.netlify.app/api/v1/spec

## ✨ 主な機能
- **ダッシュボード**: Chart.jsを用いたプロジェクト進捗状況の可視化。
- **タスク管理**: プロジェクト別タスク一覧。追加・削除・編集が可能。
- **プロジェクト管理**: 進行中のプロジェクト一覧。

## 🛠 使用技術

### Frontend
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **State Management**: React Context API
- **UI Libraries**: Tailwind CSS, Chart.js, Axios

### Backend & Database (独自拡張)
- **ORM**: Prisma
- **Database**: PostgreSQL
- **API**: Next.js Route Handlers 

## 💡 独自に工夫・改善した点

### 1. データ永続化層の刷新 (Prisma導入)
元々の課題ではデータが揮発性だったため、自ら**Prisma ORM**を選定・導入。`schema.prisma` の定義からマイグレーション、シードデータの作成まで一貫して行い、アプリケーションの信頼性を向上させました。

### 2. 関心事の分離を意識したディレクトリ設計
`features` ディレクトリを導入し、`chart`, `projects`, `tasks` ごとに `components`, `hooks`, `repository`, `context` をカプセル化しました。これにより、機能追加時の影響範囲を限定し、保守性の高いコードを実現しています。

### 3. 責務を意識したコンポーネント設計
特に汎用性の高いコンポーネント(InputField.tsx,Pagination.tsxなど)は渡すPropsやどこまで状態を管理させるかなど、使う側を意識してコンポーネントを設計しました。

## 📝 未実装・今後の課題
- [ ] ログイン機能
- [ ] インフォメーション詳細画面
- [ ] 通知詳細画面
- [ ] プロジェクト追加機能
- [ ] プロジェクト編集機能
- [ ] 進捗グラフの値が動的ではない

## 🔥 今後挑戦したいこと
- モダンなエコシステムの導入: プロダクトの保守性、品質、開発スピードをさらに向上させるため、以下のライブラリの学習・実装に取り組みたいと考えています。
  - フォーム管理・バリデーション: React-hook-form, Zod
  - 状態管理・データフェッチ: Zustand, TanStack Query
  - 認証: Auth.js (NextAuth.js)
- インフラの拡張: 現在の Vercel だけでなく、AWS を用いたデプロイや環境構築に挑戦し、フルスタックなスキルを磨きたいです。

## 📂 ディレクトリ構成（主要部分）
```text
.
├── app/
│   ├── api/v1/     # Prismaを用いた永続化対応済みのAPIルート
│   ├── components/ # 共通UIコンポーネント
│   ├── context/    # グローバルな状態管理
│   ├── projects/   # プロジェクト関連ページ
│   └── tasks/      # タスク関連ページ
├── features/       # ドメインごとの機能モジュール
│   ├── chart/      # グラフ描画ロジック
│   ├── projects/   # プロジェクト管理
│   └── tasks/      # タスク管理
├── prisma/         # DBスキーマ定義・マイグレーション
└── lib/            # Prisma Client
