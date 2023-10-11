const mapping: Record<string, string> = {
  answers: 'answer',
  companies: 'company',
  feedbacks: 'feedback',
  forms: 'form',
  questions: 'question',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
