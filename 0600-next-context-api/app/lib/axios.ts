import axios from 'axios';

export const instance = axios.create({
  baseURL: '/api/v1/users', // ← localhost を消す！相対パスで呼ぶ
});
