let currentQuestion = 0;
let totalScore = { r: 0, h: 0 };
let selected = [];

//計算結果処理
function calculateResult() {
  let resultKey = "";

  if (selected[0] == "a4" && selected[1] == "a4") {
    resultKey = "novel_end";
  } else if (totalScore.r > totalScore.h) {
    resultKey = "simple_end";
  } else if (totalScore.r < totalScore.h) {
    resultKey = "humor_end";
  } else {
    resultKey = "mountain_end";
  }

  console.log(`${resultKey}`);
  return resultKey;
}

//選択処理
function selectAnswer(ans) {
  console.log(`選択: ${ans.text} (r:${ans.r}, h:${ans.h})`);

  totalScore.r += ans.score.r;
  totalScore.h += ans.score.h;
  selected.push(ans.code);
  currentQuestion++;
}