import queryString from 'query-string';
import { AnswerInterface, AnswerGetQueryInterface } from 'interfaces/answer';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAnswers = async (query?: AnswerGetQueryInterface): Promise<PaginatedInterface<AnswerInterface>> => {
  return fetcher('/api/answers', {}, query);
};

export const createAnswer = async (answer: AnswerInterface) => {
  return fetcher('/api/answers', { method: 'POST', body: JSON.stringify(answer) });
};

export const updateAnswerById = async (id: string, answer: AnswerInterface) => {
  return fetcher(`/api/answers/${id}`, { method: 'PUT', body: JSON.stringify(answer) });
};

export const getAnswerById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/answers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteAnswerById = async (id: string) => {
  return fetcher(`/api/answers/${id}`, { method: 'DELETE' });
};
