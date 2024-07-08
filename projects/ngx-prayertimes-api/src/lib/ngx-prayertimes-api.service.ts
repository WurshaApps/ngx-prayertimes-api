import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    categoriesResponse,
    getCalendarRequest,
    getCalendarResponse,
    hadeethsListResponse,
    hadeethsOneResponse,
    midnightModes,
    schoolTypes,
} from './ngx-prayertimes-api.model';

/**
 * an Angular api client for prayertimes.com
 */
@Injectable({
    providedIn: 'root',
})
export class NgxPrayertimesApiService {
    private baseUrl = 'https://api.aladhan.com/v1';

    constructor(private http: HttpClient) {}

    private toQueryString(params: object): string {
        const queryString = Object.entries(params)
            .filter(([, value]) => value !== undefined)
            .map(
                ([key, value]) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
            )
            .join('&');

        return queryString;
    }

    /**
     * Returns all prayer times for a specific calendar month.
     * @returns json object containing all available languages with their iso codes and native names.
     */
    public getCalendar(p: getCalendarRequest): Observable<getCalendarResponse> {
        p.shafaq ??= 'general';
        p.school ??= schoolTypes.STANDARD_SHAFI;
        p.midnightMode ??= midnightModes.STANDARD;
        const q = { ...p, month: undefined, year: undefined };
        const month = p.month ? `/${p.month}` : '';
        const url = `${this.baseUrl}/calendar/${p.year}${month}?${this.toQueryString(q)}`;
        return this.http.get<getCalendarResponse>(url);
    }

    /**
     * List all categories by language code.
     * @param language language iso code
     * @returns array of json objects each object represents a category.
     */
    public getCategoriesList(
        language: string,
    ): Observable<categoriesResponse[]> {
        const url = `${this.baseUrl}/categories/list/?language=${language}`;
        return this.http.get<categoriesResponse[]>(url);
    }

    /**
     * List root categories by language code.
     * @param language language iso code
     * @returns root categories (main categories) in specific language, it accepts language iso code and returns json array of objects each object represents a root category.
     */
    public getCategoriesRoots(
        language: string,
    ): Observable<categoriesResponse[]> {
        const url = `${this.baseUrl}/categories/roots/?language=${language}`;
        return this.http.get<categoriesResponse[]>(url);
    }

    /**
     * List Hadeeths by category id and language iso code.
     * @param p language iso code, category id, page number (optional, defaults to 1) ,Hadeeths per page(optional, defaults to 20)
     * @returns json object containing "data" object which contains array of json objects each object represents a Hadeeth basic information (id, title, translations iso codes), the second object is "meta" containing meta data required for pagination.
     */
    public getHadeethsList(p: {
        /**
         * language iso code
         */
        language: string;
        categoryId: string;
        /**
         * page number, optional, defaults to 1
         */
        page?: string;
        /**
         * Hadeeths per page, optional, defaults to 20
         */
        perPage?: string;
    }): Observable<hadeethsListResponse> {
        const url = `${this.baseUrl}/hadeeths/list/?language=${p.language}&category_id=${p.categoryId}&page=${p.page}&per_page=${p.perPage}`;
        return this.http.get<hadeethsListResponse>(url);
    }

    /**
     * Get single Hadeeth details by Hadeeth id and language iso code.
     * @param p language iso code, hadeeth id
     * @returns The response differs when the language is "Arabic" or not, if it's Arabic then it returns all Hadeeth data (id, title, Hadeeth text (matn), explanation, hints (fawaed), word meaning and references), if non Arabic it returns translated parts (id, title, Hadeeth text (matn), explanation and hints (if translated), it doesnt return reference nor word meaning as they are not translated.
     */
    public getHadeethsOne(p: {
        /**
         * language iso code
         */
        language: string;
        /**
         * hadeeth id
         */
        id: string;
    }): Observable<hadeethsOneResponse> {
        const url = `${this.baseUrl}/hadeeths/one/?language=${p.language}&id=${p.id}`;
        return this.http.get<hadeethsOneResponse>(url);
    }
}
