document.addEventListener('DOMContentLoaded', function() {
  init();
});

function init() {
  console.log('🔧 初期化処理開始');
  showScreen('start-screen');

  const startBtn = document.querySelector('#start-screen .btn');
  startBtn.addEventListener('click', startGame);
  console.log('🔧 初期化処理完了');
}

function startGame() {
  console.log('🎮 ゲーム開始');
  showScreen('quiz-screen');
  setHimekaImage('quiz-screen', 'normal');
  showQuestion(currentQuestion);
}

function showScreen(screenId) {
  console.log(`🖥️ 画面切り替え: ${screenId}`);
  const screens = ['start-screen', 'quiz-screen', 'dialog-screen', 'result-screen']

  screens.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = (id === screenId) ? 'block' : 'none';
      console.log(`  ${id}: ${id === screenId ? '表示' : '非表示'}`); 
    } else {
      console.warn(`⚠️ 要素が見つかりません: ${id}`);
    }
  });
}

//質問画面表示
function showQuestion(index) {
  console.log(`❓ 質問${index + 1}を表示中`);

  const questionElement = document.querySelector('.question-text');
  const container = document.querySelector('.options-container');
  
  if (!questionElement) {
    console.error('❌ .question-text 要素が見つかりません！');
    return;
  }
  
  if (!container) {
    console.error('❌ #options-container 要素が見つかりません！');
    return;
  }

  const question = questions[index];

  typeText(questionElement, question.text);

  // document.querySelector('.question-text').textContent = question.text;

  // const container = document.querySelector('.options-container');
  container.innerHTML = "";
  question.options.forEach((option, i) => {
    const button = document.createElement('button');
    button.className = "option-btn";
    button.textContent = option.text;

    button.addEventListener('click', () => {
      handleAnswer(option);
    });

    container.appendChild(button);
  });
  
  console.log(`質問${index + 1}を表示しました`);
}

function typeText(element, text) {
  element.innerHTML = '';
  element.classList.add('typing-cursor');

  let i = 0;
  const timer = setInterval(() => {
    if (text[i] === "\n") {
      element.innerHTML += "<br>";
    } else {
      element.innerHTML += text[i];
    }
    i++;

    if (i >= text.length) {
      clearInterval(timer);
      element.classList.remove('typing-cursor');
    }
  }, 100);
}

function setHimekaImage(screenId, imageType) {
  const screen = document.getElementById(screenId);
  const himekaImg = screen.querySelector('.himeka-img');

  if(himekaImg && himekaImages[imageType]) {
    himekaImg.src = himekaImages[imageType];
    himekaImg.alt = 'ヒメカ';
    himekaImg.style.display = 'block';
  }
}

function handleAnswer(selectOption) {
  console.log('💭 回答処理:', selectOption.text);
  selectAnswer(selectOption);

  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showDialogScreen();
  }
}

function showDialogScreen() {
  console.log('💬 会話画面表示');
  showScreen('dialog-screen');
  setHimekaImage('dialog-screen', 'sad');

  const resultKey = calculateResult();
  const resultData = results[resultKey];

  document.querySelector('.dialog-text').textContent = resultData.dialogue;

  //6秒後に結果画面表示
  setTimeout(() => {
    showResultScreen(resultKey);
  }, 6000);
}

function showResultScreen(resultKey) {
  console.log('🏆 結果画面表示:', resultKey);
  showScreen('result-screen');

  const resultData = results[resultKey];

  document.getElementById('result-title').textContent = resultData.title;
  document.querySelector('.result-img').src = resultData.img;
  document.querySelector('.result-description').textContent = resultData.description;

  const restartBtn = document.querySelector('.restart-btn');
  if (restartBtn) {
    restartBtn.onclick = () => {
      console.log('リスタートボタンがクリックされました')
      location.reload();
    };
    console.log('リスタート機能が正常に設定されました');
  } else {
    console.error('リスタートボタンが見つかりません');
  }
}