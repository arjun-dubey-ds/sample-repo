export const environment = {
  production: false,
  apiUrl: 'https://localhost:8080/portfolio-service/api/v1/',
  sso: {
    clientId: 'Reg1Dev_AM_Dev',
    redirectUri: 'http://localhost:4200/lex-portfolio-editor/ping-pe',
    issuer: 'https://authgateway1-dev.entiam.uhg.com',
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
