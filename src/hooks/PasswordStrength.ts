import zxcvbn from "zxcvbn"

export const usePasswordStrength = (password: string) => {
  return zxcvbn(password)
}

export const usePasswordFeedback = ({
  suggestions,
  warning,
}: zxcvbn.ZXCVBNFeedback) => {
  if (warning) return warning
  if (suggestions.length > 0) return suggestions[0]
  return ""
}
