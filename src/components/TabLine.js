import React, { useContext } from "react"
import "../styles/TabLine.css"
import file from "../assets/Vectorfile.png"
import del from "../assets/Vectordelete.png"
import download from "../assets/Vectordownload.png"
import folder from "../assets/Vectorfolder.png"
import shared from "../assets/VectorShare.png"
import { IoPricetagOutline } from "react-icons/io5"
import { DocsContext } from "./DocsContext"

function TabLine({
  type,
  name,
  date,
  fileType,
  gestion = false,
  affect = false,
  add = false,
  id,
}) {
  const { setActiveDocs } = useContext(DocsContext)
  const handleDelete = () => {
    alert("Document envoyé à la corbeille")
    setActiveDocs((prev) => prev.filter((doc) => doc.id !== id))
  }
  const { checkeds, setCheckeds } = useContext(DocsContext)

  const icon = {
    folder,
    file,
    shared,
  }

  const types = {
    contrat: { color: "#9B0D0D", text: "Contrats" },
    bulletin: { color: "#2A6C60", text: "Bulletin de paie" },
    facture: { color: "#871FD9", text: "Factures" },
    none: { color: "transparent", text: "" },
  }

  const { color, text } = types[fileType ? fileType : "none"]

  const handleChange = (e) => {
    setCheckeds((prev) =>
      e.target.checked ? [...prev, id] : prev.filter((elem) => elem !== id)
    )
  }

  return (
    <div className="TabLine-wrapper">
      <div className="TabLine">
        <input
          type="checkbox"
          onChange={handleChange}
          className="Tab-checkbox"
          checked={checkeds.includes(id)}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={icon[type]}
            style={{ visibility: type ? "visible" : "hidden" }}
            className="Tab-icon"
            alt="file"
          />
          <div className={"file-infos"}>
            <span className="tab-title">{name} </span>
            {fileType && (
              <span
                style={{
                  textAlign: "left",
                  color,
                }}
              >
                <IoPricetagOutline />{" "}
                <span style={{ fontSize: 15 }}>{text}</span>
              </span>
            )}
          </div>
        </div>

        <span className="Tab-date">{date}</span>

        <div>
          {affect && (
            <button className="general-btn"> Affecter document</button>
          )}
          {add && (
            <button className="general-btn"> Ajouter un utilisateur</button>
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
