import { positionClass } from '../position-class.js';
import { cls } from '../cls.js';

export const ButtonClasses = (props, colors, classes, darkClasses) => {
  const { inline, segmented, segmentedStrong, disabled } = props;
  return {
    base: {
      common: cls(
        'flex text-center justify-center items-center appearance-none px-2 py-1 transition-colors focus:outline-none cursor-pointer select-none overflow-hidden z-10',
        inline ? 'inline-flex' : 'w-full flex',
        positionClass('relative', classes),
        disabled && 'pointer-events-none'
      ),
      ios: `uppercase duration-100 font-semibold`,
      material: `duration-300 font-medium`,

      square: {
        ios:
          segmented && !segmentedStrong
            ? 'first:rounded-l last:rounded-r'
            : 'rounded',
        material:
          segmented && !segmentedStrong
            ? 'first:rounded-lg-l last:rounded-lg-r'
            : 'rounded-lg',
      },

      rounded: segmented && !segmentedStrong ? '' : 'rounded-full',
    },
    style: {
      fill: {
        common: cls(disabled && cls(colors.disabledBg, colors.disabledText)),
        ios: cls(
          disabled
            ? cls(colors.disabledBg, colors.disabledText)
            : `${colors.fillTextIos} ${colors.fillBgIos} ${colors.fillActiveBgIos}`
        ),
        material: cls(
          disabled
            ? cls(colors.disabledBg, colors.disabledText)
            : cls(
                colors.fillTextMaterial,
                colors.fillBgMaterial,
                colors.fillActiveBgMaterial,
                colors.fillTouchRipple
              )
        ),
      },
      outline: {
        common: cls(
          disabled
            ? cls(colors.disabledText, colors.disabledBorder)
            : cls('active:bg-opacity-15', colors.touchRipple)
        ),
        ios: cls(
          !segmented && 'border-2',
          !disabled && !segmented && colors.outlineBorderIos,
          !disabled && cls(colors.textIos, colors.activeBgIos)
        ),
        material: cls(
          !segmented && 'border',
          !disabled && !segmented && colors.outlineBorderMaterial,
          !disabled && cls(colors.textMaterial, colors.activeBgMaterial)
        ),
      },
      clear: {
        common: cls(
          disabled
            ? colors.disabledText
            : `active:bg-opacity-15 ${colors.touchRipple}`
        ),
        ios: !disabled && cls(colors.textIos, colors.activeBgIos),
        material:
          !disabled && cls(colors.textMaterial, colors.activeBgMaterial),
      },
      tonal: {
        common: disabled
          ? cls(colors.disabledBg, colors.disabledText)
          : cls(colors.touchRipple),
        ios:
          !disabled &&
          cls(
            colors.tonalTextIos,
            colors.tonalBgIos,
            colors.activeBgIos,
            'bg-opacity-15 active:bg-opacity-25'
          ),
        material:
          !disabled &&
          cls(
            colors.tonalTextMaterial,
            colors.tonalBgMaterial,
            colors.activeBgMaterial
          ),
      },
      segmentedStrong: cls(
        `active:bg-black active:bg-opacity-10`,
        darkClasses(
          'dark:active:bg-white dark:active:bg-opacity-5 dark:touch-ripple-white'
        )
      ),
      segmentedStrongActive: 'duration-0',
    },
    size: {
      small: {
        ios: `text-xs h-7`,
        material: `text-sm h-8`,
      },
      medium: {
        common: 'text-sm',
        ios: `h-7`,
        material: `h-10`,
      },
      large: {
        ios: `h-11`,
        material: `h-12`,
      },
    },
    raised: `shadow active:shadow-lg`,
  };
};
