import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface PagenationProps {
  hasNext?: boolean;
  hasPrevious?: boolean;
  pageArr: number[];
  currentPage?: number;
  previousPage?: number;
  nextPage?: number;
  limit?: number;
  onClick: (page?: number, limit?: number) => void;
}
const Pagenation = ({
  hasNext,
  hasPrevious,
  pageArr,
  currentPage,
  previousPage,
  nextPage,
  limit,
  onClick,
}: PagenationProps) => {
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

export default Pagenation;
