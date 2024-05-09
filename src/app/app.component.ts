import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnrollmentsService } from '@likdan/studyum-core';
import { LoadedStateDirective, LoadingStateDirective, StateMapperComponent } from '@likdan/state-mapper';
import { PageHomeStateComponent } from './pages/home/state/page-home-state.component';
import { PageHomeComponent } from './pages/home/page-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StateMapperComponent, LoadingStateDirective, LoadedStateDirective, PageHomeStateComponent, PageHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private enrollmentsService = inject(EnrollmentsService);

  get enrollment$() {
    return this.enrollmentsService.currentEnrollmentState;
  }
}
