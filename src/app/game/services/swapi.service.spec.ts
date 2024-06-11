import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SwapiService } from './swapi.service';
import { environment } from '../../../environments/environment.development';
import { HttpParams } from '@angular/common/http';

describe('SwapiService', () => {
  let service: SwapiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SwapiService],
    });
    service = TestBed.inject(SwapiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set params correctly', () => {
    const params = { page: 1, search: 'Test' };
    const httpParams = service['_setParams'](params);
    expect(httpParams instanceof HttpParams).toBe(true);
    expect(httpParams.get('page')).toEqual('1');
    expect(httpParams.get('search')).toEqual('Test');
  });

  it('should return empty HttpParams when no params are provided', () => {
    const httpParams = service['_setParams']();
    expect(httpParams instanceof HttpParams).toBe(true);
    expect(httpParams.keys().length).toEqual(0);
  });

  it('should fetch list of people', () => {
    service.listPeople().subscribe();
    const req = httpMock.expectOne(environment.swApi.people);
    expect(req.request.method).toBe('GET');
  });

  it('should fetch people', () => {
    const uid = 1;
    service.retrievePeople(uid).subscribe();
    const req = httpMock.expectOne(`${environment.swApi.people}${uid}`);
    expect(req.request.method).toBe('GET');
  });

  it('should fetch list of vehicles', () => {
    service.listVehicles().subscribe();
    const req = httpMock.expectOne(environment.swApi.vehicles);
    expect(req.request.method).toBe('GET');
  });

  it('should fetch vehicle', () => {
    const uid = 1;
    service.retrieveVehicle(uid).subscribe();
    const req = httpMock.expectOne(`${environment.swApi.vehicles}${uid}`);
    expect(req.request.method).toBe('GET');
  });

  it('should fetch list of starships', () => {
    service.listStarships().subscribe();
    const req = httpMock.expectOne(environment.swApi.starships);
    expect(req.request.method).toBe('GET');
  });

  it('should fetch starship', () => {
    const uid = 1;
    service.retrieveStarship(uid).subscribe();
    const req = httpMock.expectOne(`${environment.swApi.starships}${uid}`);
    expect(req.request.method).toBe('GET');
  });
});
