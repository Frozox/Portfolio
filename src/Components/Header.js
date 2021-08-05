import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var image = this.props.data.image;
         var networks = this.props.data.social.map(network => {
            return <a href={network.url} className={network.name}><i className={network.className}></i></a>
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
                     <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                     <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>À Propos</span></a></li>
                     <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Résumé</span></a></li>
                     <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                     <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Témoignages</span></a></li>
                     <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                  </ul>
               </nav>
            </div>
         </header>
      );
   }
}

export default Header;
