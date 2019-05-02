export const classNames = (...args: Array<any>): string => {
  const arr = Array.isArray(args[0]) ? [...args[0]] : args;
  return arr.filter(f => f).join(' ');
};