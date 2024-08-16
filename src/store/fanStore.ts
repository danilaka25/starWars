import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {zustandStorage} from './storage';

export enum GenderType {
  male = 'male',
  female = 'female',
}

export type Gender = GenderType | string;

type Character = {
  name: string;
  gender: Gender;
};

export type FanState = {
  fanList: Character[];
  addFan: (character: Character) => void;
  removeFan: (name: string) => void;
  removeAll: () => void;
  countByGender: (gender: Gender) => number;
  wasNameLiked: (name: string) => boolean;
};

export const useFanStore = create<FanState>()(
  persist(
    (set, get) => ({
      fanList: [],
      addFan: (character: Character) => {
        const gender =
          character.gender === GenderType.male ||
          character.gender === GenderType.female
            ? character.gender
            : 'others';

        set(state => ({
          fanList: [...state.fanList, {...character, gender}],
        }));
      },
      removeFan: (name: string) =>
        set(state => ({
          fanList: state.fanList.filter(fan => fan.name !== name),
        })),
      removeAll: () =>
        set(() => ({
          fanList: [],
        })),
      countByGender: (gender: Gender) =>
        get().fanList.filter(fan => fan.gender === gender).length,
      wasNameLiked: (name: string) =>
        get().fanList.some(fan => fan.name === name),
    }),
    {
      name: 'fan-controls-store',
      storage: zustandStorage,
    },
  ),
);
