import React, { useEffect, useState } from "react";
import AtomButton from "./Button";
import ArrowIconRight from "../svg/right-arrow-dark.svg?react";
import LeftIconArrow from "../svg/left-arrow.svg?react";
import RightArrow from "../svg/right-arrow.svg?react";

const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

const AtomPagination = (totalCount, pageSize, itemPerPage, onPageChange) => {
  const [totalPage, setTotalPage] = useState(0);
  const [props, setProps] = useState({
    currentPage: 1,
    isBackBtnEnabled: true,
    isNextBtnEnabled: true,
    pageRange: [],
    pageNumber: 1,
  });

  useEffect(() => {
    if (totalCount) {
      const totalPageRcd = Math.ceil(totalCount / itemPerPage);
      setTotalPage(totalPageRcd);
      setProps({
        ...props,
        pageRange: calculatePageRange(1, totalPageRcd),
        pageNumber: 1,
        isBackBtnEnabled: true,
        isNextBtnEnabled: true,
        currentPage: 1,
      });
    }
  }, [totalCount]);

  const calculatePageRange = (page, totalPages) => {
    const start = (page - 1) * pageSize;
    let end = start + pageSize;
    end = totalPages > end ? end : totalPages;
    return range(start + 1, end);
  };

  const nextPageBtnHandler = () => {
    const { pageNumber } = props;
    const page = pageNumber + 1;
    const currentPage = pageNumber * pageSize + 1;
    setProps({
      ...props,
      pageNumber: page,
      currentPage: pageNumber * pageSize + 1,
      isBackBtnEnabled: true,
      isNextBtnEnabled: true,
      pageRange: calculatePageRange(page, totalPage),
    });
    if (onPageChange) {
      onPageChange(currentPage);
    }
  };

  const backPageBtnHandler = () => {
    const { pageNumber } = props;
    const page = pageNumber - 1;
    const currentPage = page * pageSize - pageSize + 1;
    setProps({
      ...props,
      pageNumber: page,
      currentPage: currentPage,
      isBackBtnEnabled: true,
      isNextBtnEnabled: true,
      pageRange: calculatePageRange(page, totalPage),
    });
    if (onPageChange) {
      onPageChange(currentPage);
    }
  };

  const onPageSelect = (page) => {
    setProps({
      ...props,
      currentPage: page,
      isBackBtnEnabled: true,
      isNextBtnEnabled: true,
    });
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center border-spacing-0 border border-slate-600">
      <div
        className={(props.isBackBtnEnabled ?? "visible") + `pl-[0.8125rem] m-0`}
        onClick={backPageBtnHandler}
      >
        <LeftIconArrow />
        <ArrowIconRight />
      </div>
      {props?.pageRange?.map((idx) => (
        <AtomButton
          variant="outlined"
          className={
            idx === props.currentPage
              ? `max-w-2 max-h-2 min-w-2 min-h-2 m-[0.25rem] border-r-[0.75rem] border-solid border-spacing-[0.063rem] border-black cursor-pointer hover: bg-white text-slate-950`
              : `max-w-2 max-h-2 min-w-2 min-h-2 m-[0.25rem] border-r-[0.75rem] border-solid border-spacing-[0.063rem] border-black cursor-pointer hover: bg-white text-slate-950`
          }
          onClick={() => onPageSelect(idx)}
          key={idx}
        >
          {idx}
        </AtomButton>
      ))}
      {props.isNextBtnEnabled && (
        <div
          className={
            (props.isNextBtnEnabled ?? "visible") + `pl-[0.8125rem] m-0`
          }
          onClick={nextPageBtnHandler}
        >
          <RightArrow />
          <ArrowIconRight />
        </div>
      )}
    </div>
  );
};

export default AtomPagination;
