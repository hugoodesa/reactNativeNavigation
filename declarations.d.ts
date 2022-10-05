/* eslint-disable prettier/prettier */
import React, { SvgProps } from 'react-native-svg';

declare module '*.svg' {
  const content: React.FC<SvgProps>;
  export default content;
}
