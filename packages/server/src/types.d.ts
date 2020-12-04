export interface WorkHistoryPosition {
  name: string;
  start: string;
  end?: string;
  achievements: string[];
}

export interface WorkHistoryCompany {
  name: string;
  link: string;
  positions: WorkHistoryPosition[];
}

export interface WorkHistory {
  person: string;
  companies: WorkHistoryCompany[];
}
