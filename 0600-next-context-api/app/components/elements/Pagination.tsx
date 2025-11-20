import { PageInfoParams } from '@/api/datastore/models/pagination';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface PaginationProps {
  pageInfo: PageInfoParams;
  onClick: (page?: number, limit?: number) => void;
}
const Pagination = ({ pageInfo, onClick }: PaginationProps) => {
  const limit = pageInfo.limit;
  const currentPage = pageInfo.page;
  const hasNext = pageInfo.hasNext;
  const hasPrevious = pageInfo.hasPrevious;
  const totalPage = Math.ceil((pageInfo.totalCount ?? 0) / (limit ?? 1));
  const previousPage = (currentPage ?? 1) - 1;
  const nextPage = (currentPage ?? 1) + 1;
  const pageArr = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <div className="flex justify-end">
      <ul className="flex">
        {/* 前へ */}
        <li
          className="flex items-center justify-center cursor-pointer p-2 m-2 hover:bg-primary hover:text-light"
          onClick={() => {
            if (!hasPrevious) return;
            onClick(previousPage, limit);
          }}
        >
          <div className="flex justify-center items-center h-full">
            <FontAwesomeIcon icon={faChevronLeft} className="h-[1em] w-[1em]" />
          </div>
        </li>
        {/* ページ番号 */}
        {pageArr.map((pageNum) => {
          return (
            <li
              className={`flex items-center justify-center cursor-pointer p-2 m-2 hover:bg-primary hover:text-light ${
                currentPage === pageNum && 'font-bold text-primary'
              }`}
              onClick={() => onClick(pageNum, limit)}
              key={pageNum}
            >
              {pageNum}
            </li>
          );
        })}
        {/* 次へ */}
        <li
          className="flex items-center justify-center cursor-pointer p-2 m-2 hover:bg-primary hover:text-light"
          onClick={() => {
            if (!hasNext) return;
            onClick(nextPage, limit);
          }}
        >
          <div className="flex justify-center items-center h-full">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-[1em] w-[1em]"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
