import Button from "@/pages/common/Button";

export default function Description() {
  return (
    <div className={"flex flex-col gap-y-3"}>
      <h1 className={"text-4xl font-bold"}>Money Heist</h1>
      <div className={"flex gap-x-5"}>
        <Button label={"Play"} />
        <Button label={"My List"} />
      </div>
      <div>
        To carry out the biggest heist in history, a mysterious man called The
        Professor recruits a band of eight robbers who have a single
        characteristic : n...
      </div>
    </div>
  );
}
