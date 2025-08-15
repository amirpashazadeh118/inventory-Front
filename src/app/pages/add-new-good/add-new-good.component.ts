import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-new-good',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './add-new-good.component.html',
  styleUrls: ['./add-new-good.component.css']
})
export class AddNewGoodComponent implements OnInit {

  addGoodForm: FormGroup;
  categories: any[] = [];
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.addGoodForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      categoryRef: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.http.get<any[]>('/api/inventory/Categorization')
      .subscribe({
        next: (data) => this.categories = data,
        error: (err) => console.error('Failed to fetch categories', err)
      });
  }

  onSubmit(): void {
    if (this.addGoodForm.invalid) return;

    const payload = {
      Name: this.addGoodForm.value.name,
      Cost: this.addGoodForm.value.price,
      CategorizationRef: this.addGoodForm.value.categoryRef
    };

    this.isSubmitting = true;

    this.http.post('/api/inventory/Part', payload)
      .subscribe({
        next: (res) => {
          console.log('Good added successfully', res);
          this.addGoodForm.reset();
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error('Failed to add good', err);
          this.isSubmitting = false;
        }
      });
  }
}
