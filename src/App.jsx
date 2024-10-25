import React , { useState } from 'react'
import './App.css'
import sound from  '/sound.mp3'

const App = () => {

  const [num, setNum] = useState(0)
  const [text, setText] = useState('')
  const [img, setImg] = useState(false)

  console.log(num);

  const minus = () => {
    if (num > 0) {
      setNum(num - 1)
    }
  }

  const plus = () => {
    if (num < 10) {
      setNum(num + 1)
    }
  }

  const openImgPlaySound = () => {
    setImg (!img)
    const audio = new Audio (sound)
    audio.play()
  }
  

  return (
    <>
    <div className="box">
      <h4>{num}</h4>
      <button onClick={(plus) => setNum(num + 1)}>Добавить число</button>
      <button onClick={(minus) => setNum(num - 1)}>Убавить число</button>
      <button onClick={() => setNum(0)}>Обнулить число</button>
      {/* <button onClick={() => setNum(num * 2)}>Умножить число</button> */}
    </div>


    <div className="box">
      <h4>{text}</h4>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>


    <div className="box">
      <button onClick={openImgPlaySound}>Кликни на меня</button>
      {img &&  <img onClick={() => setImg(false)} src='https://www.meme-arsenal.com/memes/dea3233d11f7375c0a85a2bc15f15183.jpg'/>}
    </div>
    </>
  )
}

export default App