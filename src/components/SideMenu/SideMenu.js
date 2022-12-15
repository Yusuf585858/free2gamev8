import './SideMenu.css';
import Homepic from '../../assets/img/Home.png';
import Controller from '../../assets/img/Controller.png';
import controls from '../../assets/img/controls.png';


import { React, useState } from 'react';
import { Link } from 'react-router-dom';
//import { BurgerMenu } from 'react-burger-menu';
//import { Sidebar } from 'react-sidebar';
//import { Sidebar, Menu, MenuItem, ProSidebarProvider } from 'react-pro-sidebar';

function SideMenu() {

  const [sb, setSb] = useState("s-i");
  const [showDefault, setShowDefault] = useState(false);
  const [AbA, setB] = useState("sideMenu");
  const [AcA, setC] = useState("none");

  const toggle = () => {

    setShowDefault(!showDefault);

    if (showDefault) {
    setC("none");
      setB("sideMenu");
      setSb("s-i");
    } else {
        setC("block");
      setB("sideMenuB");
      setSb("s-i2");
    }



  };

  return (
    <div className={AbA}>
      <div id='TtT' className={sb} onClick={toggle}></div>
      <Link className="abc" to="/" >
        <img alt='.' src={Homepic}></img>
        <h3 style={{ display: AcA }} >Home</h3>
      </Link>
      <Link className="abc" to="/allgames" >
        <img alt='.' src={Controller}></img>
        <h3 style={{ display: AcA }}>All Games</h3>
      </Link>
      <Link className="abc" to="/recentlyadded" >
        <img alt='.' src={controls}></img>
        <h3 style={{ display: AcA }}>Recently Added</h3>
      </Link>
    </div>


  );

}

export default SideMenu;






{/* <ProSidebarProvider>
<Sidebar>
  <Menu>
    <MenuItem routerLink={<Link to="/documentation" />}> Documentation</MenuItem>
    <MenuItem routerLink={<Link to="/calendar" />}> Calendar</MenuItem>
    <MenuItem routerLink={<Link to="/e-commerce" />}> E-commerce</MenuItem>
  </Menu>
</Sidebar>
</ProSidebarProvider> */}



/* return (
  <BurgerMenu>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </BurgerMenu>
); */




/* export default function SideMenu() {

 
}
 */





/* return (
  <div className="side-menu">
    <BurgerMenu>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </BurgerMenu>
  </div>
);
 */


















/* class BurgerMenu extends React.Component {
  state = {
    menuOpen: false,
  };

  handleMenuClick = () => {
    this.setState(state => ({
      menuOpen: !state.menuOpen,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleMenuClick}>
          {this.state.menuOpen ? 'Close' : 'Open'} Menu
        </button>

        {this.state.menuOpen && (
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
    );
  }
} */
