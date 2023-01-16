import { withTests } from "@storybook/addon-jest"
import results from "../../../coverage/zigbits/jest-test-results.json"

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  controls: { expanded: true },
  layout: "centered",
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
}

export const decorators = [
  withTests({
    results,
  }),
]
