<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="relative">
    <!-- Hero Section -->
    <div class="hero-section mb-12">
      <div class="avatar-container mb-8">
        <div
          i-carbon-user-avatar
          class="animate-float text-6xl text-teal-600 dark:text-teal-400"
        />
      </div>

      <h1 class="gradient-text mb-4 animate-fade-in text-5xl font-bold">
        欢迎来到我的个人网站
      </h1>

      <p class="animate-fade-in-delay mb-3 text-xl text-gray-600 dark:text-gray-400">
        分享我的思想、代码和想法
      </p>

      <p class="animate-fade-in-delay-2 mb-8 text-sm opacity-60">
        探索技术 • 记录生活 • 分享心得
      </p>
    </div>

    <div class="divider mb-10" />

    <!-- Social Links Section -->
    <div class="social-section">
      <h2 class="mb-6 text-lg font-semibold opacity-75">
        🔗 我的社交空间
      </h2>

      <nav class="flex justify-center gap-8 text-3xl">
        <a
          icon-btn
          rel="noreferrer"
          href="https://blog.czx.kim"
          target="_blank"
          title="博客 - 技术文章与思考"
          class="social-link blog-link"
        >
          <div i-carbon-blog />
          <span class="link-label">博客</span>
        </a>

        <a
          icon-btn
          rel="noreferrer"
          href="https://memos.czx.kim"
          target="_blank"
          title="Memos - 碎片化记录"
          class="social-link memos-link"
        >
          <div i-carbon-document-notes />
          <span class="link-label">Memos</span>
        </a>

        <a
          icon-btn
          rel="noreferrer"
          href="https://github.com/Starkxim"
          target="_blank"
          title="GitHub - 开源项目"
          class="social-link github-link"
        >
          <div i-carbon-logo-github />
          <span class="link-label">GitHub</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
/* Gradient Text Effect */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .gradient-text {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 0.8s ease-out 0.2s backwards;
}

.animate-fade-in-delay-2 {
  animation: fade-in 0.8s ease-out 0.4s backwards;
}

/* Divider */
.divider {
  height: 2px;
  max-width: 200px;
  margin: 0 auto;
  background: linear-gradient(90deg, transparent, #667eea, transparent);
  opacity: 0.5;
}

/* Social Links */
.social-section {
  padding: 2rem 0;
}

.social-link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
  background: rgba(102, 126, 234, 0.05);
}

.dark .social-link {
  background: rgba(168, 237, 234, 0.05);
}

.social-link:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.dark .social-link:hover {
  box-shadow: 0 10px 30px rgba(168, 237, 234, 0.2);
}

.link-label {
  font-size: 0.75rem;
  font-weight: 500;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.social-link:hover .link-label {
  opacity: 1;
}

/* Individual Link Colors */
.blog-link:hover {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
}

.memos-link:hover {
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
}

.github-link:hover {
  color: #6366f1;
  background: rgba(99, 102, 241, 0.1);
}

.dark .github-link:hover {
  color: #a8edea;
}

/* Responsive Design */
@media (max-width: 640px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .social-section nav {
    gap: 1rem;
  }

  .social-link {
    padding: 1rem;
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
