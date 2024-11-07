<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <AdminSidebar />

    <!-- Main Content Wrapper -->
    <div 
      class="flex-1 flex flex-col transition-all duration-300"
      :class="[isOpen ? 'ml-64' : 'ml-0']"
    >
      <!-- Sticky Navbar -->
      <AdminNavbar />
      
      <!-- Scrollable Content Area -->
      <div class="flex-1 overflow-auto">
        <main class="p-8">
          <slot />
        </main>
        <AdminFooter />
      </div>
    </div>
  </div>
</template>

<script setup>
const { isOpen } = useSidebar()
</script>