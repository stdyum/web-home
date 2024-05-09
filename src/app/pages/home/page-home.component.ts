import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Item, ItemCardComponent } from '../../item-card/item-card.component';
import { Enrollment } from '@likdan/studyum-core';

@Component({
  selector: 'page-home',
  standalone: true,
  imports: [
    ItemCardComponent,
  ],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHomeComponent {
  items: Item[] = [
    {
      title: 'Schedule',
      description: 'Browse your schedule',
      redirect: 'schedule',
      icon: 'event_note',
    },
    {
      title: 'Journal',
      description: 'View your marks',
      redirect: 'journal',
      icon: 'book_2',
    },
  ];

  enrollment = input<Enrollment>()
}
