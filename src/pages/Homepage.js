import React, { useState, useEffect } from "react"

import Nav from "../components/Nav"
import Picture from "../components/Picture"

const Homepage = () => {
  const [input, setInput] = useState("")
  let [data, setData] = useState(null)
  let [page, setPage] = useState(1)
  let [currentSearch, setCurrentSearch] = useState("")
  const auth = "563492ad6f91700001000001367829a1be6048299eebc21f17f9bf24"
  const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=18"
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=18&page=1`

  //圖庫網站api
  const search = async (url) => {
    setPage(2)
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    })
    let parseData = await dataFetch.json()
    setData(parseData.photos)
  }

  // 載入更多
  // 有兩種情境  一、if 當input為" "  二、 else input有輸入值
  const morepicture = async () => {
    let newURL
    if (input === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=18`
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${input}&per_page=18&page=${page}`
    }
    setPage(page + 1) // page 初始值是“1” , 載入更多時，要從第2頁載入
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    })
    let parseData = await dataFetch.json()
    setData(data.concat(parseData.photos))
  }
  //useEffect : 當 page 起初載入
  useEffect(() => {
    search(intialURL)
  }, [])

  useEffect(() => {
    if (currentSearch === "") {
      search(intialURL)
    } else {
      search(searchURL)
    }
  }, [currentSearch])

  return (
    <div style={{ minHeight: "100vh" }}>
      <Nav
        search={() => {
          //closure
          setCurrentSearch(input)
          search(searchURL)
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />
          })}
      </div>
      <div className="morePicture">
        <button onClick={morepicture}>顯示更多</button>
      </div>
    </div>
  )
}

export default Homepage
