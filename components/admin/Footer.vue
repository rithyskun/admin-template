<template>
  <footer class="bg-white shadow-md mt-8">
    <div class="mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="text-gray-500 text-sm">
          © {{ currentYear }} Admin Dashboard. All rights reserved.
        </div>
        <div class="flex space-x-6">
          <a 
            v-for="link in footerLinks" 
            :key="link.name"
            :href="link.href"
            class="text-gray-500 hover:text-gray-700 text-sm"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()

const footerLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Contact', href: '#' }
]
</script>