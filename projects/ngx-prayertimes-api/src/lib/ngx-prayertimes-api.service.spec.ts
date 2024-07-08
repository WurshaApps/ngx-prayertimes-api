import { TestBed } from '@angular/core/testing';

import { NgxPrayertimesApiService } from './ngx-prayertimes-api.service';
import { provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {
    calculationMethods,
    latitudeAdjustmentMethods,
    schoolTypes,
} from './ngx-prayertimes-api.model';

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
});
