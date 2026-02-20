import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriesService } from '../../services/series';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class NewComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private seriesService = inject(SeriesService);

  message = '';

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    channel: ['', Validators.required],
    rating: ['', [Validators.required, Validators.min(0), Validators.max(10)]]
  });

  onSubmit() {

    if (this.form.invalid) return;

    const payload = {
      title: this.form.value.title!,
      channel: this.form.value.channel!,
      rating: Number(this.form.value.rating)
    };

    this.seriesService.create(payload).subscribe(res => {

      // requisito del enunciado: mostrar id devuelto
      this.message = 'Serie creada con id: ' + res.id;

      // redirección automática
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1500);
    });
  }
}
