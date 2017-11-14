import { Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpParams } from "@angular/common/http";

import { NominatimConstant } from "./nominatim.constant";
import { GeocodeConfig } from "./geocode.config";
import { ReverseGeocodeConfig } from "./reversegeocode.config";
import { GeocodeResponse } from "./geocode.response";
import { ReverseGeocodeResponse } from "./reversegeocode.response";
import { Observable } from "rxjs/Observable";

@Injectable()
export class NominatimService {

  constructor(private http: HttpClient) {

  }

  getLocation(config: GeocodeConfig): Observable<GeocodeResponse[]> {
    let q = config.q || "";
    let addressdetails = config.addressdetails;
    if (addressdetails != 0 && addressdetails != 1) {
      addressdetails = 1;
    }
    let polygon_geojson = config.polygon_geojson;
    if (polygon_geojson != 0 && polygon_geojson != 1) {
      polygon_geojson = 1;
    }
    let params = new HttpParams();
    params.set("q", q);
    params.set("addressdetails", addressdetails.toString());
    params.set("polygon_geojson", polygon_geojson.toString());
    return this.http.get<GeocodeResponse[]>(NominatimConstant.GEOCODING_ENDPOINT, {
      params: params
    });
  }

  getAddress(config: ReverseGeocodeConfig): Observable<ReverseGeocodeResponse> {
    let lat = config.lat || "";
    let lon = config.lon || "";
    let addressdetails = config.addressdetails;
    if (addressdetails != 0 && addressdetails != 1) {
      addressdetails = 1;
    }
    let polygon_geojson = config.polygon_geojson;
    if (polygon_geojson != 0 && polygon_geojson != 1) {
      polygon_geojson = 1;
    }
    let params = new HttpParams();
    params.set("lat", lat.toString());
    params.set("lon", lon.toString());
    params.set("addressdetails", addressdetails.toString());
    params.set("polygon_geojson", polygon_geojson.toString());
    return this.http.get<ReverseGeocodeResponse>(NominatimConstant.REVERSE_GEOCODING_ENDPOINT, {
      params: params
    });
  }
}
