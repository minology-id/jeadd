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
  /**
   *
   * @param {Object} sort
   * @param {Object} paginate
   * @param {Object} search
   */
  createParams: (sort, paginate, search) => {
    return {
      sortBy: sort.col ? sort.col : undefined,
      sortType: sort.type ? sort.type : undefined,
      limit: paginate.limit ? paginate.limit : undefined,
      page: paginate.page ? paginate.page : undefined,
      query: search.query ? search.query : undefined,
      field: search.field ? search.field : undefined,
    };
  },
  /**
   *
   * @param {Number} count
   * @param {Number} limit
   */
  createPaginateItem: (count, limit) => {
    if (limit > count) {
      return [1];
    } else {
      let arr = [];
      const item =
        count % limit === 0
          ? Math.floor(count / limit)
          : Math.floor(count / limit) + 1;
      for (let i = 0; i < item; i++) {
        arr.push(i + 1);
      }
      return arr;
    }
  },
  debounce: (func, timeout = 500) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  },
};

export default helper;
