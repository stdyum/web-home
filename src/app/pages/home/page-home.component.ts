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
      title: 'card_schedule_title',
      description: 'card_schedule_description',
      redirect: 'schedule',
      icon: 'event_note',
    },
    {
      title: 'card_journal_title',
      description: 'card_journal_description',
      redirect: 'journal',
      icon: 'book_2',
    },
    {
      title: 'card_admin_title',
      description: 'card_admin_description',
      redirect: 'admin',
      icon: 'manage_accounts',
    },
  ];

  enrollment = input<Enrollment>()
}
