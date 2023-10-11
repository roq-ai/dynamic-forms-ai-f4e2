import { FeedbackInterface } from 'interfaces/feedback';
import { QuestionInterface } from 'interfaces/question';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface FormInterface {
  id?: string;
  title: string;
  description?: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  question?: QuestionInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    feedback?: number;
    question?: number;
  };
}

export interface FormGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  user_id?: string;
  company_id?: string;
}
