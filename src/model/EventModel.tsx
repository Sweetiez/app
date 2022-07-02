import {Availability, Localisation, Schedule} from './index';

export default class EventModel {
  id: string;
  title: string;
  description: string;
  localisation: Localisation;
  schedule: Schedule;
  availability: Availability;
}
