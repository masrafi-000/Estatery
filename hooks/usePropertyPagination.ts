import { Property } from "@/types";
import { useMemo, useState, useEffect } from "react";

interface UsePropertyPaginationProps {
  items: Property[]
  itemsPerPage?: number
}

export const usePropertyPagination = ({
    items,
    itemsPerPage = 9,
}: UsePropertyPaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return items.slice(startIndex, endIndex)
  }, [items, currentPage, itemsPerPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (typeof window !== 'undefined') {
      window.scrollTo({top:0, behavior:"smooth"})
    }
  }

  useEffect(() => {
    setCurrentPage(1)


  }, [items])

  return {
  currentPage, totalPages, paginatedItems, handlePageChange, setCurrentPage
}

}