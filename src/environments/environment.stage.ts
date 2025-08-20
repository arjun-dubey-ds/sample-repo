export const environment = {
  production: false,
  apiUrl: 'https://pl-pe-medrx-service-stg.prod.internal-gcp.optum.com/portfolio-service/api/v1/',
  sso: {
    clientId: 'Reg1Stg_AM_Dev',
    redirectUri: 'https://pl-pe-medrx-stg.prod.internal-gcp.optum.com/portfolio-editor/ping-pe',
    issuer: 'https://authgateway1-stg.entiam.uhg.com',
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
