export enum calculationMethods {
    SHIA_ITHNA_ASHARI_LEVA_INSTITUTE_QUM = 0,
    UNIVERSITY_OF_ISLAMIC_SCIENCES_KARACHI = 1,
    ISLAMIC_SOCIETY_OF_NORTH_AMERICA = 2,
    MUSLIM_WORLD_LEAGUE = 3,
    UMM_AL_QURA_UNIVERSITY_MAKKAH = 4,
    EGYPTIAN_GENERAL_AUTHORITY_OF_SURVEY = 5,
    INSTITUTE_OF_GEOPHYSICS_UNIVERSITY_OF_TEHRAN = 7,
    GULF_REGION = 8,
    KUWAIT = 9,
    QATAR = 10,
    MAJLIS_UGAMA_ISLAM_SINGAPURA_SINGAPORE = 11,
    UNION_ORGANIZATION_ISLAMIC_DE_FRANCE = 12,
    DIYANET_ISLERI_BASKANLIGI_TURKEY = 13,
    SPIRITUAL_ADMINISTRATION_OF_MUSLIMS_OF_RUSSIA = 14,
    MOONSIGHTING_COMMITTEE_WORLDWIDE = 15,
    DUBAI_UNOFFICIAL = 16,
    JABATAN_KEMAJUAN_ISLAM_MALAYSIA_JAKIM = 17,
    TUNISIA = 18,
    ALGERIA = 19,
    KEMENTERIAN_AGAMA_REPUBLIK_INDONESIA = 20,
    MOROCCO = 21,
    COMUNIDADE_ISLAMICA_DE_LISBOA = 22,
    MINISTRY_OF_AWQAF_ISLAMIC_AFFAIRS_AND_HOLY_PLACES_JORDAN = 23,
    CUSTOM = 99,
}

export enum schoolTypes {
    STANDARD_SHAFI = 0,
    HANAFI = 1,
}

export enum midnightModes {
    /**
     * Mid Sunset to Sunrise
     */
    STANDARD = 0,
    /**
     * Mid Sunset to Fajr
     */
    JAFARI = 1,
}

export enum latitudeAdjustmentMethods {
    MIDDLE_OF_THE_NIGHT = 1,
    ONE_SEVENTH = 2,
    ANGLE_BASED = 3,
}

export interface getCalendarRequest extends sharedCalendarWithYearMonthRequest {
    /**
     * The decimal value for the latitude co-ordinate of the location you want the time computed for. Example: 51.75865125
     */
    latitude: number;
    /**
     * The decimal value for the longitude co-ordinate of the location you want the time computed for. Example: -1.25387785
     */
    longitude: number;
    /**
     * A valid timezone name as specified on http://php.net/manual/en/timezones.php . Example: Europe/London. If you do not specify this, we'll calcuate it using the co-ordinates you provide.
     */
    timezonestring?: string;
}

export interface getCalendarByAddressRequest
    extends sharedCalendarWithYearMonthRequest {
    /**
     * An address string. Example: 1420 Austin Bluffs Parkway, Colorado Springs, CO OR 25 Hampstead High Street, London, NW3 1RL, United Kingdom OR Sultanahmet Mosque, Istanbul, Turkey
     */
    address: string;
}

export interface getCalendarByCityRequest
    extends sharedCalendarWithYearMonthRequest {
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

export interface getHijriCalendarRequest extends getCalendarRequest {
    /**
     * A Hijri calendar year. Example: 1437.
     */
    year: number;
    /**
     * A Hijri calendar month. Example: 9 or 09 for Ramadan. If not specified, an annual calendar will be returned.
     */
    month?: number;
}

export interface getHijriCalendarByAddressRequest
    extends getCalendarByAddressRequest {
    /**
     * A Hijri calendar year. Example: 1437.
     */
    year: number;
    /**
     * A Hijri calendar month. Example: 9 or 09 for Ramadan. If not specified, an annual calendar will be returned.
     */
    month?: number;
}

export interface getHijriCalendarByCityRequest
    extends getCalendarByCityRequest {
    /**
     * A Hijri calendar year. Example: 1437.
     */
    year: number;
    /**
     * A Hijri calendar month. Example: 9 or 09 for Ramadan. If not specified, an annual calendar will be returned.
     */
    month?: number;
}

export interface getTimingsRequest extends sharedCalendarWithDateRequest {
    /**
     * The decimal value for the latitude co-ordinate of the location you want the time computed for. Example: 51.75865125
     */
    latitude: number;
    /**
     * The decimal value for the longitude co-ordinate of the location you want the time computed for. Example: -1.25387785
     */
    longitude: number;
    /**
     * A valid timezone name as specified on http://php.net/manual/en/timezones.php . Example: Europe/London. If you do not specify this, we'll calcuate it using the co-ordinates you provide.
     */
    timezonestring?: string;
}

export interface getTimingsByAddressRequest
    extends sharedCalendarWithDateRequest {
    /**
     * An address string. Example: 1420 Austin Bluffs Parkway, Colorado Springs, CO OR 25 Hampstead High Street, London, NW3 1RL, United Kingdom OR Sultanahmet Mosque, Istanbul, Turkey
     */
    address: string;
}

export interface getTimingsByCityRequest extends sharedCalendarWithDateRequest {
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
    shafaq?: 'general' | 'ahmer' | 'abyad';
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
