import React, { useState } from 'react'
import Sidebar from './Sidebar'

const NewCollectionForm = ({ onSubmit, onClose }) => {
  const [collectionName, setCollectionName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ collectionName, description })
    setCollectionName('')
    setDescription('')
  }

  return (
    <div className='new-collection-form-overlay'>
      <div className='new-collection-form'>
        <h2>New Collection</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='collectionName'>Collection Name*</label>
            <input
              type='text'
              id='collectionName'
              value={collectionName}
              onChange={e => setCollectionName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='description'>Description*</label>
            <textarea
              id='description'
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          <div className='form-actions'>
            <button type='button' onClick={onClose}>
              Close
            </button>
            <button type='submit'>Create Collection</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default NewCollectionForm
