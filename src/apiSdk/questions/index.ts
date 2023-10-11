import queryString from 'query-string';
import { QuestionInterface, QuestionGetQueryInterface } from 'interfaces/question';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getQuestions = async (
  query?: QuestionGetQueryInterface,
): Promise<PaginatedInterface<QuestionInterface>> => {
  return fetcher('/api/questions', {}, query);
};

export const createQuestion = async (question: QuestionInterface) => {
  return fetcher('/api/questions', { method: 'POST', body: JSON.stringify(question) });
};

export const updateQuestionById = async (id: string, question: QuestionInterface) => {
  return fetcher(`/api/questions/${id}`, { method: 'PUT', body: JSON.stringify(question) });
};

export const getQuestionById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/questions/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteQuestionById = async (id: string) => {
  return fetcher(`/api/questions/${id}`, { method: 'DELETE' });
};
