import { Platform } from 'react-native';

const GATEWAY = Platform.OS === "android" ? 'http://156.59.128.238:3000' : 'http://localhost:3000';

export function post(path, body) {
  return fetch(GATEWAY + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json()).catch(error => console.error('Error:', error));
}
export function get(path) {
  return fetch(GATEWAY + path).then(res => res.json());
}
