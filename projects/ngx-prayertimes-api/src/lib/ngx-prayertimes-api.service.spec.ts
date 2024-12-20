import { TestBed } from '@angular/core/testing';

import { NgxPrayertimesApiService } from './ngx-prayertimes-api.service';
import { provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {
    calculationMethods,
    latitudeAdjustmentMethods,
    schoolTypes,
} from './api-request.model';

describe('NgxPrayertimesApiService', () => {
    let service: NgxPrayertimesApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient()],
        });
        service = TestBed.inject(NgxPrayertimesApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('#getCalendar should return real value', async () => {
        const result = await firstValueFrom(
            service.getCalendar({
                year: 2024,
                month: 5,
                latitude: 51.75865125,
                longitude: -1.25387785,
                method: calculationMethods.EGYPTIAN_GENERAL_AUTHORITY_OF_SURVEY,
                tune: '5,3,5,7,9,7',
                school: schoolTypes.STANDARD_SHAFI,
                latitudeAdjustmentMethod:
                    latitudeAdjustmentMethods.MIDDLE_OF_THE_NIGHT,
                adjustment: 1,
                iso8601: false,
            }),
        );

        expect(result).toEqual(
            jasmine.objectContaining({
                code: 200,
                status: 'OK',
            }),
        );
    });

    it('#getCalendarByAddress should return real value', async () => {
        const result = await firstValueFrom(
            service.getCalendarByAddress({
                year: 2024,
                month: 5,
                address: 'Tanta, Egypt',
                method: calculationMethods.EGYPTIAN_GENERAL_AUTHORITY_OF_SURVEY,
                tune: '5,3,5,7,9,7',
                school: schoolTypes.STANDARD_SHAFI,
                latitudeAdjustmentMethod:
                    latitudeAdjustmentMethods.MIDDLE_OF_THE_NIGHT,
                adjustment: 1,
                iso8601: false,
            }),
        );

        expect(result).toEqual(
            jasmine.objectContaining({
                code: 200,
                status: 'OK',
            }),
        );
    });

    it('#getCalendarByCity should return real value', async () => {
        const result = await firstValueFrom(
            service.getCalendarByCity({
                year: 2024,
                month: 5,
                city: 'Tanta',
                country: 'Egypt',
                method: calculationMethods.EGYPTIAN_GENERAL_AUTHORITY_OF_SURVEY,
                tune: '5,3,5,7,9,7',
                school: schoolTypes.STANDARD_SHAFI,
                latitudeAdjustmentMethod:
                    latitudeAdjustmentMethods.MIDDLE_OF_THE_NIGHT,
                adjustment: 1,
                iso8601: false,
            }),
        );

        expect(result).toEqual(
            jasmine.objectContaining({
                code: 200,
                status: 'OK',
            }),
        );
    });

    it('#getHijriCalendar should return real value', async () => {
        const result = await firstValueFrom(
            service.getHijriCalendar({
                year: 1445,
                month: 5,
                latitude: 51.75865125,
                longitude: -1.25387785,
                method: calculationMethods.EGYPTIAN_GENERAL_AUTHORITY_OF_SURVEY,
                tune: '5,3,5,7,9,7',
                school: schoolTypes.STANDARD_SHAFI,
                latitudeAdjustmentMethod:
                    latitudeAdjustmentMethods.MIDDLE_OF_THE_NIGHT,
                adjustment: 1,
                iso8601: false,
            }),
        );

        expect(result).toEqual(
            jasmine.objectContaining({
                code: 200,
                status: 'OK',
            }),
        );
    });

    it('#getHijriCalendarByAddress should return real value', async () => {
        const result = await firstValueFrom(
            service.getHijriCalendarByAddress({
                year: 1445,
                month: 5,
                address: 'Tanta, Egypt',
                method: calculationMethods.EGYPTIAN_GENERAL_AUTHORITY_OF_SURVEY,
                tune: '5,3,5,7,9,7',
                school: schoolTypes.STANDARD_SHAFI,
                latitudeAdjustmentMethod:
                    latitudeAdjustmentMethods.MIDDLE_OF_THE_NIGHT,
                adjustment: 1,
                iso8601: false,
            }),
        );

        expect(result).toEqual(
            jasmine.objectContaining({
                code: 200,
                status: 'OK',
            }),
        );
    });

    it('#getHijriCalendarByCity should return real value', async () => {
        const result = await firstValueFrom(
            service.getHijriCalendarByCity({
                year: 1445,
                month: 5,
                city: 'Tanta',
                country: 'Egypt',
                method: calculationMethods.EGYPTIAN_GENERAL_AUTHORITY_OF_SURVEY,
                tune: '5,3,5,7,9,7',
                school: schoolTypes.STANDARD_SHAFI,
                latitudeAdjustmentMethod:
                    latitudeAdjustmentMethods.MIDDLE_OF_THE_NIGHT,
                adjustment: 1,
                iso8601: false,
            }),
        );

        expect(result).toEqual(
            jasmine.objectContaining({
                code: 200,
                status: 'OK',
            }),
        );
    });

    it('#getTimings should return real value', async () => {
        const result = await firstValueFrom(
            service.getTimings({
                date: new Date('2022-05-01'),
                latitude: 51.75865125,
                longitude: -1.25387785,
                method: calculationMethods.EGYPTIAN_GENERAL_AUTHORITY_OF_SURVEY,
                tune: '5,3,5,7,9,7',
                school: schoolTypes.STANDARD_SHAFI,
                latitudeAdjustmentMethod:
                    latitudeAdjustmentMethods.MIDDLE_OF_THE_NIGHT,
                adjustment: 1,
                iso8601: false,
            }),
        );

        expect(result).toEqual(
            jasmine.objectContaining({
                code: 200,
                status: 'OK',
            }),
        );
    });

    it('#getTimingsByAddress should return real value', async () => {
        const result = await firstValueFrom(
            service.getTimingsByAddress({
                date: new Date('2022-05-01'),
                address: 'Tanta, Egypt',
                method: calculationMethods.EGYPTIAN_GENERAL_AUTHORITY_OF_SURVEY,
                tune: '5,3,5,7,9,7',
                school: schoolTypes.STANDARD_SHAFI,
                latitudeAdjustmentMethod:
                    latitudeAdjustmentMethods.MIDDLE_OF_THE_NIGHT,
                adjustment: 1,
                iso8601: false,
            }),
        );

        expect(result).toEqual(
            jasmine.objectContaining({
                code: 200,
                status: 'OK',
            }),
        );
    });

    it('#getTimingsByCity should return real value', async () => {
        const result = await firstValueFrom(
            service.getTimingsByCity({
                date: new Date('2022-05-01'),
                city: 'Tanta',
                country: 'Egypt',
                method: calculationMethods.EGYPTIAN_GENERAL_AUTHORITY_OF_SURVEY,
                tune: '5,3,5,7,9,7',
                school: schoolTypes.STANDARD_SHAFI,
                latitudeAdjustmentMethod:
                    latitudeAdjustmentMethods.MIDDLE_OF_THE_NIGHT,
                adjustment: 1,
                iso8601: false,
            }),
        );

        expect(result).toEqual(
            jasmine.objectContaining({
                code: 200,
                status: 'OK',
            }),
        );
    });

    it('#getMethods should return real value', async () => {
        const result = await firstValueFrom(service.getMethods());
        expect(result).toEqual(
            jasmine.objectContaining({
                code: 200,
                status: 'OK',
            }),
        );
        expect(result.data['MWL'].id).toEqual(3);
    });
});
