# 要件定義

| 項目 | 内容 |
| --- | --- |
| Rank | 64 |
| Domain | OBSStreaming |
| Idea No. | 2 |
| Repository | obs-onboarding-preset-manager |
| 主な公開先 | GitHub Release / BOOTH |

## 背景

毎回の設定や入力が重複し、作業開始までに時間がかかる。

## 目的

初期設定、用途別テンプレート、頻出設定をまとめる。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 必須要件

- preset setup を複数件まとめて検証できる。
- required fields: `id`, `title`, `presetName`, `obsVersion`, `profilePath`, `owner`。
- warning field: `rollbackPlan`。
- 代表シナリオ、QCDS metrics、docs ZIP、release evidence を再生成できる。
