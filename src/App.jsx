import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './main'

const App = () => {
  const [collections, setCollections] = useState([])

  const handleNewCollection = formData => {
    const newCollection = {
      id: collections.length + 1,
      ...formData,
      downloadCount: 0
    }
    setCollections([...collections, newCollection])
  }

  const handleDeleteCollection = id => {
    const updatedCollections = collections.filter(
      collection => collection.id !== id
    )
    setCollections(updatedCollections)
  }

  return (
    <div>
      <Header />
      <div className='content'>
        <Sidebar onNewCollection={handleNewCollection} />
        <Main
          collections={collections}
          onDelete={handleDeleteCollection}
          onNewCollection={handleNewCollection} // Pass the onNewCollection function
        />{' '}
        {/* Pass collections down to Main */}
      </div>
    </div>
  )
}

export default App
