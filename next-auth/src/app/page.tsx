import Appbar from "@/components/Appbar";
import Image from "next/image";
import UserDetails from "./user/page";

export default function Home() {
  return (
    <div className="p-4">
      <Appbar/>
      <UserDetails/>
    </div>
  );
}
