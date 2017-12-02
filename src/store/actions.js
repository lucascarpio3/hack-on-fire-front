import { CHANGE_LANGUAGE } from './mutations-types'

export default {
  setLanguage (context, value) {
    context.commit(CHANGE_LANGUAGE, value)
  }
}
