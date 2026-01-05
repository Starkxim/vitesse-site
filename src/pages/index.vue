<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div>
    <div text-4xl mb-6>
      <div i-carbon-user-avatar inline-block />
    </div>
    <h1 text-3xl font-bold mb-2>
      欢迎来到我的个人网站
    </h1>
    <p text-lg mb-6>
      <em text-sm opacity-75>分享我的思想、代码和想法</em>
    </p>

    <div py-4 />

    <!-- 社交链接 -->
    <nav flex="~ gap-6" justify-center text-2xl>
      <a
        icon-btn
        rel="noreferrer"
        href="https://blog.czx.kim"
        title="博客"
        class="hover:text-blue-500 transition-colors"
      >
        <div i-carbon-blog />
      </a>
      <a
        icon-btn
        rel="noreferrer"
        href="https://memos.czx.kim"
        target="_blank"
        title="Memos"
        class="hover:text-green-500 transition-colors"
      >
        <div i-carbon-document-notes />
      </a>
      <a
        icon-btn
        rel="noreferrer"
        href="https://github.com/Starkxim"
        target="_blank"
        title="GitHub"
        class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <div i-carbon-logo-github />
      </a>
    </nav>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
