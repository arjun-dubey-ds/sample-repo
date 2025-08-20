import { HttpParams } from '@angular/common/http';

export function buildQueryParams(params: Record<string, any>): HttpParams {
  let httpParams = new HttpParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      //If value is an array, append multiple values
      if (Array.isArray(value)) {
        value.forEach((val) => {
          httpParams = httpParams.append(key, String(val));
        });
      } else {
        httpParams = httpParams.set(key, String(value));
      }
    }
  });

  return httpParams;
}
