import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

export interface UpcomingEvents {
  name: string;
  description: string;
}

const events: UpcomingEvents[] = [
  {
    name: "තෙමඟුල 2024",
    description: "වෙසක් බැති ගී ප්‍රසංගය 2024.",
  },
  {
    name: "TKIC 2024",
    description: "An evening of christmas music.",
  },
  {
    name: "IHW 2025",
    description: "A Lenten Choral Reflection by Adler.",
  },
];

export const UpcomingEvents: FC = () => (
  <section
    id="upcoming-events"
    className="w-full py-12 md:py-24 lg:py-32 border-t"
  >
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
      <div className="space-y-3">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter">
          Upcoming Events
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 text-xs/relaxed md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Check out our upcoming events.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-8">
        {events.map((event) => (
          <Card
            key={event.name}
            className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50"
          >
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
