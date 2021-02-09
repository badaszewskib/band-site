import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../../services/youtube.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

interface YTPlaylistResponse {
  etag:string;
  items:YTPlaylistItem[];
  kind:string;
  pageInfo:Object[];
}

interface YTPlaylistItem {
  kind:string;
  etag:string;
  id:string;
  contentDetails:{videoId:string, videoPublishedAt:string};
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos!: any[];
  playlistId : string = 'PL96xJb8DdBjppn729ztPSAHcq95843wif';
  private unsubscribe$: Subject<any> = new Subject();
  response!:YTPlaylistResponse;

  constructor(private youTubeService: YoutubeService, private _sanitizer: DomSanitizer) {
   }

  ngOnInit() {
    // Initialize Youtube Player
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    //Get video ID's from YT API
    this.videos = [];
    this.youTubeService.getVideosForChannel(this.playlistId)
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe(obs => {
      this.response = <YTPlaylistResponse>obs;
      this.populate();
    });

  }

  populate(){
    let elem:YTPlaylistItem;
    for (elem of this.response["items"]){
      let vidId = elem["contentDetails"]["videoId"];
      this.videos.push(vidId);
    }
  }


}
