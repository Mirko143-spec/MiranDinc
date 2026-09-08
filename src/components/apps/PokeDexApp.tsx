import type { AppContentProps } from "./registry";

interface Entry {
  number: string;
  name: string;
  types: string[];
}

const ENTRIES: Entry[] = [
  { number: "001", name: "Bulbasaur", types: ["Grass", "Poison"] },
  { number: "004", name: "Charmander", types: ["Fire"] },
  { number: "007", name: "Squirtle", types: ["Water"] },
  { number: "025", name: "Pikachu", types: ["Electric"] },
  { number: "133", name: "Eevee", types: ["Normal"] },
];

function PokeDexApp({ title }: AppContentProps) {
  return (
    <div className="text-sm">
      <p className="text-gray-400 text-xs mb-3">
        {title} &middot; {ENTRIES.length} entries
      </p>
      <ul className="space-y-2">
        {ENTRIES.map((entry) => (
          <li
            key={entry.number}
            className="flex items-center justify-between border-b border-gray-700 pb-2"
          >
            <span className="text-gray-200">
              <span className="text-gray-500 mr-2">#{entry.number}</span>
              {entry.name}
            </span>
            <span className="flex gap-1">
              {entry.types.map((type) => (
                <span
                  key={type}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-gray-700 text-gray-300"
                >
                  {type}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokeDexApp;
