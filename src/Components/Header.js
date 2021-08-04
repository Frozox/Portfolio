import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data.main && this.props.data.nav) {
         var name = this.props.data.main.name;
         var image = this.props.data.main.image;
         var networks = this.props.data.main.social.map(network => {
            return <a href={network.url} className={network.name}><i className={network.className}></i></a>
         });
         var nav = this.props.data.nav.map((nav, i) => {
            if (i === 0) {
               return <li><a href={nav.url} className="nav-link scrollto active"><i className={nav.className}></i><span>{nav.name}</span></a></li>
            } else {
               return <li><a href={nav.url} className="nav-link scrollto"><i className={nav.className}></i><span>{nav.name}</span></a></li>
            }
         });

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
                        {nav}
                     </ul>
                  </nav>
               </div>
            </header>
         );
      }

      return null;
   }
}

export default Header;
