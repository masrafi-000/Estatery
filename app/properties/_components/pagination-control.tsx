"use client"
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


interface PaginationControlsProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const PaginationControls = ({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationControlsProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className='mt-8 flex items-center justify-center gap-2'>
            <Button
                variant='outline'
                size='sm'
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronLeft className='h-4 w-4' />
                Previous
            </Button>

            <div className='flex gap-1'>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        size='sm'
                        onClick={() => onPageChange(page)}
                        className='min-w-[40px]'
                    >
                        {page}
                    </Button>
                ))}
            </div>

            <Button
                variant='outline'
                size='sm'
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
                <ChevronRight className='h-4 w-4' />
            </Button>
        </div>
  )
}