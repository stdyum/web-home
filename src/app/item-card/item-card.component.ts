import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RedirectLinkDirective, TranslationPipe } from '@likdan/studyum-core';
import { MatIcon } from '@angular/material/icon';

export interface Item {
  title: string;
  description: string;
  redirect: string | {
    subdomain: string
    url?: string
  };
  icon: string;
}

export interface ItemExpanded {
  title: string;
  description: string;
  redirect: {
    subdomain: string
    url: string
  };
  icon: string;
}

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [
    RedirectLinkDirective,
    MatIcon,
    TranslationPipe
  ],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCardComponent {
  rawItem = input<Item | null>(null, {
    alias: 'item',
  });

  item = computed(() => {
    const item = this.rawItem();
    if (!item) return null;

    return <ItemExpanded>{
      title: item.title,
      description: item.description,
      redirect: {
        subdomain: typeof item.redirect === 'object' ? item.redirect.subdomain : item.redirect,
        url: typeof item.redirect === 'object' ? item.redirect.url : '',
      },
      icon: item.icon,
    };
  });
}
