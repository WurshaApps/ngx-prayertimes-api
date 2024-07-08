interface baseResponse<T> {
    code: number;
    status: string;
    data: T;
}

export type getCalendarResponse = baseResponse<calendarData[]>;
export type getMethodsResponse = baseResponse<methods>;
export type getTimingsResponse = baseResponse<calendarData>;

type methods = Record<string, method>;

export interface method {
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

export interface calendarData {
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
        gregorian: calendarDataDate<'greg'>;
        hijri: calendarDataDate<'hijri'>;
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
} & T extends 'hijri'
    ? {
          weekday: { en: string; ar: string };
          month: { number: number; en: string; ar: string };
          holidays: string[];
      }
    : {
          weekday: { en: string };
          month: { number: number; en: string };
      };

export interface calendarDataMeta {
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
