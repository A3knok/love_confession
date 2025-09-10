const questions = [
  {
    text: "「おはよう！いい天気だね。\n 私に何か話しがあるみたいだけどどうしたの？」",
    options: [
      { text: "大好きです", score: { r: 3, h: 0 }, code: "a1" },
      { text: "結婚してください！", score: { r: 2, h: 2 }, code: "a2" },
      { text: "もう君以外愛せない…", score: { r: 1, h: 1 }, code: "a3" },
      { text: "月がきれいですね", score: { r: 0, h: 3 }, code: "a4" }
    ]
  },
  {
    text: "「驚いた！まさか告白されるなんて！\nじゃあ…私のどこが好きか教えてくれたりする？」",
    options: [
      { text: "一目ぼれです", score: { r: 3, h: 0 }, code: "a1" },
      { text: "ないよ。運命だから。", score: { r: 2, h: 2 }, code: "a2" },
      { text: "いい匂い(ｸﾝｸﾝ)", score: { r: 1, h: 1 }, code: "a3" },
      { text: "耳が喜んで離れたがらぬ声だ", score: { r: 0, h: 3 }, code: "a4" }
    ]
  }
];

const results = {
  mountain_end: {
    title: "富士額End",
    dialogue: "富士額とは付き合えない！丸いおでこが好きなの",
    img: "assets/img/mountain_end.jpg",
    description: "違う断り方なかった？でも仕方ないか。"
  },
  simple_end: {
    title: "友達End",
    dialogue: "ユウスケとは友達のままでいたい。",
    img: "assets/img/simple_end.png",
    description: "友達ならチャンスあるし長期戦だ！"
  },
  novel_end: {
    title: "森鴎外End",
    dialogue: "夏目漱石より森鴎外派なの！",
    img: "assets/img/novel_end.jpg",
    description: "ふむ、鴎外殿に心寄せられるとは。小生には少し寂しきことよ。"
  },
  humor_end: {
    title: "逃走End",
    dialogue: "ム、ムリーーーーーーーーー！",
    img: "assets/img/humor_end.jpg",
    description: "そんな走って逃げなくてもいいのに。照屋さん(泣)"
  }
};

const himekaImages = {
  normal: "assets/img/himeka.png",
  sad: "assets/img/himeka_sad.png"
};