import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  // TODO: Restrict API Key, secure on front end
  apiKey : string = 'AIzaSyCdvy-eCiAWxHNcbwU3XomjgKi8YtnTyEU';

  constructor(public http: HttpClient) { }

  getVideosForChannel(playlistId:string): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + playlistId + "&part=contentDetails";
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}