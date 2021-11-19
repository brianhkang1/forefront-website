export const classNames = (...args: Array<any>): string => {
  const arr = Array.isArray(args[0]) ? [...args[0]] : args;
  return arr.filter(f => f).join(' ');
};

export const isDesktop = window.matchMedia('(min-width: 769px)').matches;
export const isMobile = window.matchMedia('(max-width: 768px)').matches;

export enum GoogleEventCategory {
  SHOP_HEADER_BUTTON = 'Shop Button (Header)',
  DONATE_HEADER_BUTTON = 'Donate Button (Header)',
  DONATE_BUTTON_HOME_PAGE = 'Donate Button (Home page)',
  GALA_RSVP_BUTTON = 'Gala RSVP Button (Home page)',

  JOB_CHIEF_MARKETING_OFFICER = 'Job (Chief Marketing Officer)',
  JOB_DIRECTOR_OF_MEDICAL_HEALTH = 'Job (Director of Medical & Health)',
  JOB_DONOR_RELATIONS_LEAD = 'Job (Donor Relations Lead)',
  JOB_FINANCE_LEAD = 'Job (Finance Lead)',
  JOB_MARKETING_LEAD_COPYWRITER = 'Job (Marketing Lead - Copywriter/Creative)',
  JOB_PEOPLE_CULTURE_LEAD = 'Job (People & Culture Lead)',
  JOB_EDUCATION_LEAD_ACADEMIC = 'Job (Education Lead - Academic)'
}

export enum GoogleEventAction {
  CLICK = 'Click'
}

export enum GoogleEventLabel {
  GALA_2021 = 'Gala 2021'
}
