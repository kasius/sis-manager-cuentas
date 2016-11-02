import { Injectable } from '@angular/core';

export class Apis{
    apiGeyser:string = "https://geyserwebapi.azurewebsites.net/api/";
    apiRelayRace:string = "https://relayracewebapi.azurewebsites.net/api/";
    apiOhsas:string = "";

    changeApis(form){
        debugger;
        this.apiResource.apiGeyser = form.apiGeyser;
        this.apiResource.apiRelayRace = form.apiRelayRace;
        this.apiResource.apiOhsas = form.apiOhsas;
    }
}