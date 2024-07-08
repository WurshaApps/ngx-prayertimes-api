import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    getCalendarByAddressRequest,
    getCalendarByCityRequest,
    getCalendarRequest,
    getCalendarResponse,
    getHijriCalendarByAddressRequest,
    getHijriCalendarByCityRequest,
    getHijriCalendarRequest,
    midnightModes,
    schoolTypes,
} from './ngx-prayertimes-api.model';
import { UtilsService } from './utils.service';

/**
 * an Angular api client for prayertimes.com
 */
@Injectable({
    providedIn: 'root',
})
export class NgxPrayertimesApiService {
    private baseUrl = 'https://api.aladhan.com/v1';

    constructor(
        private http: HttpClient,
        private utils: UtilsService,
    ) {}

    /**
     * Returns all prayer times for a specific calendar month.
     */
    public getCalendar(p: getCalendarRequest): Observable<getCalendarResponse> {
        p.shafaq ??= 'general';
        p.school ??= schoolTypes.STANDARD_SHAFI;
        p.midnightMode ??= midnightModes.STANDARD;
        const q = { ...p, month: undefined, year: undefined };
        const month = p.month ? `/${p.month}` : '';
        const url = `${this.baseUrl}/calendar/${p.year}${month}?${this.utils.toQueryString(q)}`;
        return this.http.get<getCalendarResponse>(url);
    }

    /**
     * Returns all prayer times for a specific calendar month at a particular address.
     */
    public getCalendarByAddress(
        p: getCalendarByAddressRequest,
    ): Observable<getCalendarResponse> {
        p.shafaq ??= 'general';
        p.school ??= schoolTypes.STANDARD_SHAFI;
        p.midnightMode ??= midnightModes.STANDARD;
        const q = { ...p, month: undefined, year: undefined };
        const month = p.month ? `/${p.month}` : '';
        const url = `${this.baseUrl}/calendarByAddress/${p.year}${month}?${this.utils.toQueryString(q)}`;
        return this.http.get<getCalendarResponse>(url);
    }

    /**
     * Returns all prayer times for a specific calendar month by City.
     */
    public getCalendarByCity(
        p: getCalendarByCityRequest,
    ): Observable<getCalendarResponse> {
        p.shafaq ??= 'general';
        p.school ??= schoolTypes.STANDARD_SHAFI;
        p.midnightMode ??= midnightModes.STANDARD;
        const q = { ...p, month: undefined, year: undefined };
        const month = p.month ? `/${p.month}` : '';
        const url = `${this.baseUrl}/calendarByCity/${p.year}${month}?${this.utils.toQueryString(q)}`;
        return this.http.get<getCalendarResponse>(url);
    }

    /**
     * Returns all prayer times for a specific Hijri calendar month.
     */
    public getHijriCalendar(
        p: getHijriCalendarRequest,
    ): Observable<getCalendarResponse> {
        p.shafaq ??= 'general';
        p.school ??= schoolTypes.STANDARD_SHAFI;
        p.midnightMode ??= midnightModes.STANDARD;
        const q = { ...p, month: undefined, year: undefined };
        const month = p.month ? `/${p.month}` : '';
        const url = `${this.baseUrl}/hijriCalendar/${p.year}${month}?${this.utils.toQueryString(q)}`;
        return this.http.get<getCalendarResponse>(url);
    }

    /**
     * Returns all prayer times for a specific Hijri calendar month at a particular address.
     */
    public getHijriCalendarByAddress(
        p: getHijriCalendarByAddressRequest,
    ): Observable<getCalendarResponse> {
        p.shafaq ??= 'general';
        p.school ??= schoolTypes.STANDARD_SHAFI;
        p.midnightMode ??= midnightModes.STANDARD;
        const q = { ...p, month: undefined, year: undefined };
        const month = p.month ? `/${p.month}` : '';
        const url = `${this.baseUrl}/hijriCalendarByAddress/${p.year}${month}?${this.utils.toQueryString(q)}`;
        return this.http.get<getCalendarResponse>(url);
    }

    /**
     * Returns all prayer times for a specific Hijri calendar month by City.
     */
    public getHijriCalendarByCity(
        p: getHijriCalendarByCityRequest,
    ): Observable<getCalendarResponse> {
        p.shafaq ??= 'general';
        p.school ??= schoolTypes.STANDARD_SHAFI;
        p.midnightMode ??= midnightModes.STANDARD;
        const q = { ...p, month: undefined, year: undefined };
        const month = p.month ? `/${p.month}` : '';
        const url = `${this.baseUrl}/hijriCalendarByCity/${p.year}${month}?${this.utils.toQueryString(q)}`;
        return this.http.get<getCalendarResponse>(url);
    }
}
