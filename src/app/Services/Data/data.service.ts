import { Injectable } from '@angular/core';
import { IAd } from 'src/app/Models/iad';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  fetchData(): IAd[] {
    return [
      {
        id: '1',
        type: 'video',
        image: '',
        video: 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4',
        from_time: '12/05/2021 06:25:00 PM',
        to_time: '12/05/2021 06:27:00 PM',
      },
      {
        id: '2',
        type: 'image',
        image:
          'https://www.bestmobile.pk/mobile-wallpapers/img_320x480/1528970958_320x480_pexels-photo-1144699.jpeg',
        video: '',
        from_time: '12/05/2021 06:28:00 PM',
        to_time: '12/05/2021 06:30:00 PM',
      },
      {
        id: '3',
        type: 'video',
        image: '',
        video: 'http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
        from_time: '12/05/2021 06:31:00 PM',
        to_time: '12/05/2021 06:33:00 PM',
      },
      {
        id: '4',
        type: 'image',
        image:
          'https://i0.wp.com/i.pinimg.com/originals/65/93/a7/6593a77ba62b2373b10075373f43efc9.jpg',
        video: '',
        from_time: '12/05/2021 06:34:00 PM',
        to_time: '12/05/2021 06:35:00 PM',
      },
      {
        id: '5',
        type: 'video',
        image: '',
        video: 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4',
        from_time: '12/05/2021 06:35:00 PM',
        to_time: '12/05/2021 06:37:00 PM',
      },
      {
        id: '6',
        type: 'image',
        image:
          'https://www.bestmobile.pk/mobile-wallpapers/img_320x480/1528970958_320x480_pexels-photo-1144699.jpeg',
        video: '',
        from_time: '12/05/2021 06:38:00 PM',
        to_time: '12/05/2021 06:40:00 PM',
      },
      {
        id: '7',
        type: 'video',
        image: '',
        video: 'http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
        from_time: '12/05/2021 06:41:00 PM',
        to_time: '12/05/2021 06:43:00 PM',
      },
      {
        id: '8',
        type: 'image',
        image:
          'https://i0.wp.com/i.pinimg.com/originals/65/93/a7/6593a77ba62b2373b10075373f43efc9.jpg',
        video: '',
        from_time: '12/05/2021 06:44:00 PM',
        to_time: '12/05/2021 06:46:00 PM',
      },
      {
        id: '9',
        type: 'image',
        image:
          'https://www.bestmobile.pk/mobile-wallpapers/img_320x480/1528970958_320x480_pexels-photo-1144699.jpeg',
        video: '',
        from_time: '12/05/2021 06:47:00 PM',
        to_time: '12/05/2021 06:50:00 PM',
      },
      {
        id: '10',
        type: 'image',
        image:
          'https://images.unsplash.com/photo-1609607847926-da4702f01fef?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&w=1000&q=80',
        video: '',
        from_time: '12/05/2021 06:51:00 PM',
        to_time: '12/05/2021 06:53:00 PM',
      },
    ];
  }
}
