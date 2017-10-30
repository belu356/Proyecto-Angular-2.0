import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {PostListComponent} from '../post-list/post-list.component'
import {PostService} from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class PaginationComponent {
  @Input('data') posts: string[] = [];
  page: number = 1;
}