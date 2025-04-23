import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../api/api.service";

@Injectable({
    providedIn: 'root'
})
export class ContactFacade{

    constructor(
        private api: API
    ) {}

    send(data: any): Observable<any>{
       return this.api.send(data);
    }

}