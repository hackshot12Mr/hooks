import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const NewMovie = ({handleAdd}) => {
  const [name ,setName] = useState("")
  const [image ,setImage] = useState("")
  const [date ,setDate] = useState("")
  const [rating ,setRaiting] = useState(1)
  const handleRaiting=(x)=>setRaiting(x)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newobject={name,image,rating,date}
    handleAdd(newobject)
    closeModal()
    setImage("")
  }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      let subtitle;
      const [modalIsOpen, setIsOpen] = React.useState(false);

      function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
  return (
    <div >
          <button className='btn-add' onClick={openModal}>Add</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <form className='from-new' onSubmit={handleSubmit}>
        <label >Movie title</label>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <label >Movie poster</label>
        <input type="text" value={image} onChange={e=>setImage(e.target.value)} />
        <label >Movie date</label>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)}/>
        <StarRating raiting={rating} handleRaiting={handleRaiting}/>
        <div>
          <button className='click' type='submit'>Create</button>
          <button className='click' onClick={closeModal}>Cancel</button>
        </div>
        
      </form>
      </Modal> 
    </div>
  )
}

export default NewMovie
