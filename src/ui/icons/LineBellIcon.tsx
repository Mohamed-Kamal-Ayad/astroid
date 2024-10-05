import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

export const LineBellIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#clip0_87_430)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 19a2 2 0 01-1.85 1.995L13 21h-2a2 2 0 01-1.995-1.85L9 19h6zM12 2a7 7 0 016.996 6.76L19 9v3.764l1.822 3.644a1.1 1.1 0 01-.869 1.586l-.115.006H4.162a1.1 1.1 0 01-1.03-1.487l.046-.105L5 12.764V9a7 7 0 017-7zm0 2a5 5 0 00-4.995 4.783L7 9v3.764a2 2 0 01-.136.725l-.075.17L5.619 16h12.763l-1.17-2.342a2 2 0 01-.203-.709L17 12.764V9a5 5 0 00-5-5z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_87_430">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
