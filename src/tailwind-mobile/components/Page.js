import React from 'react';
import { classNames } from '../shared/class-names';
import { useTheme } from '../shared/use-theme';

const Page = (props) => {
  const {
    tag = 'div',
    className,

    // Theme
    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const Component = tag;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });

  const c = {
    base: {
      initial: '',
      ios: 'bg-page-ios',
      material: 'bg-page-material',
      common: 'ios:bg-page-ios material:bg-page-material',
    },
  };

  const classes = classNames([
    // base
    c.base.initial,
    c.base[theme],

    className,
  ]);

  return (
    <Component className={classes} {...attrs}>
      {children}
    </Component>
  );
};

export default Page;