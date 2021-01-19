import React from 'react';
import { classNames } from '../shared/class-names';
import { useTheme } from '../shared/use-theme';
import DeleteIcon from './DeleteIcon';

const Chip = (props) => {
  const {
    tag = 'div',
    className,
    colors: colorsProp,
    media,
    deleteButton,
    onDelete,

    // Theme
    ios,
    material,

    // Style
    outline,

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

  const style = outline ? 'outline' : 'fill';

  const colors = {
    bg: 'bg-gray-200',
    text: 'text-current',
    border: 'border-gray-200',
    ...colorsProp,
  };

  const c = {
    base: {
      initial: `${colors.text} text-sm inline-flex items-center justify-center align-middle rounded-full px-3 py-1`,
      ios: ``,
      material: ``,
      common: ``,
    },
    style: {
      fill: `${colors.bg}`,
      outline: `border ${colors.border}`,
    },
    media: '-ml-3 -my-1 mr-1 select-none',
    deleteButton:
      '-mr-2 -my-1 ml-1 h-full flex items-center justify-center w-6 cursor-pointer opacity-50 active:opacity-100 select-none',
  };

  const classes = classNames([
    // base
    c.base.initial,
    c.base[theme],

    c.style[style],

    className,
  ]);

  const mediaClasses = classNames(c.media);
  const deleteButtonClasses = classNames(c.deleteButton);

  return (
    <Component className={classes} {...attrs}>
      {media && <div className={mediaClasses}>{media}</div>}
      {children}
      {deleteButton && (
        <div className={deleteButtonClasses} onClick={onDelete}>
          <DeleteIcon className="h-4 w-4" />
        </div>
      )}
    </Component>
  );
};

export default Chip;