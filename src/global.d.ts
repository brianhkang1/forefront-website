declare module '*.pdf';
declare module '*.doc';
declare module '*.docx';

interface Window {
  uet_report_conversion: (eventAction: string, eventLabel: string) => void;
}
