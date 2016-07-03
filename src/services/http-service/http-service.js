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

  function get (url, type = 'json') {
    let fetchPath = path.join(root, url)
    const promise = fetch(fetchPath, settings)
      .then(responseTypeMap[type])

    //   console.log('resolving', fetchPath)
    //   resolve(fetchPath)
    // })

    const stream = Bacon.fromPromise(promise)
    return stream
  }

  return {
    get
  }
}

export default HttpService
