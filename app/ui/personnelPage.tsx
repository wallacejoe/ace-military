import React from "react";
import fetchFilteredPersonnel from "@/app/lib/data";

export default async function PersonnelPage({ query }: { query: string }) {
  const personnel = await fetchFilteredPersonnel(query);

  return (
    <div>
      {personnel.map((person) => (
        <div key="card" className="flex gap-5 my-2">
          <h2>
            {person.first_name} {person.last_name}:
          </h2>
          <p>{person.rank}</p>
        </div>
      ))}
    </div>
  );
}
