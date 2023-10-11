import { AnswerInterface } from 'interfaces/answer';
import { FormInterface } from 'interfaces/form';
import { GetQueryInterface } from 'interfaces';

export interface QuestionInterface {
  id?: string;
  text: string;
  type: string;
  form_id: string;
  order?: number;
  created_at?: any;
  updated_at?: any;
  answer?: AnswerInterface[];
  form?: FormInterface;
  _count?: {
    answer?: number;
  };
}

export interface QuestionGetQueryInterface extends GetQueryInterface {
  id?: string;
  text?: string;
  type?: string;
  form_id?: string;
}
