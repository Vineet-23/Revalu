import React from 'react'
import './styles.css'

const DeleteConfirmationPopup = ({ onCancel, onConfirm }) => {
  return (
    <div className='delete-confirmation-popup'>
      <div className='confirmation-message'>
        <h2>Delete Confirmation</h2>
        <p>Are you sure you want to delete this collection?</p>
      </div>
      <div className='confirmation-buttons'>
        <button className='confirm-btn' onClick={onConfirm}>
          Confirm
        </button>
        <button className='cancel-btn' onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default DeleteConfirmationPopup
