import { SedeInfo } from "./address";
import { ScheduleEvent } from "./event";

export interface InfoCardLink {
  text: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface InfoCardsSectionData {
  mainImage: string;
  sedeInfo: SedeInfo;
  scheduleEvents: ScheduleEvent[];
  findUs: InfoCardLink;
  agenda: InfoCardLink;
  churchImage: string;
}
