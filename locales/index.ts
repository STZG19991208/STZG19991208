import en from './en'
import zh from './zh'
export default {
  /**
   * Chinese locale config
   *
   * As the default locale of @vuepress/theme-default is English,
   * we don't need to set all of the locale fields
   */
  '/': zh,
  /**
   * English locale config
   */
  '/en/': en,
}
