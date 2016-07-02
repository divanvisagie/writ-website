import path from 'path'
import Bacon from 'baconjs'

function HttpService () {
  const root = '/api'
  function get (url) {
    let fetchPath = path.join(root, url)
    const promise = new Promise((resolve, reject) => {
      console.log('resolving', fetchPath)
      resolve(fetchPath)
    })

    const stream = Bacon.fromPromise(promise)
    return stream
  }

  return {
    get
  }
}

export default HttpService
