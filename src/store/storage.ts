import {PersistStorage} from 'zustand/middleware';
import {MMKV} from 'react-native-mmkv';
import {FanState} from '$src/store/fanStore';

const storage = new MMKV();

export const zustandStorage: PersistStorage<FanState> = {
  setItem: (name: string, value: any) => {
    storage.set(name, JSON.stringify(value));
    return Promise.resolve();
  },
  getItem: (name: string) => {
    const value = storage.getString(name);
    return Promise.resolve(value ? JSON.parse(value) : null);
  },
  removeItem: (name: string) => {
    storage.delete(name);
    return Promise.resolve();
  },
};
