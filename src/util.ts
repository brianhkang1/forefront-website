export const classNames = (...args: Array<any>): string => {
  const arr = Array.isArray(args[0]) ? [...args[0]] : args;
  return arr.filter((f) => f).join(' ');
};

export const isDesktop = window.matchMedia('(min-width: 769px)').matches;
export const isMobile = window.matchMedia('(max-width: 768px)').matches;

export enum TrackingEventAction {
  OUTBOUND_CLICK = 'outbound_click',
}

export enum TrackingEventLabel {
  DONATE = 'donate',
  SEE_OPEN_ROLES = 'see_open_roles',
  BECOME_A_VOLUNTEER = 'become_a_volunteer',
}
