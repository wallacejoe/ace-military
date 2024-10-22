import React from "react";
import fetchFilteredPersonnel from "@/app/lib/data";
import { personnel as studData } from "@/app/lib/placeholder-data";

export default async function PersonnelPage({ query }: { query: string }) {
  //const personnel = await fetchFilteredPersonnel(query);
  const personnel = studData;

  return (
    <div>
      {personnel.map(
        (person: {
          id: string;
          first_name: string;
          last_name: string;
          rank: string;
        }) => (
          <div key="card" className="flex gap-5 my-2">
            <h2>
              {person.first_name} {person.last_name}:
            </h2>
            <p>{person.rank}</p>
          </div>
        )
      )}
    </div>
  );
}
