// let fetch = {}
import path from 'path'
import 'whatwg-fetch'
import Bacon from 'baconjs'

function HttpService () {
  const root = '/api'

  const settings = {
    credentials: 'include'
  }

  const responseTypeMap = {
    json: response => response.json(),
    text: response => response.text()
  }

  return {
    get (url, type = 'json') {
      let fetchPath = path.join(root, url)
      const promise = fetch(fetchPath, settings)
        .then(responseTypeMap[type])

      const stream = Bacon.fromPromise(promise)
      return stream
    },

    post (url, data, type = 'json') {
      console.log(url, data)
    }
  }
}

export default HttpService
