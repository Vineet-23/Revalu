import React, { useState } from 'react'

const EditCollectionPopup = ({ collection, onSave, onCancel }) => {
  const [editedCollection, setEditedCollection] = useState({ ...collection })

  const handleInputChange = event => {
    const { name, value } = event.target
    setEditedCollection(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSave = () => {
    onSave(editedCollection)
  }

  return (
    <div className='edit-collection-popup'>
      <h2>Edit Collection</h2>
      <div className='form-group'>
        <label htmlFor='collectionName'>Collection Name:</label>
        <input
          type='text'
          id='collectionName'
          name='collectionName'
          value={editedCollection.collectionName}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          name='description'
          value={editedCollection.description}
          onChange={handleInputChange}
        />
      </div>
      <div className='button-group'>
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default EditCollectionPopup
