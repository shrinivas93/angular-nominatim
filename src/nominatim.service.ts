import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { NominatimConstant } from "./nominatim.constant";
import { GeocodeConfig } from "./geocode.config";
import { ReverseGeocodeConfig } from "./reversegeocode.config";
import { GeocodeResponse } from "./geocode.response";
import { ReverseGeocodeResponse } from "./reversegeocode.response";

@Injectable()
export class NominatimService {
  constructor(private http: HttpClient) {}
  getLocation(config: GeocodeConfig): GeocodeResponse {
    return null;
  }
  getAddress(config: ReverseGeocodeConfig): ReverseGeocodeResponse {
    return null;
  }
}
