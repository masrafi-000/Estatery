"use client";
import { Button } from "@/components/ui/button";
import { staticProperties } from "@/data";
import {
  useFilterProperty,
  usePropertyPagination,
  useSearchAndFilters,
} from "@/hooks";
import { Home } from "lucide-react";
import { FilterSection } from "./property/filter-section";
import { PaginationControls } from "./property/pagination-control";
import { PropertyGrid } from "./property/property-grid";

const ITEMS_PER_PAGE: number = 9;

const AllPropertiesContent = () => {
  const { localSearch, setLocalSearch, isLoading, handleSearch, handleReset } =
    useSearchAndFilters();

  const filteredProperty = useFilterProperty();
  const {
    currentPage,
    totalPages,
    paginatedItems: paginatedProperty,
    handlePageChange,
  } = usePropertyPagination({
    items: filteredProperty,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">All Properties</h1>
        <p className="text-muted-foreground">
          Showing {filteredProperty.length} of {staticProperties.length}{" "}
          properties
        </p>
      </div>

      {/* Filter Section */}
      <FilterSection
        localSearch={localSearch}
        setLocalSearch={setLocalSearch}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />

      {/* Property Grid */}
      <PropertyGrid isLoading={isLoading} properties={paginatedProperty} />

      {/* Pagination Controls */}
      {paginatedProperty.length > 0 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {/* No properties found */}
      {!isLoading && paginatedProperty.length === 0 && (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-border p-8 text-center">
          <Home className="mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-xl font-semibold">No properties found</h3>
          <p className="mb-4 text-muted-foreground">
            Try adjusting your filters to see more results
          </p>
          <Button onClick={handleReset}>Reset Filters</Button>
        </div>
      )}
    </div>
  );
};

export default AllPropertiesContent;
