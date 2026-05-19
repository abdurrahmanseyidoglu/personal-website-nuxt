<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

function toggle() {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="modelValue"
    :disabled="disabled"
    class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-transparent p-0.5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#339af0] disabled:cursor-not-allowed disabled:opacity-60"
    :class="modelValue ? 'bg-[#339af0]' : 'bg-gray-300 dark:bg-gray-600'"
    @click="toggle"
  >
    <span
      class="block size-5 rounded-full bg-white shadow-sm ring-0 transition-transform duration-200"
      :class="modelValue ? 'ltr:translate-x-5 rtl:-translate-x-5' : 'translate-x-0'"
    />
  </button>
</template>
