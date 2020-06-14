export const classNames = (...args: Array<any>): string => {
  const arr = Array.isArray(args[0]) ? [...args[0]] : args;
  return arr.filter(f => f).join(' ');
};

export const isDesktop = window.matchMedia('(min-width: 769px)').matches;
export const isMobile = window.matchMedia('(max-width: 768px)').matches;
