export const productProfile = {
  "repository": "obs-onboarding-preset-manager",
  "title": "導入・プリセット管理",
  "domain": "OBSStreaming",
  "hostApp": null,
  "rank": 64,
  "tier": "P2",
  "ideaNo": 2,
  "overview": "初期設定、用途別テンプレート、頻出設定をまとめる。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "毎回の設定や入力が重複し、作業開始までに時間がかかる。",
  "differentiation": "配信前確認、録画証跡、音声・画面状態を日本語UIで一括管理する。 日本語の用途別プリセットと実行履歴を残す。",
  "publish": "GitHub Release / BOOTH",
  "surface": "OBSStreaming product spec + CLI validation core",
  "entity": "preset setup",
  "requiredFields": [
    "id",
    "title",
    "presetName",
    "obsVersion",
    "profilePath",
    "owner"
  ],
  "warningField": "rollbackPlan",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/project-portfolio-generator",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
