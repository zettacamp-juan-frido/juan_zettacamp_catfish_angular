import { Actor } from './actor.model';

export interface Movies {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  img: any;
  actor: [Actor];
}
