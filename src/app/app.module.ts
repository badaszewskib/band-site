import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DirComponent } from './components/header/dir/dir.component';
import { HighlightComponent } from './components/home/highlight/highlight.component';
import { MerchComponent } from './components/home/merch/merch.component';
import { MusicComponent } from './components/home/music/music.component';
import { VideosComponent } from './components/home/videos/videos.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsCardComponent } from './components/home/news-card/news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightComponent,
    MerchComponent,
    MusicComponent,
    VideosComponent,
    ContactComponent,
    DirComponent,
    BlogPostComponent,
    HomeComponent,
    BlogComponent,
    NewsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
