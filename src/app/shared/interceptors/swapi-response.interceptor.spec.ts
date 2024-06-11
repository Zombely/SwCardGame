import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SwapiResponseInterceptor } from './swapi-response.interceptor';
import { Router, RouterModule } from '@angular/router';

describe('SwapiResponseInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SwapiResponseInterceptor,
          multi: true,
        },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should open a snackbar and navigate to root when an error occurs', () => {
    const errorMessage = 'An error occurred';
    const spySnackBar = spyOn(TestBed.inject(MatSnackBar), 'open');
    const spyRouter = spyOn(TestBed.inject(Router), 'navigate');

    httpClient.get('/api').subscribe({
      next: () => fail('should have failed with 500 error'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).toEqual(500);
        expect(error.error).toContain(errorMessage);
      },
    });

    const req: TestRequest = httpMock.expectOne('/api');
    req.flush(errorMessage, { status: 500, statusText: 'Server Error' });

    expect(spySnackBar).toHaveBeenCalled();
    expect(spyRouter).toHaveBeenCalledWith(['/']);
  });

  it('should not open a snackbar or navigate when status is 200', () => {
    const spySnackBar = spyOn(TestBed.inject(MatSnackBar), 'open');
    const spyRouter = spyOn(TestBed.inject(Router), 'navigate');

    httpClient.get('/api').subscribe({
      next: () => {
        expect(spySnackBar).not.toHaveBeenCalled();
        expect(spyRouter).not.toHaveBeenCalled();
      },
      error: (error: HttpErrorResponse) => fail('should not have failed'),
    });

    const req: TestRequest = httpMock.expectOne('/api');
    req.flush({}, { status: 200, statusText: 'OK' });

    expect(spySnackBar).not.toHaveBeenCalled();
    expect(spyRouter).not.toHaveBeenCalled();
  });

  afterEach(() => {
    httpMock.verify();
  });
});
