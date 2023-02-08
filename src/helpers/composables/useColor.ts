import { computed } from "vue";
import { useStore } from "vuex";
import { ThemeVariants } from "../enums/store/store.enum";

export function useColor() {
  const store = useStore();
  const theme = computed(() => store.state.theme);

  const color = computed(() => {
    return theme.value === ThemeVariants.light ? "#000000" : "#ffffffde";
  });

  return color;
}
