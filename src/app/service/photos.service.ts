
import { Injectable, Signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  #apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=30';
  #httpClient = inject(HttpClient);

  getPhotos(): Observable<Photo[]> {
    return this.#httpClient.get<Photo[]>(this.#apiUrl).pipe(
      map( photos => photos.map( photo => {
        const url = photo.url.split('600/')[1];
        const thumbnailUrl = photo.url.split('150/')[1];

        return ({
          ...photo,
          url,
          thumbnailUrl
        })
      }))
    )
  }

  photos: Signal<Photo[] | undefined> = toSignal(this.getPhotos());
}
