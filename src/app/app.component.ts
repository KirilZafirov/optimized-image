import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PhotosService } from './service/photos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage],
  providers:[
    provideImgixLoader("https://via.placeholder.com/600/"),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'image-optimization';

  photosService = inject(PhotosService);

  photos = this.photosService.photos;
}
