import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../styles/SearchForm.module.css'

const SearchForm = ({uniName}) => {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const handleParam = (setValue) => (e) => setValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const eduLevel = document.getElementById('eduLevel').value
    const subject = document.getElementById('subject').value
    const uniName = document.getElementById('uniName').value
    const page = 1 
    if (eduLevel === '' && subject === '' && uniName === '') {
      setError('At least one input field must be filled')
      return null
    }

    router.push(
      {
        pathname: '/search',
        query: { uniName, eduLevel, subject, page },
      },
    )

    return null
  }

  return (
    <div className={styles.searchForm}>
      <form method="get" onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Education Level*" id="eduLevel" />
        </label>
        <label>
          <input type="text" placeholder="Subject*" id="subject" />
        </label>
        <label>
          <input type="text" placeholder={uniName ? uniName : "University Name"} id="uniName" value={query} onChange={handleParam(setQuery)} />
        </label>
        <input type="submit" value="Search" />
        <p style={{ color: 'red', textAlign: 'center', fontSize: '12px' }}>{error}</p>
      </form>
    </div>
  )
}

// export async function getStaticProps() {
//     const data = await axios.get('/api/results', searchParam).then(res => res.data)
//     return {
//         props: {
//             results: data
//         },
//     }
// }

export default SearchForm
