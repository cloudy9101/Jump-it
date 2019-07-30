import { Platform } from 'react-native';

const GATEWAY =
  Platform.OS === 'android'
    ? 'http://156.59.132.11:3000'
    : 'http://192.168.1.100:3000';
//192.168.1.100
export function post(path, body, token = '') {
  return fetch(GATEWAY + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}
export function get(path, token = '') {
  return fetch(GATEWAY + path, {
    headers: {
      Authorization: token
    }
  }).then(res => res.json());
}
