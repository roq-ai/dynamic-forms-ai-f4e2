import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  rating: yup.number().integer().nullable(),
  comments: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  form_id: yup.string().nullable().required(),
});
