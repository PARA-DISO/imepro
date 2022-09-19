const fadeinWatch = (className,offset = 0) => {
  var targets = document.getElementsByClassName(className);
  var idx = 0;
  // 要素の出現監視
  const watching = async () => {
    let pos = targets[idx]?.getBoundingClientRect().top;
    //  監視終了
    if (!pos) {
      window.onscroll = null;
    } else if (window.innerHeight - pos > offset) {
      targets[idx].classList.add("fadein_shown");
      idx++;
      // 再帰処理
      watching();
    }
  }
  // 
  watching();
  // スクロール時確認
  window.onscroll = () => {
    watching();
  }
}
window.onload = () => {
  fadeinWatch("fadein_target", window.innerHeight  / 4);
}
