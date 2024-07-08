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

    public formatDateToDDMMYYYY(date: Date) {
        const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero if necessary
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based) and pad with leading zero if necessary
        const year = date.getFullYear(); // Get full year

        return `${day}-${month}-${year}`;
    }
}
