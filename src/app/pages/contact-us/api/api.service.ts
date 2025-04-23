import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class API{
    private http = inject(HttpClient);
    send(data: any): Observable<any>{
        return this.http.post(`${environment.mailme}`, data);
    }
}