import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, HttpClientModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  sells: any[] = [];
  buys: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const params = new HttpParams()
      .set('state', '2');

    this.http.get<any[]>('/api/inventory/Order', { params }).subscribe({
      next: (res) => {
        this.sells = res;
      },
      error: (err) => {
        console.error(err);
      },
    });

    this.http.get<any[]>('/api/inventory/InventoryVoucher').subscribe({
      next: (res) => {
        this.buys = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
