import Config from 'react-native-config';

export function getPublishedProducts() {
  return fetch(Config.API_URL + '/sweets/published', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      console.error(error);
    });
}
export function getProduct(id: string) {
  return fetch(Config.API_URL + '/sweets/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      console.error(error);
    });
}
