import queryString from 'query-string';
import { FormInterface, FormGetQueryInterface } from 'interfaces/form';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getForms = async (query?: FormGetQueryInterface): Promise<PaginatedInterface<FormInterface>> => {
  return fetcher('/api/forms', {}, query);
};

export const createForm = async (form: FormInterface) => {
  return fetcher('/api/forms', { method: 'POST', body: JSON.stringify(form) });
};

export const updateFormById = async (id: string, form: FormInterface) => {
  return fetcher(`/api/forms/${id}`, { method: 'PUT', body: JSON.stringify(form) });
};

export const getFormById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/forms/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteFormById = async (id: string) => {
  return fetcher(`/api/forms/${id}`, { method: 'DELETE' });
};
