import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;

  constructor(private notificationService: NotificationService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('martinwebsite - Dashboard');

    setTimeout(() => {
      this.notificationService.openSnackBar('Welcome!');
    });
  }
}
