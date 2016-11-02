import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

// Services
import { Apis } from '../Services/api.services';

@Injectable()
export class TokenService {
  apiResource: string;

  constructor(private http: Http, private _apiUrl: Apis) {
    this.apiResource = _apiUrl;
  }
  getTokenGeyser() {
    let body = "grant_type=password&username=gferrada@iqs.cl&password=asdQWE123";
    var authHeader = new Headers();
    return this.http.post( this.apiResource.apiGeyser.split('api/').join('Token'), body)
      .map(res => res.json());
  },
  getTokenRelayRace() {
    let body = "grant_type=password&username=gferrada@iqs.cl&password=asdQWE123";
    var authHeader = new Headers();
    return this.http.post( this.apiResource.apiRelayRace.split('api/').join('Token'), body)
      .map(res => res.json());
  },
  getTokenToken() {
    let body = "grant_type=password&username=gferrada@iqs.cl&password=asdQWE123";
    var authHeader = new Headers();
    return this.http.post( this.apiResource.apiOhsas.split('api/').join('Token'), body)
      .map(res => res.json());
  }
}

export class TokenAccess{
  accessTokenGeyser: string = "xlM8oEYIKK9IEuSBmxpZ7UN1WsmPtsrmewJ9dfar_CWwnTbTd4j3f6OskpDnZdqO4CXgXVnEAX_T-s1mOGewTkBt8pwofUQGfyAQl8Ir3RoYZcf1B9LellHq65RC2nVpcoNGfyTUK9_nkVAKomaplVQWYNxOR4m8TE1D99dmX3O44qwPgoUNJsUbvnxfuaasqn7Of-Li7P6gtJgMlu60AAYtibo6i2u-SEP9CpPpCAR6X7GdARzIXMTVev5m3TL5N0_8kMeJUaWWmJ20BdsddLPbprvHdKcrkML6LslGb1z5xh7bY2JGGC5pDAWjqrsg9cw1rsXvW2snUWqzJhzbqL8oP2AO8DRYpfZB10i1Co70GmTQTKp5kAZbtnfYeouAdBCJeZgYmxrw7lTKUXtbauI4P6CO7D-FsTpCd1EtWmshXrBw6ODu8bMuZY0RmJKA_blUgfkI9Txy7lNockKZBJkQAWLXSe7wZ2rZX8omr-0olX9NePbQECGrWNajYHDv-W6I8BssiQqpwQjhk6NQ1FZqzuHa7XDde1hSMFJZdag";
  accessTokenRelayRace: string = "-zAmtsa5QI8TlPkCJce2pBmzXtXGkHsdgqtDTuplshhWjSBbB0KBC-FCcD6CLVRA1W4z1KmtGX_I4vYUXozIBMUWxjR20-mmbDKau_gdskvw35_dVoqQ9MMYRSEkle4ugRJdP5abKhQOaT_cB23YrwmartH499SClB5xM1GBLYbHHvuPMR7BkSobYlrZs5OZAykFRss4_aYA4oWBO5wcDjvoGkxiqKUIVlaZaNCZeJz4JiQV-mt86DD95T4f1LyoyHKvDxN3u0_GusHy_31XR10CGN_2GInMBnUDA-gqYCwIoHoHbHafdoo_QCblspWp2qMT_uXvZadfVHmgDRFyllpgAFedr0aRPjavaug7a-qzI-9YMzaAUA3z8M9y8e2-NiLW_vF54_HJ_wNm7wOrKDwhhWGPkMTeJxZt_CLY9Qjo4haeoQ7fuEkodyUnd_rqtEzrAiMOhgbYQJ_myQ4rYiL03O91_FT9oFi6ReKeCTrrfklbrZiwNYfGvrzhqa5cZH9uS1EvQ2csgzgeSLk0E5Ijtd8VPokAfmTYO8fMl0XOuPku8NAIIEbyic2Anz0tvDLqvdfaHOz-SUMvgNJOns1acBOGDplRixGQNrY4MAI"; 
  accessTokenOhsas: string;
}