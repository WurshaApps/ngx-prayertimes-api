import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import {
    calculationMethods,
    latitudeAdjustmentMethods,
    schoolTypes,
} from './ngx-prayertimes-api.model';

describe('UtilsService', () => {
    let service: UtilsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UtilsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('#toQueryString should return real value', async () => {
        const result = service.toQueryString({
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
        });
        console.log(result);
        expect(result).toEqual(
            'year=2024&month=5&latitude=51.75865125&longitude=-1.25387785&method=5&tune=5%2C3%2C5%2C7%2C9%2C7&school=0&latitudeAdjustmentMethod=1&adjustment=1&iso8601=false',
        );
    });

    it('#toQueryString should ignore undefined values', async () => {
        const result = service.toQueryString({
            year: 2024,
            month: undefined,
            latitude: 51.75865125,
            longitude: -1.25387785,
            method: calculationMethods.EGYPTIAN_GENERAL_AUTHORITY_OF_SURVEY,
            tune: '5,3,5,7,9,7',
            school: schoolTypes.STANDARD_SHAFI,
            latitudeAdjustmentMethod:
                latitudeAdjustmentMethods.MIDDLE_OF_THE_NIGHT,
            adjustment: 1,
            iso8601: false,
        });
        console.log(result);
        expect(result).toEqual(
            'year=2024&latitude=51.75865125&longitude=-1.25387785&method=5&tune=5%2C3%2C5%2C7%2C9%2C7&school=0&latitudeAdjustmentMethod=1&adjustment=1&iso8601=false',
        );
    });
});
