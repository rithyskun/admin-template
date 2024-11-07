<template>
  <aside 
    class="fixed inset-y-0 bg-gray-800 text-white transition-all duration-300 flex flex-col"
    :class="[isOpen ? 'left-0 w-64' : '-left-64 w-64']"
  >
    <!-- Header - Fixed at top -->
    <div class="flex-shrink-0 p-4 border-b border-gray-700">
      <h1 class="text-2xl font-bold">Admin Panel</h1>
    </div>

    <!-- Scrollable Navigation -->
    <nav class="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <div class="py-4 space-y-1">
        <div v-for="item in menuItems" :key="item.path">
          <!-- Menu Item with Submenu -->
          <template v-if="item.submenu">
            <button 
              @click="toggleSubmenu(item.name)"
              class="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-700 transition-colors"
              :class="{ 'bg-gray-700': activeSubmenu === item.name }"
            >
              <div class="flex items-center">
                <component :is="item.icon" class="w-5 h-5 mr-2" />
                {{ item.name }}
              </div>
              <ChevronDownIcon 
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeSubmenu === item.name }"
              />
            </button>
            <!-- Submenu Items -->
            <div 
              v-show="activeSubmenu === item.name"
              class="bg-gray-900"
            >
              <NuxtLink
                v-for="subItem in item.submenu"
                :key="subItem.path"
                :to="subItem.path"
                class="block pl-11 pr-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                :class="{ 'bg-gray-700': subItem.path === currentPath }"
              >
                {{ subItem.name }}
              </NuxtLink>
            </div>
          </template>

          <!-- Regular Menu Item -->
          <NuxtLink
            v-else
            :to="item.path"
            class="flex items-center px-4 py-2 hover:bg-gray-700 transition-colors"
            :class="{ 'bg-gray-700': item.path === currentPath }"
          >
            <component :is="item.icon" class="w-5 h-5 mr-2" />
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- User Profile Section - Fixed at bottom -->
    <div class="flex-shrink-0 p-4 border-t border-gray-700">
      <div class="flex items-center space-x-3">
        <img 
          src="https://ui-avatars.com/api/?name=Admin+User" 
          alt="Profile" 
          class="w-8 h-8 rounded-full"
        />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium truncate">Admin User</p>
          <p class="text-xs text-gray-400 truncate">admin@example.com</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { 
  HomeIcon, 
  UsersIcon, 
  ChartBarIcon, 
  CogIcon,
  ShoppingBagIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  ClipboardDocumentIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CalendarIcon,
  InboxIcon,
  ChatBubbleLeftIcon
} from '@heroicons/vue/24/outline'

const currentPath = useRoute().path
const { isOpen } = useSidebar()
const activeSubmenu = ref(null)

const toggleSubmenu = (menuName) => {
  activeSubmenu.value = activeSubmenu.value === menuName ? null : menuName
}

const menuItems = [
  { 
    name: 'Dashboard', 
    path: '/admin', 
    icon: HomeIcon 
  },
  { 
    name: 'Users', 
    icon: UsersIcon,
    submenu: [
      { name: 'All Users', path: '/admin/users' },
      { name: 'User Groups', path: '/admin/users/groups' },
      { name: 'Permissions', path: '/admin/users/permissions' }
    ]
  },
  {
    name: 'Products',
    icon: ShoppingBagIcon,
    submenu: [
      { name: 'All Products', path: '/admin/products' },
      { name: 'Categories', path: '/admin/products/categories' },
      { name: 'Inventory', path: '/admin/products/inventory' },
      { name: 'Reviews', path: '/admin/products/reviews' }
    ]
  },
  {
    name: 'Orders',
    icon: ClipboardDocumentIcon,
    submenu: [
      { name: 'All Orders', path: '/admin/orders' },
      { name: 'Pending', path: '/admin/orders/pending' },
      { name: 'Completed', path: '/admin/orders/completed' },
      { name: 'Cancelled', path: '/admin/orders/cancelled' }
    ]
  },
  {
    name: 'Finance',
    icon: CurrencyDollarIcon,
    submenu: [
      { name: 'Transactions', path: '/admin/finance/transactions' },
      { name: 'Revenue', path: '/admin/finance/revenue' },
      { name: 'Refunds', path: '/admin/finance/refunds' }
    ]
  },
  {
    name: 'Reports',
    icon: DocumentTextIcon,
    submenu: [
      { name: 'Sales Report', path: '/admin/reports/sales' },
      { name: 'User Activity', path: '/admin/reports/activity' },
      { name: 'Analytics', path: '/admin/reports/analytics' },
      { name: 'Performance', path: '/admin/reports/performance' }
    ]
  },
  {
    name: 'Team',
    icon: UserGroupIcon,
    submenu: [
      { name: 'Members', path: '/admin/team/members' },
      { name: 'Roles', path: '/admin/team/roles' },
      { name: 'Activity', path: '/admin/team/activity' }
    ]
  },
  { 
    name: 'Calendar', 
    path: '/admin/calendar', 
    icon: CalendarIcon 
  },
  { 
    name: 'Messages', 
    path: '/admin/messages', 
    icon: ChatBubbleLeftIcon 
  },
  { 
    name: 'Inbox', 
    path: '/admin/inbox', 
    icon: InboxIcon 
  },
  { 
    name: 'Analytics', 
    path: '/admin/analytics', 
    icon: ChartBarIcon 
  },
  { 
    name: 'Settings', 
    path: '/admin/settings', 
    icon: CogIcon 
  }
]
</script>

<style>
/* Custom scrollbar styles */
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: #1f2937; /* gray-800 */
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #4b5563; /* gray-600 */
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #6b7280; /* gray-500 */
}
</style>