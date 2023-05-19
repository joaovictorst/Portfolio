import React from "react";
import Pbutton from "../../components/Pbutton/Pbutton";
import Sbutton from "../../components/Sbutton/Sbutton";
import './Fsection.css'
import pdf from '../../documents/1.pdf'
import logo from '../../assets/guy.png'
import Content from '../../assets/Content.png'

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
                <div class="loader">
                    <div class="box box-1">
                        <div class="side-left"></div>
                        <div class="side-right"></div>
                        <div class="side-top"></div>
                    </div>
                    <div class="box box-2">
                        <div class="side-left"></div>
                        <div class="side-right"></div>
                        <div class="side-top"></div>
                    </div>
                    <div class="box box-3">
                        <div class="side-left"></div>
                        <div class="side-right"></div>
                        <div class="side-top"></div>
                    </div>
                    <div class="box box-4">
                        <div class="side-left"></div>
                        <div class="side-right"></div>
                        <div class="side-top"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}