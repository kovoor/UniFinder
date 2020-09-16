import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useRef, useState, useContext } from 'react'
import ReactPaginate from 'react-paginate'
import SearchForm from '../components/searchForm'
import Logo from '../components/logo'
import styles from '../styles/Search.module.css'
import dbConnect from '../utils/dbConnect'
import Uni from '../data/models/Uni'
import { UniContext } from '../contexts/UniContext'

//  filtering search results based on multiple parameters
const filterData = (data, uniName) => {
  try {
    return data.filter((uni) => uni.name.toLowerCase().includes(uniName.toLowerCase()))
  } catch (error) {
    return null
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const SearchResult = ({ newData, curPage, totalUnis, maxPage }) => {
  const {uni, setUni} = useContext(UniContext)

  const uniListRef = useRef(null) 
  const router = useRouter()
  const { uniName, eduLevel, subject, page } = router.query
  if (!newData) return <div className={styles.spinner}></div>

  const handlePagination = page => {
    const path = router.pathname
    console.log(router.pathname)
    const query = router.query
    console.log(query.page)
    query.page = page.selected + 1
    console.log(query.page)
    router.push({
      uniName, eduLevel, subject,
      pathname: path,
      query, 
    })
    uniListRef.current.scrollIntoView() 
  }

  const handleData = (data) => {
    router.push({

    })
  }


  var defaultPics = new Array("default/1.jpg", "default/2.jpg", "default/3.jpeg", "default/4.jpeg", "default/5.jpeg", "default/6.jpeg", "default/7.jpeg", "default/8.jpeg")

  function choosePic() {
    var randomNum = Math.floor(Math.random() * defaultPics.length);
    // document.getElementById("myPicture").src = myPix[randomNum];
    return defaultPics[randomNum]
  }

  const slugModifier = (uniName) => {
    var slug = uniName.toLowerCase().replace(/\s/g, '-').replace(',', '').replace('.', '').replace("'", '')
    return slug
  }

  return (
    <div className={styles.searchPage}>
      <Link href="/" passHref><Logo className={styles.logo} /></Link>
      <Head>
        <title>{uniName + ' · ' + ' Results ' + ' · ' + 'UniFinder'}  </title>
        <link rel="icon" href="/uniFinder-logo.svg" />
      </Head>

      <div className={styles.searchForm} ref={uniListRef}>
        <SearchForm uniName={uniName}/>
      </div>

      <p className={styles.searchParams}>
        Results for
        {' '}
        <span className={styles.searchParams}>{eduLevel}</span>
        {' '}
        {eduLevel ? 'in' : ''}
        {' '}
        <span className={styles.searchParams}>{subject}</span>
        {' '}
        {subject ? 'at' : ''}
        {' '}
        <span className={styles.searchParams}>{uniName}</span>
      </p>

      {newData.length == 0 ? '' : <div>
        <button className={styles.filters}>Tuition costs</button>
        <button className={styles.filters}>Living costs</button>
        <button className={styles.filters}>City</button>
        <button className={styles.filters}>More filters</button>
      </div>
      }

      <ul>
        {newData.map((uni) => (
          <p key={uni._id}>
            <div className={styles.container}>
              {/* <Link href={{pathname: "/profile/[id]",
                  query: {uni: JSON.stringify(uni)}}}
                 > */}
              {/* <Link href={{pathname: "/profile/[id]",
                  query: {uni: JSON.stringify(uni)}}}
                  as={`/profile/${slugModifier(uni.name)}`}> */}

              <Link href={{
                pathname: "/[id]",
                query: { uni: JSON.stringify(uni) }
              }} as={`/${uni.id}`}>
                <a target="_blank">
                <div className={styles.card}>
                  <img src={choosePic()} className={styles.defaultImage} />
                  <div className={styles.cardInfo}>
                  <h3 className={styles.title}>{uni.name}</h3>
                  <p>
                    Tuition Costs:
                  {' '}
                    {uni.tuition ? "$" + numberWithCommas(uni.tuition) : "Unknown"}
                  </p>
                  <p>
                    Living Costs:
                  {' '}
                    {uni.tuition && uni.boardCharge ? "$" + numberWithCommas(uni.roomCharge + uni.boardCharge) : "Unknown"}
                  </p>
                  <p>
                    Estimated Total Students:
                  {' '}
                    {uni.totalStudents ? numberWithCommas(uni.totalStudents) : 'Unknown'}
                  </p>
                  <p>
                    Website:
                  {' '}
                    <a href={uni.website.includes('https') ? uni.website : 'https://' + uni.website} target="_blank" style={{ color: "#53AFFF" }}>{uni.website}</a>
                  </p>
                  <p>
                    Acceptance Rate:
                  {' '}
                    {uni.acceptRate ? uni.acceptRate + '%' : 'Unknown'}
                  </p>

                  <p className={styles.totalPrice}>
                    {uni.tuition && uni.boardCharge ? "$ " + numberWithCommas(uni.tuition + uni.roomCharge + uni.boardCharge) + " / year" : ''}
                  </p>
                    </div>
                </div>
                </a>
              </Link>
            </div>
          </p>
        ))}
      </ul>

      <ReactPaginate
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        previousLabel={curPage == 1 || newData.length == 0  ? '' : <svg className={styles.prevButton} type="button" width="20" height="20" viewBox="0 0 375 668" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 304L304 12C321 -4 347 -4 363 12C379 28 379 54 363 71L100 334L363 597C379 613 379 640 363 656C347 672 321 672 304 656L12 363C-4 347 -4 321 12 304Z" fill="black" />
        </svg>}
        nextLabel={curPage == maxPage || newData.length == 0 ? '' : <svg className={styles.nextButton} type="button" width="20" height="20" viewBox="0 0 375 668" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M363 304L71 12C54 -4 28 -4 12 12C-4 28 -4 54 12 71L275 334L12 597C-4 613 -4 640 12 656C28 672 54 672 71 656L363 363C379 347 379 321 363 304Z" fill="black" />
        </svg>}
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
        forcePage={curPage -1}
      />

      <p style={{ textAlign: "center", paddingTop: "12px" }}>1 – {totalUnis <= 10 ? totalUnis : 10} of {totalUnis} instituitions found</p>
      
      <hr />

    </div>
  )
}

export async function getServerSideProps(context) {
  dbConnect()

  const curPage = context.query.page || 1
  const perPage = 10

  var newData = await Uni.find({ "name": new RegExp(".*" + context.query.uniName + ".*", "i")})
    .skip((curPage - 1) * perPage)
    .limit(perPage)

  var newData = JSON.parse(JSON.stringify(newData))

  const totalUnis = await Uni.find({ "name": new RegExp(".*" + context.query.uniName + ".*", "i") }).countDocuments()

  console.log(context.query.uniName)
  console.log('Page', context.query.page)

  return { props: { newData, curPage, totalUnis, maxPage: Math.ceil(totalUnis / perPage), } }
}


export default SearchResult
