export const useSeasonalEffect = () => {
  // Winter months: December (11), January (0), February (1)
  const currentMonth = new Date().getMonth()
  const isWinter = computed(() => currentMonth === 11 || currentMonth === 0 || currentMonth === 1)

  return {
    isWinter,
  }
}
