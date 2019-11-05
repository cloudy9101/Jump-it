import { Platform } from 'react-native';
import { GATEWAY } from './config';

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

export function put(path, body, token = '') {
  return fetch(GATEWAY + path, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}

export function del(path, token = '') {
  return fetch(GATEWAY + path, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}
