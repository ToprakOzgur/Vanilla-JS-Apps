/**
 * EasyHTTP library
 * for making HTTP requests
 * 
 * @version 2.0.0
 * @author Ozgur Toprak
 * @license MIT
 */

class EasyHTTPModern {

  //Make HTTP GET Request 
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //Make HTTP POST Request 
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //Make HTTP POST Request 
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //Make HTTP DELETE Request 
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(() => resolve('resource deleted'))
        .catch(err => reject(err));
    });
  }
}