export interface UpcomingEvent {
  image: string;
  date: string;
  title: string;
  link: string;
}

export interface ScheduleEvent {
  id: number;
  title: string;
  day: string;
  times: string[];
  variant: "primary" | "secondary";
}
