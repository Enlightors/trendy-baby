import React from "react";
import { getServerSession } from "next-auth";

export default async function page() {
  const session = await getServerSession();

  return (
    <div className="flex flex-col p-4 h-screen">
      <h1 className="text-2xl font-bold">Welcome, {session?.user?.name}</h1>
    </div>
  );
}
