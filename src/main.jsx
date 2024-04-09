import React, { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import DeleteConfirmationPopup from './components/DeleteConfirmationPopup'
import NewCollectionForm from './components/NewCollectionForm'

import { BsPlusCircle } from 'react-icons/bs'

const Main = ({ collections, onDelete, onNewCollection }) => {
  const [showForm, setShowForm] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [collectionToDelete, setCollectionToDelete] = useState(null)

  const handleDelete = id => {
    setCollectionToDelete(id)
    setShowConfirmation(true)
  }

  const handleConfirmDelete = () => {
    onDelete(collectionToDelete)
    setShowConfirmation(false)
    setCollectionToDelete(null)
  }

  const handleCancelDelete = () => {
    setShowConfirmation(false)
    setCollectionToDelete(null)
  }

  const handleNewCollection = formData => {
    onNewCollection(formData)
    setShowForm(false)
  }

  // Empty collection item component with "Add New Collection" button
  const EmptyCollectionItem = () => (
    <div className='collection-item empty-collection-item'>
      <div className='add-collection-window'>
        <BsPlusCircle
          className='add-collection-btn'
          onClick={() => setShowForm(true)}
        />

        {showForm && (
          <NewCollectionForm
            onSubmit={handleNewCollection}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  )

  return (
    <main className='main'>
      <h3>My Collections</h3>
      <p>
        Introducing collections: the ability to organize your materials your way
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '-30px'
        }}
      >
        <p> Showing 118 Results</p>
      </div>
      <hr className='divider' />
      <div className='collection-list'>
        {/* Render collections */}
        {collections.map(collection => (
          <div key={collection.id} className='collection-item'>
            <div className='top-bar'>
              <div className='download-data'>
                <span>
                  Download data <IoCloudDownloadOutline />{' '}
                </span>
              </div>
              <div className='count-number'>87 </div>
              <div className='brick-icon'>
                <img src='https://i.postimg.cc/zfB8st6t/image.png' />
              </div>
              <div className='delete-btn'>
                <div
                  className='delete-icon'
                  onClick={() => handleDelete(collection.id)}
                >
                  <MdDeleteOutline />
                </div>
              </div>
            </div>
            <div className='collection-details'>
              <h4>{collection.collectionName}</h4>
              <p>{collection.description}</p>
            </div>
          </div>
        ))}
        {/* Always render empty collection item */}
        <EmptyCollectionItem />
      </div>

      {showConfirmation && (
        <DeleteConfirmationPopup
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </main>
  )
}

export default Main
