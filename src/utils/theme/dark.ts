import { hasClass, addClass, removeClass } from '@/utils/domUtils'

export function updateDarkTheme(mode: string | null = 'light') {
  const htmlRoot = document.getElementById('htmlRoot');
  if (!htmlRoot) {
    return;
  }
  const hasDarkClass = hasClass(htmlRoot, 'dark');
  if (mode === 'dark') {
    if (!hasDarkClass) {
      addClass(htmlRoot, 'dark');
    }
  } else {
    if (hasDarkClass) {
      removeClass(htmlRoot, 'dark');
    }
  }

}