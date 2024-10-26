import Card from "@/components/Card";
import electronics from "../../public/electronics.jpg";
import jewelry from '../../public/jewelry.jpg'
import watches from '../../public/watches.jpg'
export default function Home() {
  return (
    
       <main className="flex justify-center items-center flex-wrap gap-10 min-h-screen">
          <Card id="jewelry" src={jewelry} name= 'Accessories' description="Accessorize Your Life – Unleash Your Style with Unique Accessories That Make Every Outfit Shine!" />
          <Card id="electronics" src={electronics} name="Electronics" description="Upgrade Your Life with the Latest Tech – Shop the Best in Electronics at Unbeatable Prices!" />
          <Card id="watches" src={watches} name="Watches" description="Timeless Style Awaits – Discover Our Stunning Collection of Watches to Elevate Your Look!"/>
        </main>
        
    
  );
}
