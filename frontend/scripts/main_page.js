document.addEventListener('DOMContentLoaded', () => {
    
  // --- 1. 鼠标交互视差效果 (Parallax) ---
  const chef = document.querySelector('.chef-cat');
  const dino = document.querySelector('.hungry-dino');
  
  document.addEventListener('mousemove', (e) => {
    // 计算鼠标相对于屏幕中心的位置
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    // 左侧小厨师：跟随移动（或者反向移动产生景深感）
    if(chef) {
      chef.style.transform = `translate(${x}px, ${y}px)`;
    }
    
    // 右侧小恐龙：看着鼠标移动，并稍微旋转身体
    if(dino) {
      // translate 是位移，rotate 是稍微转身
      dino.style.transform = `translate(${-x}px, ${-y}px) rotate(${x/2}deg)`;
    }
  });

  // --- 2. 随机生成背景食物粒子 (Food Rain) ---
  const container = document.getElementById('food-rain-container');
  const foods = ['🍔', '🍟', '🍕', '🌭', '🍗', '🍦', '🍩', '🍪', '⭐', '❤️'];

  function createFood() {
    if (!container) return; // 防止找不到容器报错

    const el = document.createElement('div');
    el.classList.add('food-particle');
    el.innerText = foods[Math.floor(Math.random() * foods.length)];
    
    // 随机位置逻辑：
    let leftPos;
    if (Math.random() > 0.5) {
       leftPos = Math.random() * 15; // 左侧 0-15% 区域
    } else {
       leftPos = 85 + Math.random() * 15; // 右侧 85-100% 区域
    }
    
    el.style.left = `${leftPos}%`;
    
    // 随机大小 (20px - 40px)
    el.style.fontSize = `${20 + Math.random() * 20}px`;
    
    // 随机飘升速度 (5s - 15s)
    const duration = 5 + Math.random() * 10; 
    el.style.animationDuration = `${duration}s`;
    
    container.appendChild(el);

    // 动画结束后从 DOM 中移除，防止网页变卡
    setTimeout(() => {
      el.remove();
    }, duration * 1000);
  }

  // 启动循环：每 800ms 生成一个食物
  setInterval(createFood, 800);
  
  // 页面刚加载时先生成几个，避免开场太空
  for(let i=0; i<5; i++) createFood();
});