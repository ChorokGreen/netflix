type Props = { label: string };
export default function Button({ label }: Props) {
  return (
    <div
      className={
        "w-28 h-10 bg-gray-800 bg-opacity-50 text-center py-2 rounded hover:bg-opacity-60 cursor-pointer font-semibold"
      }
    >
      {label}
    </div>
  );
}
