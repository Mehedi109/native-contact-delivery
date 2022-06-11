import { color } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const presets = {
  default: {
    fontFamily: typography.sfProText,
    fontSize: 16,
    color: color.white,
  },
  h1: {
    fontSize: spacing[9],
    fontFamily: typography.sfProDisplay,
    color: color.darkPurple,
  },
  h2: {
    fontSize: spacing[8],
    fontFamily: typography.sfProDisplay,
    color: color.darkPurple,
  },
  h4: {
    fontSize: spacing[6],
    fontFamily: typography.sfProText,
    color: color.darkPurple,
  },
  p: {
    fontFamily: typography.sfProText,
    fontSize: spacing[4],
    // fontWeight: 400,
    lineHeight: 26,
    color: color.secondary,
    letterSpacing: -0.4099999964237213,
  },
};
