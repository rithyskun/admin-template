import { useState } from '#app'

export const useSidebar = () => {
  const isOpen = useState('sidebar-open', () => true)

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    toggle
  }
}