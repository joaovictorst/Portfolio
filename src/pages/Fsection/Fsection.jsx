import React from "react";
import Pbutton from "../../components/Pbutton/Pbutton";
import Sbutton from "../../components/Sbutton/Sbutton";
import './Fsection.css'
import pdf from '../../documents/1.pdf'
import logo from '../../assets/guy.png'

export default function Fcontent(){
    return(
        <section className="container">
            <div className="container-text">
                <h1>Sou Joao Victor,</h1>
                <p>Desenvolvedor Web Front-end.</p>
                <div>
                    <a className="a-button" href='https://www.linkedin.com/in/joaovictorst/' target="_blank"><Pbutton/></a>
                    <a className="a-button" href={pdf} target="_blank"><Sbutton/></a>
                </div>
            </div>
            <div className="Fsection-img">
                <img src={logo} alt="logo" title="Logo" />
            </div>
        </section>
    )
}