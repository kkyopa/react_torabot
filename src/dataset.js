const defaultDataset = {
  init: {
    answers: [
      { content: "仕事を依頼したい", nextId: "job_offer" },
      {
        content: "Webエンジニアについて知りたい",
        nextId: "consultant",
      },
      { content: "ダーツについて知りたい", nextId: "community" },
      { content: "キスしたい", nextId: "dating" },
    ],
    question: "こんにちは！川田京助です。ご用件はなんでしょうか？",
  },
  job_offer: {
    answers: [
      { content: "Webサイトを制作してほしい", nextId: "website" },
      { content: "Webアプリを開発してほしい", nextId: "webapp" },
      { content: "自動化ツールを作ってほしい", nextId: "automation_tool" },
      { content: "その他", nextId: "other_jobs" },
    ],
    question: "どのようなお仕事でしょうか？",
  },
  website: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "Webサイト細作についてですね。コチラからお問い合わせできます。",
  },
  webapp: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
  },
  automation_tool: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "自動化ツール開発についてですね。コチラからお問い合わせできます。",
  },
  other_jobs: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "その他についてですね。コチラからお問い合わせできます。",
  },
  consultant: {
    answers: [
      {
        content: "ポートフォリオを見たい",
        nextId: "http://kyosukekawada.com/",
      },
      { content: "経歴を知りたい", nextId: "community" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "今まで作成した作品や技術スタック、過去にアサインしたプロジェクトなど参照できます。また、未経験からWebエンジニアになるためにどうすればいいのかも相談に乗っています。",
  },
  community: {
    answers: [
      { content: "どんな活動をしているの？", nextId: "community_activity" },
      {
        content: "一緒にダーツをして見たい",
        nextId: "https://torahack.web.app/community/",
      },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "2020年3月から学習コミュニティを始めました！🎉Webエンジニアへの転職を目指す人向けに、プログラミングを教えたりキャリアの相談に乗っています。",
  },
  community_activity: {
    answers: [
      {
        content: "さらに詳細を知りたい",
        nextId: "https://youtu.be/tIzE7hUDbBM",
      },
      {
        content: "コミュニティに参加したい",
        nextId: "https://torahack.web.app/community/",
      },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "フロントエンド向けの教材の提供、キャリアや勉強法に関するメルマガの配信、週1のオンライン作業会などを開催しています！\n詳細はYouTube動画で紹介しています。",
  },
  dating: {
    answers: [
      { content: "DMする", nextId: "https://twitter.com/kazumons" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "あなたはえっちですね~まぁいいでしょうDM下さい!",
  },
};

export default defaultDataset;
