import { useRouter } from "next/router";
import React, { useRef, useState, useContext, useEffect } from "react";
import styles from "../styles/Search.module.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ curPage, uniDataLength, maxPage, totalUnis }) => {

  const router = useRouter();

  const handlePagination = (page) => {
    const path = router.pathname;
    const query = router.query;
    query.page = page.selected + 1;
    router.push({
      pathname: path,
      query,
    });
    //   uniListRef.current.scrollIntoView();
  };

  return (
    <div className={styles.footer}>
      <ReactPaginate
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        previousLabel={
          curPage == 1 || uniDataLength == 0 ? (
            ""
          ) : (
            <svg
              className={styles.prevButton}
              type="button"
              width="20"
              height="20"
              viewBox="0 0 375 668"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 304L304 12C321 -4 347 -4 363 12C379 28 379 54 363 71L100 334L363 597C379 613 379 640 363 656C347 672 321 672 304 656L12 363C-4 347 -4 321 12 304Z"
                fill="black"
              />
            </svg>
          )
        }
        nextLabel={
          curPage == maxPage || uniDataLength == 0 ? (
            ""
          ) : (
            <svg
              className={styles.nextButton}
              type="button"
              width="20"
              height="20"
              viewBox="0 0 375 668"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M363 304L71 12C54 -4 28 -4 12 12C-4 28 -4 54 12 71L275 334L12 597C-4 613 -4 640 12 656C28 672 54 672 71 656L363 363C379 347 379 321 363 304Z"
                fill="black"
              />
            </svg>
          )
        }
        breakLabel={"..."}
        initialPage={curPage - 1}
        pageCount={maxPage}
        onPageChange={handlePagination}
        containerClassName={styles.paginateWrap}
        subContainerClassName={styles.paginateInner}
        pageClassName={styles.paginateLi}
        pageLinkClassName={styles.paginateA}
        activeClassName={styles.paginateActive}
        nextLinkClassName={styles.paginateNextA}
        previousLinkClassName={styles.paginatePrevA}
        breakLinkClassName={styles.paginateBreakA}
        forcePage={curPage - 1}
      />

      <p style={{ textAlign: "center", paddingTop: "12px" }}>
        1 – {totalUnis <= 10 ? totalUnis : 10} of {totalUnis} instituitions
        found
      </p>
    </div>
  );
};

export default Pagination;
