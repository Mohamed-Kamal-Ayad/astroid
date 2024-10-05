import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const ArrowDownIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={8} height={11} viewBox="0 0 8 11" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.844 0a.61.61 0 00-.61.61v8.279l-2.21-2.21a.61.61 0 00-.86.861l3.25 3.25a.61.61 0 00.86 0l3.25-3.25a.61.61 0 00-.86-.861l-2.21 2.21V.609A.61.61 0 003.844 0z"
      fill={color}
    />
  </Svg>
);
