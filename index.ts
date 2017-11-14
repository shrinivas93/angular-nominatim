import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

export { NominatimService } from "./src/nominatim.service";
export { GeocodeConfig } from "./src/geocode.config";
export { ReverseGeocodeConfig } from "./src/reversegeocode.config";
export { GeocodeResponse } from "./src/geocode.response";
export { ReverseGeocodeResponse } from "./src/reversegeocode.response";

@NgModule({
    imports: [HttpClientModule]
})
export class NominatimModule { }