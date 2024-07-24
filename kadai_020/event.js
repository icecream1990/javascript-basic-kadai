
// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// テキストの要素を取得
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});