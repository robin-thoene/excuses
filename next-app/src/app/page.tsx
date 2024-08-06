import TimeDisplay from "@/components/timeDisplay";
import { parseISO } from "date-fns";

const dateStr = "2024-08-03T14:44:54Z";

export default function Home() {
  if (!dateStr) {
    return <>Whoopsiedaisy</>;
  }
  const date = parseISO(dateStr);
  return (
    <main className="h-screen w-screen overflow-auto p-10 flex flex-col items-center">
      <div className="mb-4">Du hast uns verlassen seit</div>
      <TimeDisplay date={date} />
      <div className="mt-10">Es tut uns Leid, komm wieder.</div>
      <div className="mt-10 text-xl">Ein Rudel braucht seinen Leitmolf!</div>
    </main>
  );
}
