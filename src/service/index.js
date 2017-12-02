import Vue from 'vue'

const customActions = (url) => {
  return {
    query: {url: `${url}/query`},
    batchDelete: {url: `${url}/batchDelete`, method: 'POST'},
    queryFiltering: {url: `${url}/queryFiltering`, method: 'POST'},
    count: {url: `${url}/count`, method: 'GET'}
  }
}

const paths = {
  HOME: `${process.env.SERVICE_PATH}/home`,
  CONTROLLERS: `${process.env.SERVICE_PATH}/controllers`
}

export default {

  home() {
    return Vue.http.get(`${paths.HOME}`)
  },
  useResource(resourceName) {
    const url = `${paths.CONTROLLERS}/${resourceName}{/id}`
    return Vue.resource(url, {}, customActions(url))
  }
}
