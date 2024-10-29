<template>
  <main
    px-4 py-10
    text="center gray-700 dark:gray-200"
  >
    <RouterView />
    <TheFooter />
    <div mx-auto mt-5 text-center text-sm opacity-50>
      powered by <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank"> Vitesse </a>
    </div>
  </main>
</template>
