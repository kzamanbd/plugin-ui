import React from "react";
import { Badge } from "@/components/ui/badge";
import { CircleCheckBig } from "lucide-react";
import { cn } from "@/lib/utils";

function MatricsPill( { className } ) {
  return (
    <Badge variant="outline" className={ cn( 'p-2.5 border! h-auto flex flex-row justify-between gap-2.5', className ) }>
      <span className="flex items-center gap-2">
        <span className="w-5! h-5! ml-2.5 text-muted-foreground">
          <CircleCheckBig size={20} />
        </span>
        <span className="font-semibold text-[14px]">Vendor Approvals</span>
      </span>
      <span className="text-destructive-foreground bg-destructive w-9 h-9 rounded-full flex justify-center items-center">15</span>
    </Badge>
  );
}

export {
  MatricsPill
}