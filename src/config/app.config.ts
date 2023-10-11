interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Dynamic forms AI',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read form and questions',
    'Create, edit and delete answers',
    'Create and read feedback',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage form data', 'Manage feedback data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/bd20904a-429d-451a-82ff-46fadd9423c6',
};
