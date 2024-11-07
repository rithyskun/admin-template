<template>
  <nav class="sticky top-0 z-50 bg-white shadow-md">
    <div class="px-6 py-4 flex items-center justify-between">
      <div class="flex items-center">
        <button 
          class="text-gray-500 hover:text-gray-600"
          @click="toggle"
        >
          <Bars3Icon class="w-6 h-6" />
        </button>
      </div>
      
      <div class="flex items-center space-x-4">
        <div class="relative">
          <button 
            @click="isNotificationOpen = !isNotificationOpen"
            class="p-2 text-gray-500 hover:text-gray-600 relative"
          >
            <BellIcon class="w-6 h-6" />
            <span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div 
            v-if="isNotificationOpen"
            class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50"
          >
            <div class="px-4 py-2 border-b border-gray-100">
              <h3 class="text-sm font-semibold">Notifications</h3>
            </div>
            <div class="max-h-64 overflow-y-auto">
              <a 
                v-for="notification in notifications" 
                :key="notification.id"
                href="#" 
                class="block px-4 py-2 hover:bg-gray-50"
              >
                <p class="text-sm text-gray-600">{{ notification.message }}</p>
                <p class="text-xs text-gray-400">{{ notification.time }}</p>
              </a>
            </div>
          </div>
        </div>

        <div class="relative">
          <button 
            @click="isProfileOpen = !isProfileOpen"
            class="flex items-center space-x-2"
          >
            <img 
              src="https://ui-avatars.com/api/?name=Admin+User" 
              alt="Profile" 
              class="w-8 h-8 rounded-full"
            />
            <span class="text-gray-700">Admin User</span>
          </button>
          <div 
            v-if="isProfileOpen"
            class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
          >
            <a 
              v-for="item in profileMenu" 
              :key="item.label"
              href="#" 
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { BellIcon, Bars3Icon } from '@heroicons/vue/24/outline'

const { toggle } = useSidebar()
const isNotificationOpen = ref(false)
const isProfileOpen = ref(false)

const notifications = [
  { id: 1, message: 'New user registration', time: '5 min ago' },
  { id: 2, message: 'Server update completed', time: '1 hour ago' },
  { id: 3, message: 'Daily backup completed', time: '3 hours ago' }
]

const profileMenu = [
  { label: 'Profile Settings' },
  { label: 'Help & Support' },
  { label: 'Sign Out' }
]
</script>