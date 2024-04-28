import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import Link from "next/link";

export const UpcomingEvents: FC = () => (
  <section
    id="upcoming-events"
    className="w-full py-12 md:py-24 lg:py-32 border-t"
  >
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Upcoming Events
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Check out our upcoming events.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
          <CardHeader>
            <CardTitle>Event 1</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              risus in augue luctus venenatis.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
              href="#"
            >
              Learn More
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
          <CardHeader>
            <CardTitle>Event 2</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              risus in augue luctus venenatis.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
              href="#"
            >
              Learn More
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
          <CardHeader>
            <CardTitle>Event 3</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              risus in augue luctus venenatis.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              className="text-sm font-medium hover:underline text-[#800020] hover:text-[#600015]"
              href="#"
            >
              Learn More
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
);
