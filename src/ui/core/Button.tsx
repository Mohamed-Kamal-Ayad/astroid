import React from 'react';
import type { TouchableOpacityProps } from 'react-native';

import { ActivityIndicator } from './ActivityIndicator';
import { Text } from './Text';
import { TouchableOpacity } from './TouchableOpacity';

type Variant = {
  container: string;
  label: string;
  indicator: string;
};
type VariantName = 'defaults' | 'primary' | 'outline' | 'secondary';
type BVariant = {
  [key in VariantName]: Variant;
};

export const buttonVariants: BVariant = {
  defaults: {
    container:
      'flex-row items-center justify-center rounded-full px-6 py-3 my-2',
    label: 'text-[16px] font-medium text-white',
    indicator: 'text-white h-[30px]',
  },
  primary: {
    container: 'bg-[#0E1438] border-2 border-white',
    label: '',
    indicator: 'text-white',
  },
  secondary: {
    container: 'bg-primary-600',
    label: 'text-secondary-600',
    indicator: 'text-white',
  },
  outline: {
    container: 'border border-neutral-400',
    label: 'text-dark dark:text-charcoal-100',
    indicator: 'text-black',
  },
};

interface Props extends TouchableOpacityProps {
  variant?: VariantName;
  label?: string;
  loading?: boolean;
  containerClassName?: string;
  labelClassName?: string;
}

export const Button = ({
  label,
  loading = false,
  variant = 'primary',
  disabled = false,
  containerClassName = '',
  labelClassName = '',
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      className={`
    ${buttonVariants.defaults.container}
     ${buttonVariants[variant].container}
     ${disabled ? 'opacity-50' : ''}
     ${containerClassName}
    `}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          className={`
          ${buttonVariants.defaults.indicator}
           ${buttonVariants[variant].indicator}
          `}
        />
      ) : (
        <Text
          className={`
          ${buttonVariants.defaults.label}
           ${buttonVariants[variant].label}
           ${labelClassName}
          `}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};
