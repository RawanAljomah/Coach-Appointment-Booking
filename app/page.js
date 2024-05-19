import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/hero"
import CategorySearch from "./_components/categorySearch";
import CoachList from "./_components/coachList";
export default function Home() {
  return (
    <div>
      
   {/* Hero Section */}
   <Hero/>

    {/* Search bar + Categories */}
    <CategorySearch/>

    {/* Popular Coach List */}
    <CoachList/>
    </div>
  );
}
