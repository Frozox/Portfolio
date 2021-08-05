import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var image = this.props.data.image;
         var networks = this.props.data.social.map(network => {
            return (
               <a key={network.name} href={network.url} className={network.name}><i className={network.className}></i></a>
            );
         });
      }

      return (
         <header id="header">
            <div className="d-flex flex-column">
               <div className="profile">
                  <img src={image} alt="" className="img-fluid rounded-circle" />
                  <h1 className="text-light"><a href="index.html">{name}</a></h1>
                  <div className="social-links mt-3 text-center">
                     {networks}
                  </div>
               </div>
               <nav id="navbar" className="nav-menu navbar">
                  <ul>
                     <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i><span>Home</span></a></li>
                     <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i><span>À Propos</span></a></li>
                     <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i><span>Résumé</span></a></li>
                     <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i><span>Portfolio</span></a></li>
                     <li><a href="#testimonials" className="nav-link scrollto"><i className="bx bx-conversation"></i><span>Témoignages</span></a></li>
                     <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i><span>Contact</span></a></li>
                  </ul>
               </nav>
            </div>
         </header>
      );
   }
}

export default Header;
