// src/components/UserGrid.tsx
import React from "react";
import { users } from "../data";
import UserCard from "./UserCard";

const UserGrid: React.FC = () => {
  return (
    <section id="team" className=" space-y-8">
      <div className="flex flex-col gap-2 max-w-6xl md:mx-auto mx-4">
        <div className="flex content-center">
          <p className=" font-thin tracking-widest text-sm md:text-base text-slate-400">
            TEAM{" "}
          </p>
          <hr className=" w-20 sm:w-28 mx-2 my-1 self-center h-[2px] inline-block bg-orange-400" />
        </div>

        <h1 className="font-[1000] text-2xl sm:text-3xl text-balance text-black ">
          OUR TEAM
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl md:mx-auto mx-6">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </section>
  );
};

export default UserGrid;
