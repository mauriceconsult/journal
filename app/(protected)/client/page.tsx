"use client";
import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ClientPage = () => {
  const user = currentUser();
  return <UserInfo label="Client component" user={user}/>;
};

export default ClientPage;
