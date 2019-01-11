import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  // imageUrl = 'https://lh4.googleusercontent.com/Lwbr2DarWNy2bpaEIX-jxIfIFM_q4jvIfI8RL0w4zQKkFe-ynnrUIKtud4zaugASyI0pKJ1snHthnx2MxigaP3inZJrrJw=w1920-h915-rw';
  // tslint:disable-next-line:max-line-length
  imageUrl = 'https://media.licdn.com/dms/image/C5103AQGXC3QGe7fVUQ/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=aKO15AUM079OyR4jdf1jFdS3BtUhuaRouhqfT6NE__U';

  constructor() { }

  ngOnInit() {
  }

}
