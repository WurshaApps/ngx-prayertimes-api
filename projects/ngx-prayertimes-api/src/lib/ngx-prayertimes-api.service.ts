import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    getCalendarByAddressRequest,
    getCalendarByCityRequest,
    getCalendarRequest,
    getHijriCalendarByAddressRequest,
    getHijriCalendarByCityRequest,
    getHijriCalendarRequest,
    getTimingsByAddressRequest,
    getTimingsByCityRequest,
    getTimingsRequest,
    midnightModes,
    schoolTypes,
} from './api-request.model';
import {
    getCalendarResponse,
    getMethodsResponse,
    getTimingsResponse,
} from './api-response.model';
import { UtilsService } from './utils.service';

/**
 * an Angular api client for aladhan.com/prayer-times-api
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

    /**
     * Returns all the prayer times calculation methods supported by this API. For more information on how to use custom methods, see https://aladhan.com/calculation-methods.
     */
    public getMethods(): Observable<getMethodsResponse> {
        const url = `${this.baseUrl}/methods`;
        return this.http.get<getMethodsResponse>(url);
    }

    /**
     * Returns all prayer times for a specific date.
     */
    public getTimings(p: getTimingsRequest): Observable<getTimingsResponse> {
        p.shafaq ??= 'general';
        p.school ??= schoolTypes.STANDARD_SHAFI;
        p.midnightMode ??= midnightModes.STANDARD;
        const q = { ...p, date: undefined };
        const date = p.date
            ? `/${this.utils.formatDateToDDMMYYYY(p.date)}`
            : '';

        const url = `${this.baseUrl}/timings${date}?${this.utils.toQueryString(q)}`;
        return this.http.get<getTimingsResponse>(url);
    }

    /**
     * Returns all prayer times for a specific date at a particular address.
     */
    public getTimingsByAddress(
        p: getTimingsByAddressRequest,
    ): Observable<getTimingsResponse> {
        p.shafaq ??= 'general';
        p.school ??= schoolTypes.STANDARD_SHAFI;
        p.midnightMode ??= midnightModes.STANDARD;
        const q = { ...p, date: undefined };
        const date = p.date
            ? `/${this.utils.formatDateToDDMMYYYY(p.date)}`
            : '';

        const url = `${this.baseUrl}/timingsByAddress${date}?${this.utils.toQueryString(q)}`;
        return this.http.get<getTimingsResponse>(url);
    }

    /**
     * Returns all prayer times for a specific date in a particular city.
     */
    public getTimingsByCity(
        p: getTimingsByCityRequest,
    ): Observable<getTimingsResponse> {
        p.shafaq ??= 'general';
        p.school ??= schoolTypes.STANDARD_SHAFI;
        p.midnightMode ??= midnightModes.STANDARD;
        const q = { ...p, date: undefined };
        const date = p.date
            ? `/${this.utils.formatDateToDDMMYYYY(p.date)}`
            : '';

        const url = `${this.baseUrl}/timingsByCity${date}?${this.utils.toQueryString(q)}`;
        return this.http.get<getTimingsResponse>(url);
    }
}
