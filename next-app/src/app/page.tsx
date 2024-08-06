import TimeDisplay from "@/components/timeDisplay";
import { parseISO } from "date-fns";

const dateStr = "2024-08-03T14:44:54Z";

export default function Home() {
  if (!dateStr) {
    return <>Whoopsiedaisy</>;
  }
  const date = parseISO(dateStr);
  return (
    <main className="h-screen w-screen overflow-auto p-10 flex flex-col items-center gap-6 text-xl">
      <TimeDisplay date={date} />
      <div>Müssen wir schon ohne dich ertragen.</div>
      <img
        src="https://media0.giphy.com/media/l0HlTHgnDtIhkoZOg/giphy.gif?cid=6c09b952g7a7c838aaggpn16vfnvjafhz2xqg866y216st0j&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
        alt=""
      />
      <div className="text-center">
        Komm zurück,
        <br />
        ein Rudel braucht seinen Leitmolf!
      </div>
    </main>
  );
}
