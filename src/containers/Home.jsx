import Card from "../components/Card/Card"
import Logo from "../components/Logo/Logo"
import Nav from "../components/Navbar/Nav"
import Footer from "../components/Footer/Footer"
import "./Home.scss"
import { useEffect } from "react"
import { useState } from "react"

const Home = () => {
  const [data, setData] = useState([])
  const [loading, isLoading] = useState(true)
  const [error, isError] = useState(false)

  const [nextData, setNextData] = useState("")
  const [prevData, setPrevData] = useState("")

  useEffect(() => {
    fetchMethod("https://rickandmortyapi.com/api/character")
  }, [])

  const fetchMethod = (endPoint) => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((response) => {
        setData(response.results)
        setNextData(response.info.next)
        setPrevData(response.info.prev)
        isLoading(false)
      })
      .catch((error) => {
        isError(error)
      })
  }

  const nextPageHandler = () => {
    console.log("next", nextData)
    if (nextData) {
      fetchMethod(nextData)
    }
  }
  const prevPageHandler = () => {
    console.log("prev", prevData)
    if (prevData) {
      fetchMethod(prevData)
    }
  }

  console.log(data)

  return (
    <div className="home">
      <header>
        <div className="navbar">
          <Nav />
        </div>
        <Logo />
      </header>

      {loading && <div className="loading">Loading...</div>}
      <div className="list">
        {data.map((item) => (
          <Card key={item.id} info={item} />
        ))}
      </div>
      {/* next and prev btn */}
      <div className="pagination">
        {nextData && (
          <button type="button" onClick={nextPageHandler}>
            Next
          </button>
        )}
        {prevData && (
          <button type="button" onClick={prevPageHandler}>
            Prev
          </button>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default Home
