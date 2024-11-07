<template>
  <NuxtLayout name="admin">
    <div class="space-y-6">
      <!-- Welcome Section -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-2xl font-semibold mb-2">Welcome back, Admin!</h2>
        <p class="text-gray-600">Here's what's happening with your projects today.</p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-lg font-medium text-blue-700">Total Users</h3>
          <p class="text-3xl font-bold text-blue-800">1,234</p>
          <p class="text-sm text-blue-600 mt-2">↑ 12% from last month</p>
        </div>
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-medium text-green-700">Revenue</h3>
          <p class="text-3xl font-bold text-green-800">$45,678</p>
          <p class="text-sm text-green-600 mt-2">↑ 8% from last month</p>
        </div>
        <div class="bg-purple-50 p-6 rounded-lg">
          <h3 class="text-lg font-medium text-purple-700">Active Projects</h3>
          <p class="text-3xl font-bold text-purple-800">25</p>
          <p class="text-sm text-purple-600 mt-2">↑ 4 new this week</p>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold mb-4">Recent Activity</h3>
        <div class="space-y-4">
          <div v-for="i in 4" :key="i" class="flex items-center justify-between border-b pb-4 last:border-0">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <UserIcon class="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p class="font-medium">New user registered</p>
                <p class="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <button class="text-blue-600 hover:text-blue-700 text-sm">View</button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { UserIcon } from '@heroicons/vue/24/outline'
</script>