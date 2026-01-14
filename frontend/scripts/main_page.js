document.addEventListener('DOMContentLoaded', () => {

  // --- 1. 鼠标交互视差效果 ---
  const chef = document.querySelector('.chef-cat');
  const dino = document.querySelector('.hungry-dino');

  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    if(chef) chef.style.transform = `translate(${x}px, ${y}px)`;
    if(dino) dino.style.transform = `translate(${-x}px, ${-y}px) rotate(${x/2}deg)`;
  });

  // --- 2. 背景食物雨动画 ---
  const container = document.getElementById('food-rain-container');
  const foods = ['🍔', '🍟', '🍕', '🌭', '🍗', '🍦', '🍩', '🍪', '⭐', '❤️'];

  function createFood() {
    if (!container) return;

    const el = document.createElement('div');
    el.classList.add('food-emoji'); // 对应 CSS 类名
    el.innerText = foods[Math.floor(Math.random() * foods.length)];
    
    const isLeft = Math.random() > 0.5;
    let randomLeft;

    if (isLeft) {
        randomLeft = Math.random() * 17;
    } else {
        randomLeft = 80 + Math.random() * 13;
    }
    
    el.style.left = randomLeft + 'vw';

    // 随机大小：20px 到 40px
    el.style.fontSize = (Math.random() * 20 + 20) + 'px';
    
    // 随机动画时长：4秒 到 9秒
    const duration = Math.random() * 5 + 4;
    el.style.animationDuration = duration + 's';

    container.appendChild(el);

    // 动画结束后移除
    setTimeout(() => {
      el.remove();
    }, duration * 1000);
  }

  // 启动生成循环
  setInterval(createFood, 800);
});