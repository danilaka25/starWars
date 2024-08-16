import {
  ColorMap,
  FontSizeMap,
  FontWeightMap,
} from '$src/constants/themes/types';

import 'styled-components';

// https://styled-components.com/docs/api#create-a-declarations-file
declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorMap;
    fontSize: FontSizeMap;
    fontWeight: FontWeightMap;
  }
}
