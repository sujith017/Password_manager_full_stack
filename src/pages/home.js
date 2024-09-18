import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './home.css'

const colorList = ['yellow', 'green', 'orange', 'brown', 'blue']

const Home = () => {
  const [isTrue, setIsTrue] = useState(false)
  const [latestList, setLatestList] = useState([])
  const [website, setWebsite] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isShow, setIsShow] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const listenWebsite = e => {
    setWebsite(e.target.value)
  }

  const listenUsername = e => {
    setUsername(e.target.value)
  }

  const listenPassword = e => {
    setPassword(e.target.value)
  }

  const addContent = e => {
    e.preventDefault()
    const initial = website.slice(0, 1).toUpperCase()
    const classValue = colorList[Math.floor(Math.random() * colorList.length)]
    const newValues = {
      id: uuidv4(),
      initialValue: initial,
      websiteName: website,
      userName: username,
      Password: password,
      classAdd: classValue,
    }
    setLatestList(prevList => [...prevList, newValues])
    setWebsite('')
    setUsername('')
    setPassword('')
    setIsTrue(true)
    setSearchInput('')
  }

  const showPassword = e => {
    setIsShow(e.target.checked)
  }

  const searchList = e => {
    setSearchInput(e.target.value)
  }

  const deleteItem = id => {
    const newList = latestList.filter(eachValue => eachValue.id !== id)
    setLatestList(newList)
    setIsTrue(newList.length !== 0)
  }

  const newList = latestList.filter(eachValue =>
    eachValue.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        className="app-logo"
        alt="app logo"
      />
      <div className="sub-div1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          className="sub-div1-image2"
          alt="password manager"
        />
        <form className="add-details" onSubmit={addContent}>
          <h1 className="detail-heading">Add New Password</h1>
          <div className="input-holder">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              className="input-image"
              alt="website"
            />
            <input
              type="text"
              className="input-element"
              placeholder="Enter Website"
              onChange={listenWebsite}
              value={website}
            />
          </div>

          <div className="input-holder">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              className="input-image"
              alt="username"
            />
            <input
              type="text"
              className="input-element"
              placeholder="Enter Username"
              onChange={listenUsername}
              value={username}
            />
          </div>
          <div className="input-holder">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              className="input-image"
              alt="password"
            />
            <input
              type="password"
              className="input-element"
              placeholder="Enter Password"
              onChange={listenPassword}
              value={password}
            />
          </div>
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          className="sub-div1-image1"
          alt="password manager"
        />
      </div>
      <div className="sub-div2">
        <div className="first-div">
          <div className="your-password">
            <h1 className="heading-name">Your Passwords</h1>
            <p className="colored-text">{newList.length}</p>
          </div>
          <div className="search-holder">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              className="input-image"
              alt="search"
            />
            <input
              type="search"
              className="input-element"
              placeholder="Search"
              onChange={searchList}
              value={searchInput}
            />
          </div>
        </div>
        <hr />
        <div className="show-passwords">
          <input
            type="checkbox"
            className="check-box"
            id="check"
            onChange={showPassword}
          />
          <label htmlFor="check" className="label-password">
            Show Passwords
          </label>
        </div>
        {!isTrue && (
          <div className="empty-state">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              className="empty-image"
              alt="no passwords"
            />
            <p className="no-passwords">No Passwords</p>
          </div>
        )}
        {isTrue && (
          <ul className="result-container">
            {newList.map(eachValue => (
              <li className="item-list" id={eachValue.id} key={eachValue.id}>
                <p className={`initial ${eachValue.classAdd}`}>
                  {eachValue.initialValue}
                </p>
                <div className="list-content">
                  <p className="website">{eachValue.websiteName}</p>
                  <p className="website">{eachValue.userName}</p>
                  {!isShow && (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                      className="stars-image"
                      alt="stars"
                    />
                  )}
                  {isShow && <p className="website">{eachValue.Password}</p>}
                </div>
                <button
                  type="button"
                  className="del-btn"
                  data-testid="delete"
                  onClick={() => deleteItem(eachValue.id)}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                    className="del-image"
                    alt="delete"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Home
