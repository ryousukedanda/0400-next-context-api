'use client';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface DetailCol {
  id: string;
}
const DetailCol = ({ id }: DetailCol) => {
  return (
    <div className="w-[8%] flex border-r-0 items-center py-2 px-0 text-[12px]">
      {/* todo:idを動的に */}
      <Link href={`/tasks/${id}`}>
        <div className="flex justify-center items-center rounded-[50%] h-6 w-6 shadow-[2px_2px_4px_4px_#22222210]">
          <div className="flex justify-center items-center h-full cursor-pointer">
            <FontAwesomeIcon icon={faArrowRight} className="w-[1em] h-[1em]" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DetailCol;
