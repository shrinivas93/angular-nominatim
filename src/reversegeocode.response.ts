export interface ReverseGeocodeResponse {
  readonly place_id: string;
  readonly licence: string;
  readonly osm_type: string;
  readonly osm_id: string;
  readonly boundingbox: string[];
  readonly lat: string;
  readonly lon: string;
  readonly display_name: string;
  readonly place_rank: string;
  readonly category: string;
  readonly type: string;
  readonly importance: number;
  readonly addresstype: string;
  readonly name: string;
  readonly address?: {
    country?: string;
    state?: string;
    county?: string;
    city?: string;
    suburb?: string;
    'major streets'?: string;
    'major and minor streets'?: string;
    building?: string;
  };
}
