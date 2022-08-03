import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"


import "./global.css";

import styles from "./App.module.css";


const post = [
  {
  id: 1,
  author: {
  avatarUrl: 'https://github.com/ArthurFilho.png',
  name: 'Arthur Filho',
  role: 'Web and Mobile developer'
  },
  content: [
    {type: 'paragraph', content: 'Fala Rapaziada'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz inspirado em um no ignite da rocket, ele foi desenvolvido com o propósito de parecer uma interface de qualquer rede social normal, com funções de comentário, like e delete no comentário!! 🚀'},
    {type: 'link' , content: '#NewProject'},
],
publishedAt: new Date('2022-07-28 10:00:00')
},
{
  id: 2,
  author: {
  avatarUrl: 'https://github.com/NickaelBruzzi.png',
  name: 'Nickael Bruzzi',
  role: 'Desenvolvedor React/React Native'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz voltado a como as pessoas poderiam ajudar a nosso planeta a não acabar e ficar totalmente saudável.'},
    {type: 'link' , content: 'SaveWorld'},
],
publishedAt: new Date('2022-07-27 20:00:00')
}
]


function App() {
  return (
    <div className="App"> 
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {post.map(post => {
          return(
          <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />
          )
        })}
      </main>
    </div>
    </div>
  )
}

export default App
