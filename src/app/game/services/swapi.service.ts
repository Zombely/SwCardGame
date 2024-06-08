import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import {
  IApiListParams,
  IApiListResponse,
  IApiRetrieveResponse,
  IPeople,
  IStarship,
  IVehicle,
} from '../interfaces/swapi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  // to battle rate limiting on api side service worker is used to cache the data
  private _setParams(params?: IApiListParams): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    if (params === undefined) return httpParams;
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        httpParams = httpParams.set(key, value.toString());
      }
    });
    return httpParams;
  }

  listPeople(params?: IApiListParams): Observable<IApiListResponse> {
    return this.http.get<IApiListResponse>(environment.swApi.people, {
      params: this._setParams(params),
    });
  }

  retrievePeople(uid: number): Observable<IApiRetrieveResponse<IPeople>> {
    return this.http.get<IApiRetrieveResponse<IPeople>>(
      `${environment.swApi.people}${uid}`
    );
  }

  listVehicles(params?: IApiListParams): Observable<IApiListResponse> {
    return this.http.get<IApiListResponse>(environment.swApi.vehicles, {
      params: this._setParams(params),
    });
  }

  retrieveVehicle(uid: number): Observable<IApiRetrieveResponse<IVehicle>> {
    return this.http.get<IApiRetrieveResponse<IVehicle>>(
      `${environment.swApi.vehicles}${uid}`
    );
  }

  listStarships(params?: IApiListParams): Observable<IApiListResponse> {
    return this.http.get<IApiListResponse>(environment.swApi.starships, {
      params: this._setParams(params),
    });
  }

  retrieveStarship(uid: number): Observable<IApiRetrieveResponse<IStarship>> {
    return this.http.get<IApiRetrieveResponse<IStarship>>(
      `${environment.swApi.starships}${uid}`
    );
  }
}
