export const useAnimations = () => {
  const animationEnabled = useState<boolean>('animationEnabled', () => false)

  const toggleAnimations = () => {
    animationEnabled.value = !animationEnabled.value
  }

  const setAnimations = (value: boolean) => {
    animationEnabled.value = value
  }

  return {
    animationEnabled,
    toggleAnimations,
    setAnimations,
  }
}
