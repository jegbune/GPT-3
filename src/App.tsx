import { Article, Brand, CTA, Feature, Navbar } from './Component'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './Containers'
import './App.css'

function App() {
  const menu = [
  {
    id: 1,
    title: 'Home',
    href: '#home',
  },  
  {
    id: 1,
    title: 'What  is GPT3',
    href: '#wgpt3',
  },  
  {
    id: 1,
    title: 'Open AI',
    href: '#possibility',
  },  
  {
    id: 1,
    title: 'Case Studies',
    href: '#features',
  },  
  {
    id: 1,
    title: 'Library',
    href: '#blog',
  },  
  ]

  
  return (
    <div className="App">
      <div className='gradient__bg' >
        <Navbar menu= {menu} />
        <Header 
        content1= "Let's Build Something amazing with GPT-3 OpenAi" 
        content2 = "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of." 
        peoplecontent='1,600 people requested access a visit in last 24 hours'/>
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
