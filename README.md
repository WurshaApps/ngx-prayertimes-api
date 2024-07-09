# ngx-prayertimes-api

[![angular](https://img.shields.io/badge/Angular-18-red?style=flat&logo=angular&logoColor=red)](https://github.com/angular/angular)
[![npm](https://img.shields.io/badge/NPM-package-red?style=flat&logo=npm)](https://www.npmjs.com/package/@wursha/ngx-prayertimes-api)
[![github](https://img.shields.io/badge/hosted-github-red?style=flat&logo=github)](https://github.com/WurshaApps/ngx-prayertimes-api)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat&logo=github)](#contributors)
[![prettier](https://img.shields.io/badge/styled_with-prettier-334551.svg?style=flat&logo=prettier)](https://github.com/prettier/prettier)
[![eslint](https://img.shields.io/badge/linted_with-ESLINT-4B32C3.svg?style=flat&logo=eslint)](https://github.com/eslint/eslint)
[![jasmine](https://img.shields.io/badge/tested_with-jasmine-8a4182.svg?style=flat&logo=jasmine)](https://github.com/jasmine/jasmine)
[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/WurshaApps/ngx-prayertimes-api/pulls)

> An Angular api client for [Prayer Times API](https://aladhan.com/prayer-times-api)

that you can use for:

-   Computing prayer times and prayer time calendars via co-ordinates
-   Computing prayer times and prayer time calendars via city and country
-   Computing prayer times and prayer time calendars via an address
-   Computing geographic co-ordinates and timezone by city and country

## Features

-   ✅ Covers all prayertimes APIs.
-   ✅ Using observable for all requests
-   ✅ MIT Licensed
-   ✅ Strongly typed using TypeScript
-   ✅ Supports standalone Angular.

## Table of Contents

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

-   [ngx-prayertimes-api](#ngx-prayertimes-api)
    -   [Features](#features)
    -   [Table of Contents](#table-of-contents)
    -   [Installation](#installation)
        -   [NPM](#npm)
        -   [Yarn](#yarn)
        -   [PNPM](#pnpm)
        -   [Bun](#bun)
    -   [Getting Started:](#getting-started)
    -   [Available API endpoints:](#available-api-endpoints)
        -   [Prayer Times Calendar](#prayer-times-calendar)
        -   [Prayer Times Calendar by address](#prayer-times-calendar-by-address)
        -   [Prayer Times Calendar by city](#prayer-times-calendar-by-city)
        -   [Prayer Times Hijri Calendar](#prayer-times-hijri-calendar)
        -   [Prayer Times Hijri Calendar by address](#prayer-times-hijri-calendar-by-address)
        -   [Prayer Times Hijri Calendar by city](#prayer-times-hijri-calendar-by-city)
        -   [Timings](#timings)
        -   [Timings By Address](#timings-by-address)
        -   [Timings By City](#timings-by-city)
        -   [Prayer Times Methods](#prayer-times-methods)
    -   [Response models:](#response-models)
        -   [getCalendarRequest](#getcalendarrequest)
        -   [getHijriCalendarRequest](#gethijricalendarrequest)
        -   [getTimingsRequest](#gettimingsrequest)
        -   [sharedCalendarRequest](#sharedcalendarrequest)
    -   [Response models:](#response-models-1)
        -   [baseResponse](#baseresponse)
        -   [getCalendarResponse](#getcalendarresponse)
        -   [getTimingsResponse](#gettimingsresponse)
        -   [getMethodsResponse](#getmethodsresponse)
    -   [Core Team](#core-team)
    -   [Other libs from the author](#other-libs-from-the-author)

<!-- TOC end -->

## Installation

### NPM

`npm install @wursha/ngx-prayertimes-api`

### Yarn

`yarn add @wursha/ngx-prayertimes-api`

### PNPM

`pnpm add @wursha/ngx-prayertimes-api`

### Bun

`bun add @wursha/ngx-prayertimes-api`

## Getting Started:

first Inject the service `NgxPrayertimesApiService` anywhere you want to use it

```ts
import { NgxPrayertimesApiService } from "ngx-prayertimes-api";

export class AppComponent {
    constructor(public service: NgxPrayertimesApiService) {}
}
```

and make sure that `HttpClient` is provided

```ts
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [... , provideHttpClient()],
};
```

now you are ready to use it.

## Available API endpoints:

### Prayer Times Calendar

```ts
getCalendar(p: getCalendarRequest): Observable<getCalendarResponse>
```

Returns all prayer times for a specific calendar month.

### Prayer Times Calendar by address

```ts
getCalendarByAddress(p: getCalendarByAddressRequest): Observable<getCalendarResponse>
```

Returns all prayer times for a specific calendar month at a particular address.

### Prayer Times Calendar by city

```ts
getCalendarByCity(p: getCalendarByCityRequest): Observable<getCalendarResponse>
```

Returns all prayer times for a specific calendar month by City.

### Prayer Times Hijri Calendar

```ts
getHijriCalendar(p: getHijriCalendarRequest): Observable<getCalendarResponse>
```

Returns all prayer times for a specific Hijri calendar month.

### Prayer Times Hijri Calendar by address

```ts
getHijriCalendarByAddress(p: getHijriCalendarByAddressRequest): Observable<getCalendarResponse>
```

Returns all prayer times for a specific Hijri calendar month at a particular address.

### Prayer Times Hijri Calendar by city

```ts
getHijriCalendarByCity(p: getHijriCalendarByCityRequest): Observable<getCalendarResponse>
```

Returns all prayer times for a specific Hijri calendar month by City.

### Timings

```ts
getTimings(p: getTimingsRequest): Observable<getTimingsResponse>
```

Returns all prayer times for a specific date.

### Timings By Address

```ts
getTimingsByAddress(p: getTimingsByAddressRequest): Observable<getTimingsResponse>
```

Returns all prayer times for a specific date at a particular address.

### Timings By City

```ts
getTimingsByCity(p: getTimingsByCityRequest): Observable<getTimingsResponse>
```

Returns all prayer times for a specific date in a particular city.

### Prayer Times Methods

```ts
getMethods(): Observable<getMethodsResponse>
```

Returns all the prayer times calculation methods supported by this API. For more information on how to use custom methods, see https://aladhan.com/calculation-methods.

## Response models:

### getCalendarRequest

```ts
interface getCalendarRequest extends sharedCalendarWithYearMonthRequest {
    /**
     * The decimal value for the latitude co-ordinate of the location you want the time computed for. Example: 51.75865125
     */
    latitude: number;
    /**
     * The decimal value for the longitude co-ordinate of the location you want the time computed for. Example: -1.25387785
     */
    longitude: number;
    /**
     * A valid timezone name. Example: Europe/London. If you do not specify this, we'll calcuate it using the co-ordinates you provide.
     */
    timezonestring?: TimeZone;
}

interface getCalendarByAddressRequest extends sharedCalendarWithYearMonthRequest {
    /**
     * An address string. Example: 1420 Austin Bluffs Parkway, Colorado Springs, CO OR 25 Hampstead High Street, London, NW3 1RL, United Kingdom OR Sultanahmet Mosque, Istanbul, Turkey
     */
    address: string;
}

interface getCalendarByCityRequest extends sharedCalendarWithYearMonthRequest {
    /**
     * A city name. Example: London
     */
    city: string;
    /**
     * A country name or 2 character alpha ISO 3166 code. Examples: GB or United Kindom
     */
    country: string;
    /**
     * State or province. A state name or abbreviation. Examples: Colorado / CO / Punjab / Bengal
     */
    state?: string;
}
```

### getHijriCalendarRequest

```ts
interface getHijriCalendarRequest extends getCalendarRequest {
    /**
     * A Hijri calendar year. Example: 1437.
     */
    year: number;
    /**
     * A Hijri calendar month. Example: 9 or 09 for Ramadan. If not specified, an annual calendar will be returned.
     */
    month?: number;
}

interface getHijriCalendarByAddressRequest extends getCalendarByAddressRequest {
    /**
     * A Hijri calendar year. Example: 1437.
     */
    year: number;
    /**
     * A Hijri calendar month. Example: 9 or 09 for Ramadan. If not specified, an annual calendar will be returned.
     */
    month?: number;
}

interface getHijriCalendarByCityRequest extends getCalendarByCityRequest {
    /**
     * A Hijri calendar year. Example: 1437.
     */
    year: number;
    /**
     * A Hijri calendar month. Example: 9 or 09 for Ramadan. If not specified, an annual calendar will be returned.
     */
    month?: number;
}
```

### getTimingsRequest

```ts
interface getTimingsRequest extends sharedCalendarWithDateRequest {
    /**
     * The decimal value for the latitude co-ordinate of the location you want the time computed for. Example: 51.75865125
     */
    latitude: number;
    /**
     * The decimal value for the longitude co-ordinate of the location you want the time computed for. Example: -1.25387785
     */
    longitude: number;
    /**
     * A valid timezone name. Example: Europe/London. If you do not specify this, we'll calcuate it using the co-ordinates you provide.
     */
    timezonestring?: TimeZone;
}

interface getTimingsByAddressRequest extends sharedCalendarWithDateRequest {
    /**
     * An address string. Example: 1420 Austin Bluffs Parkway, Colorado Springs, CO OR 25 Hampstead High Street, London, NW3 1RL, United Kingdom OR Sultanahmet Mosque, Istanbul, Turkey
     */
    address: string;
}

interface getTimingsByCityRequest extends sharedCalendarWithDateRequest {
    /**
     * A city name. Example: London
     */
    city: string;
    /**
     * A country name or 2 character alpha ISO 3166 code. Examples: GB or United Kindom
     */
    country: string;
    /**
     * State or province. A state name or abbreviation. Examples: Colorado / CO / Punjab / Bengal
     */
    state?: string;
}
```

### sharedCalendarRequest

```ts
interface sharedCalendarWithYearMonthRequest extends sharedCalendarRequest {
    /**
     * A gregorian calendar year. Example: 2014.
     */
    year: number;
    /**
     * A gregorian calendar month. Example: 8 or 08 for August. If not specified, an annual calendar will be returned.
     */
    month?: number;
}

interface sharedCalendarWithDateRequest extends sharedCalendarRequest {
    /**
     * Default's to the current date via an HTTP 301.
     */
    date: Date;
}

interface sharedCalendarRequest {
    /**
     * A prayer times calculation method. Methods identify various schools of thought about how to compute the timings. If not specified, it defaults to the closest authority based on the location or co-ordinates specified in the API call.
     */
    method: calculationMethods;
    /**
     * Which Shafaq to use if the method is Moonsighting Commitee Worldwide. Defaults to 'general'.
     */
    shafaq?: "general" | "ahmer" | "abyad";
    /**
     * Comma Separated String of integers to offset timings returned by the API in minutes. Example: 5,3,5,7,9,7. See https://aladhan.com/calculation-methods
     */
    tune?: string;
    /**
     * If you leave this empty, it defaults to Shafii.
     */
    school?: schoolTypes;
    /**
     * If you leave this empty, it defaults to Standard.
     */
    midnightMode?: midnightModes;
    /**
     * Method for adjusting times higher latitudes - for instance, if you are checking timings in the UK or Sweden.
     */
    latitudeAdjustmentMethod?: latitudeAdjustmentMethods;
    /**
     * Number of days to adjust hijri date(s). Example: 1 or 2 or -1 or -2
     */
    adjustment?: 1 | 2 | -1 | -2;
    /**
     * Whether to return the prayer times in the iso8601 format. Example: true will return 2020-07-01T02:56:00+01:00 instead of 02:56
     */
    iso8601?: boolean;
}
```

## Response models:

### baseResponse

```ts
interface baseResponse<T> {
    code: number;
    status: string;
    data: T;
}
```

### getCalendarResponse

```ts
type getCalendarResponse = baseResponse<calendarData[]>;

interface calendarData {
    timings: {
        Fajr: string;
        Sunrise: string;
        Dhuhr: string;
        Asr: string;
        Sunset: string;
        Maghrib: string;
        Isha: string;
        Imsak: string;
        Midnight: string;
    };
    date: {
        readable: string;
        timestamp: string;
        gregorian: calendarDataDate<"greg">;
        hijri: calendarDataDate<"hijri">;
    };
    meta: calendarDataMeta;
}

type calendarDataDate<T extends string> = {
    date: string;
    format: string;
    day: string;
    year: string;
    designation: {
        abbreviated: string;
        expanded: string;
    };
} & T extends "hijri"
    ? {
          weekday: { en: string; ar: string };
          month: { number: number; en: string; ar: string };
          holidays: string[];
      }
    : {
          weekday: { en: string };
          month: { number: number; en: string };
      };

interface calendarDataMeta {
    latitude: number;
    longitude: number;
    timezone: string;
    method: method;
    latitudeAdjustmentMethod: string;
    midnightMode: string;
    school: string;
    offset: {
        Imsak: number;
        Fajr: number;
        Sunrise: number;
        Dhuhr: number;
        Asr: number;
        Maghrib: number;
        Sunset: number;
        Isha: number;
        Midnight: number;
    };
}
```

### getTimingsResponse

```ts
type getTimingsResponse = baseResponse<calendarData>;
```

### getMethodsResponse

```ts
type getMethodsResponse = baseResponse<methods>;

type methods = Record<string, method>;

interface method {
    id: number;
    name: string;
    params: {
        Fajr?: number;
        Isha?: number | string;
        Maghrib?: number | string;
        Midnight?: string;
        shafaq?: string;
    };
    location: {
        latitude: number;
        longitude: number;
    };
}
```

## Core Team

<table>
  <tr>
    <td align="center"><a href="https://github.com/MuhAssar"><img src="https://avatars.githubusercontent.com/u/2022065?v=4" width="100px;" alt="Netanel Basal"/><br /><sub><b>Muhammad Assar</b></sub></a></td>
    </tr>
</table>

## Other libs from the author

If you enjoy working with TypeScript, we also recommend other libraries by the same author:

-   [ngx-hadeethenc-api](https://github.com/WurshaApps/ngx-hadeethenc-api/) - 🕋 🚀 Angular api client for hadeethenc.com
-   [@wursha/ngx-hadeethenc-api](https://www.npmjs.com/package/@wursha/ngx-hadeethenc-api) - npm package with built-in type declarations
