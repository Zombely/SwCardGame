import { Observable } from 'rxjs';
import { DeckType } from '../enums/deck';
import { IApiListResponse } from './swapi';

export interface IDeckConfig {
  type: DeckType;
  coverImagePath: string;
  title: string;
  isHovered: boolean;
  data$: Observable<IApiListResponse>;
  description: string;
}
