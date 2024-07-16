import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { AccordAccordion } from "./AccordAccordion";

export function NavAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="font-semibold hover:no-underline pt-0 ">
          DropDown
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col items-start justify-start gap-8 list-none font-semibold">
            <Link href="#">
              <li className=" hover:text-orange-400">Dropdown 1</li>
            </Link>
            <Link href="#">
              <li className="hover:text-orange-400">Dropdown 2</li>
            </Link>
            <AccordAccordion />
            <Link href="#">
              <li className="hover:text-orange-400">Dropdown 3</li>
            </Link>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
