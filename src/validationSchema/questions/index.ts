import * as yup from 'yup';

export const questionValidationSchema = yup.object().shape({
  text: yup.string().required(),
  type: yup.string().required(),
  order: yup.number().integer().nullable(),
  form_id: yup.string().nullable().required(),
});
