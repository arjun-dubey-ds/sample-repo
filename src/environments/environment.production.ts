export const environment = {
  production: true,
  apiUrl: 'https://{{TODO: Insert GCP Service DNS}}/portfolio-service/api/v1/',
  sso: {
    clientId: 'Reg1Dev_AM_Dev',
    redirectUri: 'http://{{TODO: Insert GCP UI DNS}}/lex-portfolio-editor/ping-pe',
    issuer: 'https://authgateway1.entiam.uhg.com',
    scope: 'openid profile address email phone',
    responseType: 'code',
    customQueryParams: {
      acr_values: 'R1_AAL1_MS-AD-Kerberos',
    },
    useSilentRefresh: true,
    disablePKCE: false,
    clearHashAfterLogin: false,
    disableHashCheck: true,
    disableIdTokenTimer: true,
    strictDiscoveryDocumentValidation: false,
  },
};
