import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

// Model
import {Account} from '../model/account/account';

// Services
import { Apis } from '../Services/api.services';
import { TokenAccess } from '../Services/token.services';

@Injectable()
export class AccountService {

    tokenApis: TokenAccess;
    apis: Apis;

    constructor(private http: Http, private _tokenAccess: TokenAccess, private _apis: Apis) {
        this.tokenApis = _tokenAccess;
        this.apis = _apis;
    }

    registerRelayRace(account: Account) {
        var token = this.tokenApis.accessTokenRelayRace;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        let body = JSON.stringify(account);
        return this.http.post(this.apis.apiRelayRace + '/Account/Register', body, { headers: headers })
            .map(response => response.json());
    }
    registerGeyser(account: Account) {
        var token = this.tokenApis.accessTokenGeyser;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        let body = JSON.stringify(account);
        return this.http.post(this.apis.apiGeyser + '/Account/Register', body, { headers: headers })
            .map(response => response.json());
    }
    registerOhsas(account: Account){
        var token = this.tokenApis.accessTokenOhsas;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        let body = JSON.stringify(account);
        return this.http.post(this.apis.apiOhsas + '/Account/Register', body, { headers: headers })
            .map(response => response.json());
    }
}