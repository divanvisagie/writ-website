import path from 'path'
import 'whatwg-fetch'
import Bacon from 'baconjs'

function HttpService () {
  const root = '/api'

  function match (pattern) {
    return function (matchers) {
      let execution = matchers[pattern] || matchers._
      return execution
    }
  }

  const typeMatchers = {
    json: response => response.json(),
    _: response => response.text()
  }

  return {
    get (url, type = 'json') {
      const fetchPath = path.join(root, url)
      const promise = fetch(fetchPath)
        .then(match(type)(typeMatchers))
      return Bacon.fromPromise(promise)
    },

    post (url, data, type = 'json') {
      const fetchPath = path.join(root, url)
      const json = JSON.stringify(data)
      console.log(json)
      const promise = fetch(fetchPath , {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: json
      }).then(match(type)(typeMatchers))
      return Bacon.fromPromise(promise)
    }
  }
}

export default HttpService
