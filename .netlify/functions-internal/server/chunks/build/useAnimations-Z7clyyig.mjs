import { l as useState } from './server.mjs';

const useAnimations = () => {
  const animationEnabled = useState("animationEnabled", () => false);
  const toggleAnimations = () => {
    animationEnabled.value = !animationEnabled.value;
  };
  const setAnimations = (value) => {
    animationEnabled.value = value;
  };
  return {
    animationEnabled,
    toggleAnimations,
    setAnimations
  };
};

export { useAnimations as u };
//# sourceMappingURL=useAnimations-Z7clyyig.mjs.map
