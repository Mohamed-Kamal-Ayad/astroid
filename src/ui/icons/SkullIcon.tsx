import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const SkullIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={41} height={48} viewBox="0 0 41 48" fill="none" {...props}>
    <Path
      d="M16.811 0l-.437 3.712 3.513 2.754L22.44 1.09C20.49.106 18.65.044 16.811 0zm-6.374 3.967c-2.606.315-4.616 1.709-6.327 3.634h.003l10.36 6.728-4.036-10.362zM24.851 6.94l2.005 9.19-9.79-2.566 4.36 8.982-15.11-9.607a20.892 20.892 0 00-1.205 1.642C2.016 19.253.59 25.45.5 31.427c4.312 2.11 6.86 4.315 7.956 6.617.984 2.07.588 4.199-.682 5.831 2.71 2.514 7.376 4.045 12.16 4.122 4.816.077 9.669-1.299 12.748-4.169-.648-.745-1.119-1.542-1.343-2.412-.301-1.166-.103-2.424.557-3.577 1.264-2.208 4.046-4.22 8.604-6.416-.095-5.66-1.489-11.849-4.567-16.596-2.515-3.88-6.077-6.816-11.082-7.887zM12.032 25.088a5.401 5.401 0 11-.002 10.802 5.401 5.401 0 01.002-10.802zm16.063 0a5.401 5.401 0 11-.002 10.803 5.401 5.401 0 01.002-10.802zm-8.033 9.258c1.476 3.118 2.649 6.237 3.23 9.355-1.588 1.386-4.434 1.587-6.46 0 .785-3.118 1.731-6.237 3.23-9.355z"
      fill={color}
    />
  </Svg>
);
