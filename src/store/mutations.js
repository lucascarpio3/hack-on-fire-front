import {CHANGE_LANGUAGE} from './mutations-types'

export default {
  [CHANGE_LANGUAGE] (state, value) {
    state.lang = value
  }
}
