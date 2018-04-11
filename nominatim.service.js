"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const nominatim_constant_1 = require("./nominatim.constant");
let NominatimService = class NominatimService {
    constructor(http) {
        this.http = http;
    }
    getLocation(config) {
        let q = config.q || "";
        let addressdetails = config.addressdetails;
        if (addressdetails != 0 && addressdetails != 1) {
            addressdetails = 1;
        }
        let polygon_geojson = config.polygon_geojson;
        if (polygon_geojson != 0 && polygon_geojson != 1) {
            polygon_geojson = 1;
        }
        let params = new http_1.HttpParams()
            .set("format", "json")
            .set("q", q)
            .set("addressdetails", addressdetails.toString())
            .set("polygon_geojson", polygon_geojson.toString());
        return this.http.get(nominatim_constant_1.NominatimConstant.GEOCODING_ENDPOINT, {
            params: params
        });
    }
    getAddress(config) {
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
        let params = new http_1.HttpParams()
            .set("format", "json")
            .set("lat", lat.toString())
            .set("lon", lon.toString())
            .set("addressdetails", addressdetails.toString())
            .set("polygon_geojson", polygon_geojson.toString());
        return this.http.get(nominatim_constant_1.NominatimConstant.REVERSE_GEOCODING_ENDPOINT, {
            params: params
        });
    }
};
NominatimService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], NominatimService);
exports.NominatimService = NominatimService;
//# sourceMappingURL=nominatim.service.js.map