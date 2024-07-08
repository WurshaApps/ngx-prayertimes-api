import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UtilsService {
    public toQueryString(params: object): string {
        const queryString = Object.entries(params)
            .filter(([, value]) => value !== undefined)
            .map(
                ([key, value]) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
            )
            .join('&');

        return queryString;
    }
}
