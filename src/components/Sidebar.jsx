import React, { useState } from 'react'
import NewCollectionForm from './NewCollectionForm'
import { AiOutlineFolderAdd } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FiFolder } from 'react-icons/fi'
import { CiFolderOn } from 'react-icons/ci'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const Sidebar = ({ onNewCollection }) => {
  const [showForm, setShowForm] = useState(false)

  const handleNewCollection = formData => {
    onNewCollection(formData) 
    setShowForm(false)
  }

  return (
    <aside className='sidebar'>
      <div className='box'>
        <div className='sidebar-header'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}
          >
            <h5>My Collections</h5>
            <MdKeyboardArrowDown style={{ marginLeft: '78px' }} />
          </div>
          {/* Correct structure for collections */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}
          >
            <CiFolderOn style={{ marginRight: '5px' }} />
            <h5 style={{ margin: '0', marginBottom: '5' }}>
              Collection 1
            </h5>{' '}
            <MdKeyboardArrowLeft style={{ marginLeft: '75px' }} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}
          >
            <CiFolderOn style={{ marginRight: '5px' }} />
            <h5 style={{ margin: '0' }}>Collection 2 </h5>
            <MdKeyboardArrowLeft style={{ marginLeft: '75px' }} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}
          >
            <CiFolderOn style={{ marginRight: '5px' }} />
            <h5 style={{ margin: '0' }}>Collection 3</h5>
            <MdKeyboardArrowLeft style={{ marginLeft: '75px' }} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}
          >
            <CiFolderOn style={{ marginRight: '5px' }} />
            <h5 style={{ margin: '0' }}>Collection 4</h5>
            <MdKeyboardArrowLeft style={{ marginLeft: '75px' }} />
          </div>
        </div>
        <hr className='divider' />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px'
          }}
        >
          <div className='newcollection'>
            <AiOutlineFolderAdd
              style={{ marginRight: '5px' }}
              onClick={() => setShowForm(true)}
            />
            <h5 style={{ margin: '0' }}>New Collection</h5>
          </div>
        </div>{' '}
        {/* Moved the closing div tag */}
        {showForm && (
          <NewCollectionForm
            onSubmit={handleNewCollection}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </aside>
  )
}

export default Sidebar
