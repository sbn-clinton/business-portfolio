import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function AccordAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-none ">
        <AccordionTrigger className="font-semibold hover:no-underline pt-0">
          Deep Dropdown
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col items-start justify-start gap-8 list-none font-semibold">
            <Link href="#">
              <li className=" hover:text-orange-400">Deep Dropdown 1</li>
            </Link>
            <Link href="#">
              <li className="hover:text-orange-400">Deep Dropdown 2</li>
            </Link>
            <Link href="#">
              <li className="hover:text-orange-400">Deep Dropdown 3</li>
            </Link>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
