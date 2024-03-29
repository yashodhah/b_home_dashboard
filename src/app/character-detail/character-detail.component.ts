import {Component, Input} from '@angular/core';
import {Character} from './character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent {
  @Input() character = new Character();
}
