const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',()=>{
  console.log('ボタンをクリックしました');
  setTimeout(()=>{
    text.textContent = 'ボタンをクリックしました';
    console.log('2秒後に表示を切り替える非同期処理');
  },2000);
});

