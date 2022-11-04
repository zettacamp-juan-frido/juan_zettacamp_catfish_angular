import { Company } from './company.model';

export interface Mentor {
  id: string;
  email: string;
  civility: string;
  first_name: string;
  last_name: string;
  company: Company;
  user_status: string;
  count_document: number;
}
