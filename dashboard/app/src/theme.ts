import { definePreset } from "@primevue/themes"
import Aura from "@primevue/themes/aura"

//eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{blue.50}",
      100: "{blue.100}",
      200: "{blue.200}",
      300: "{blue.300}",
      400: "{blue.400}",
      500: "{blue.500}",
      600: "{blue.600}",
      700: "{blue.700}",
      800: "{blue.800}",
      900: "{blue.900}",
      950: "{blue.950}",
    },
  },
  components: {
    select: {
      dropdown: {
        width: "0px",
      },
    },
    multiselect: {
      dropdown: {
        width: "0px",
      },
    },
    treeselect: {
      dropdown: {
        width: "0px",
      },
    },
    accordion: {
      header: {
        padding: "0 0 1rem 0",
      },
      content: {
        padding: "0",
      },
      panel: {
        border: {
          width: "0",
        },
      },
    },
  },
})
