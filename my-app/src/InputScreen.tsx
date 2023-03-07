import { useState } from "react";

export function InputScreen({
  onSubmit,
}: {
  onSubmit: (name: string) => void;
}) {
  const [name, setName] = useState("");

  return (
    <div>
      <div>
        <div>
          <p>Search for a Github Organisation</p>
          <p>Enter the org name below to list their repos</p>
        </div>
      </div>
      <div>
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            onSubmit(name);
          }}
        >
          <span>⟶</span>
        </button>
      </div>
    </div>
  );
}
