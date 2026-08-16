"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyPaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function PropertyPagination({
  currentPage,
  totalPages,
}: PropertyPaginationProps) {
  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageChange = (page: number) => {
    console.log("Go to page:", page);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
      {/* Result info */}
      <p className="text-sm text-muted-foreground">
        Page{" "}
        <span className="font-medium text-foreground">
          {currentPage}
        </span>{" "}
        of{" "}
        <span className="font-medium text-foreground">
          {totalPages}
        </span>
      </p>

      {/* Pagination */}
      <div className="flex items-center gap-1">
        {/* Previous */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="size-9"
        >
          <ChevronLeft className="size-4" />
        </Button>

        {/* Page numbers */}
        {pages.map((page) => (
          <Button
            key={page}
            type="button"
            variant={page === currentPage ? "default" : "outline"}
            size="icon"
            onClick={() => handlePageChange(page)}
            className="size-9"
          >
            {page}
          </Button>
        ))}

        {/* Next */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="size-9"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}