---
title: 关于我
---

<div class="about-page">
  <div i-carbon-user-avatar class="text-5xl mb-6 m-auto text-teal-600 dark:text-teal-400" />
  
  <h1 class="text-4xl font-bold mb-6 gradient-text">关于我</h1>

  <div class="content-section">
    <h2 class="text-2xl font-semibold mb-4">👋 你好！</h2>
    
    <p class="mb-4">
      我是 <strong>Zixu Cao</strong>，一名热爱技术的开发者。
    </p>
    
    <p class="mb-4">
      我喜欢探索新技术、编写代码，并在 <a href="https://blog.czx.kim" target="_blank" class="text-link">博客</a> 上分享我的学习心得和技术思考。
    </p>

    <h2 class="text-2xl font-semibold mb-4 mt-8">💡 关于这个网站</h2>
    
    <p class="mb-4">
      这是我的个人空间，在这里你可以：
    </p>
    
    <ul class="list-disc list-inside mb-4 space-y-2">
      <li>在 <a href="https://blog.czx.kim" target="_blank" class="text-link">博客</a> 阅读我的技术文章</li>
      <li>在 <a href="https://memos.czx.kim" target="_blank" class="text-link">Memos</a> 查看我的碎片化记录</li>
      <li>在 <a href="https://github.com/Starkxim" target="_blank" class="text-link">GitHub</a> 查看我的开源项目</li>
    </ul>

    <h2 class="text-2xl font-semibold mb-4 mt-8">🚀 技术栈</h2>
    
    <p class="mb-4">
      本网站基于以下技术构建：
    </p>
    
    <ul class="list-disc list-inside mb-4 space-y-2">
      <li><strong>Vue 3</strong> - 渐进式 JavaScript 框架</li>
      <li><strong>Vite</strong> - 下一代前端构建工具</li>
      <li><strong>UnoCSS</strong> - 即时按需的原子化 CSS 引擎</li>
      <li><strong>TypeScript</strong> - JavaScript 的超集</li>
    </ul>

    <div class="mt-8 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
      <p class="text-center opacity-75">
        💌 欢迎通过我的社交平台与我交流！
      </p>
    </div>
  </div>
</div>

<style scoped>
.about-page {
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.dark .gradient-text {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.content-section {
  text-align: left;
  line-height: 1.8;
}

.text-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  border-bottom: 2px solid transparent;
}

.text-link:hover {
  color: #764ba2;
  border-bottom-color: #764ba2;
}

.dark .text-link {
  color: #a8edea;
}

.dark .text-link:hover {
  color: #fed6e3;
  border-bottom-color: #fed6e3;
}

h2 {
  color: #667eea;
}

.dark h2 {
  color: #a8edea;
}
</style>
