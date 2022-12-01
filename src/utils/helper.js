const bootstrap = {
  variants: [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ],
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
};

const helper = {
  /**
   *
   * @param {String} variant
   * @returns
   */
  parseVariant: (variant) => {
    if (bootstrap.variants.includes(variant.toLowerCase()))
      return variant.toLowerCase();

    return 'primary';
  },
  /**
   *
   * @param {String} size : ;
   */
  parseButtonSize: (size) => {
    const availableSizes = ['lg', 'sm'];

    if (availableSizes.includes(size.toLowerCase())) return size.toLowerCase();

    return 'lg';
  },
  /**
   *
   * @param {String} type
   */
  parseButtonType: (type) => {
    const availableTypes = ['button', 'submit'];

    if (availableTypes.includes(type.toLowerCase())) return type.toLowerCase();

    return 'button';
  },
  /**
   *
   * @param {String} breakpoint
   * @returns
   */
  parseContainerResponsive: (breakpoint) => {
    const availableBrs = bootstrap.breakpoints.filter((i) => i !== 'xs');
    availableBrs.push('fluid');

    if (availableBrs.includes(breakpoint.toLowerCase()))
      return breakpoint.toLowerCase();

    return '';
  },
};

export default helper;
