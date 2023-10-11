import { UserInterface } from 'interfaces/user';
import { FormInterface } from 'interfaces/form';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  user_id: string;
  form_id: string;
  rating?: number;
  comments?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  form?: FormInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  form_id?: string;
  comments?: string;
}
