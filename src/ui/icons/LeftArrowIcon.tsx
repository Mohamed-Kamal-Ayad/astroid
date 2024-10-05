import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const LeftArrowIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={12} height={20} viewBox="0 0 12 20" fill="none" {...props}>
    <Path
      d="M11.541 19.56c.294-.282.459-.665.459-1.063 0-.399-.165-.781-.459-1.063L3.783 9.99l7.758-7.443c.286-.283.444-.663.44-1.057a1.474 1.474 0 00-.459-1.05A1.601 1.601 0 0010.427 0a1.603 1.603 0 00-1.102.421L.459 8.928A1.473 1.473 0 000 9.99c0 .399.165.781.459 1.063l8.866 8.506c.294.282.693.44 1.108.44.416 0 .814-.158 1.108-.44z"
      fill={color}
    />
  </Svg>
);
