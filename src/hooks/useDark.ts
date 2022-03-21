export default function useDark() {
  const { isDarkMode: isDark, toggle: toggleDark } = useDarkMode()

  return {
    isDark,
    toggleDark,
  }
}
