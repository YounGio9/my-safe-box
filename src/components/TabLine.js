import React, { useContext, useState } from 'react'
import '../styles/TabLine.css'
import file from '../assets/Vectorfile.png'
import del from '../assets/Vectordelete.png'
import download from '../assets/Vectordownload.png'
import folder from '../assets/Vectorfolder.png'
import shared from '../assets/VectorShare.png'
import shareIcon from '../assets/Vectorshare.png'
import { IoPricetagOutline } from 'react-icons/io5'
import { DocsContext } from './DocsContext'
import { useModalContext } from './ModalContext'
import Modal from './Modal'

function TabLine({
  type,
  name,
  date,
  fileType,
  gestion = false,
  affect = false,
  add = false,
  share,
  id,
  users,
  background,
}) {
  const { setActiveDocs } = useContext(DocsContext)
  const { inputStyle } = useModalContext()

  const handleDelete = () => {
    alert('Document envoyé à la corbeille')
    setActiveDocs((prev) => prev.filter((doc) => doc.id !== id))
  }
  const { checkeds, setCheckeds } = useContext(DocsContext)

  const icon = {
    folder,
    file,
    shared,
  }

  const types = {
    contrat: { color: '#9B0D0D', text: 'Contrats' },
    bulletin: { color: '#2A6C60', text: 'Bulletin de paie' },
    facture: { color: '#871FD9', text: 'Factures' },
    none: { color: 'transparent', text: '' },
  }
  const noBorder = { borderRadius: 0 }

  const { color, text } = types[fileType ? fileType : 'none']

  const handleChange = (e) => {
    setCheckeds((prev) =>
      e.target.checked ? [...prev, id] : prev.filter((elem) => elem !== id)
    )
  }

  const [open, setOpen] = useState(false)

  const handleShare = () => setOpen(true)

  return (
    <div
      className="TabLine-wrapper"
      style={{
        background: background
          ? 'rgba(51, 153, 228, 0.31)'
          : 'rgba(220, 218, 218, 0.26)',
      }}
    >
      <Modal
        title={'Nouvel Utilisateur'}
        open={open}
        setOpen={setOpen}
        handleClose={() => setOpen(false)}
        actionText="Ajouter"
      >
        <form action="" encType="multipart/form-data">
          {users?.map((user) => (
            <div key={`${user.name}`}>
            <label htmlFor="" style={{width: '100%', display: 'flex', alignItems: 'center'}}>
              
              <input type="checkbox" style={{width: 20, height: 20}} /> 
              {user.name}
            </label>
              
            </div>
          ))}
        </form>
      </Modal>
      <div className="TabLine">
        <input
          type="checkbox"
          onChange={handleChange}
          className="Tab-checkbox"
          checked={checkeds.includes(id)}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={icon[type]}
            style={{ visibility: type ? 'visible' : 'hidden' }}
            className="Tab-icon"
            alt="file"
          />
          <div className={'file-infos'}>
            <span className="tab-title">{name} </span>
            {fileType && (
              <span
                style={{
                  textAlign: 'left',
                  color,
                }}
              >
                <IoPricetagOutline />{' '}
                <span style={{ fontSize: 15 }}>{text}</span>
              </span>
            )}
          </div>
        </div>

        <span className="Tab-date">{date}</span>

        <div>
          {affect && (
            <button className="general-btn" style={noBorder}>
              {' '}
              Affecter document
            </button>
          )}
          {add && (
            <button className="general-btn" style={noBorder}>
              {' '}
              Ajouter un utilisateur
            </button>
          )}
          {share && (
            <img
              src={shareIcon}
              onClick={handleShare}
              alt="delete"
              className="Tab-icon"
            />
          )}
          <img
            src={del}
            onClick={handleDelete}
            alt="delete"
            className="Tab-icon"
          />
          {!gestion && (
            <img src={download} alt="download" className="Tab-icon" />
          )}
        </div>
      </div>
    </div>
  )
}

export default TabLine
