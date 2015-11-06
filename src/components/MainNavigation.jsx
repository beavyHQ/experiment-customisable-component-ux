import React from "react";
import Styles from "./MainNavigation.scss";

export default class MainNavigation extends React.Component{
  render(){
    return <header className={Styles.navigation} role="banner">
            <div className={Styles.navigation_wrapper}>
              <a href="javascript:void(0)" className={Styles.logo}>
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png" alt="Logo Image" />
              </a>
              <a href="javascript:void(0)" className={Styles.navigation_menu_button} id="js-mobile-menu">MENU</a>
              <nav role="navigation">
                <ul id="js-navigation-menu" className={Styles.navigation_menu + " " + Styles.show}>
                  <li className={Styles.nav_link}><a href="javascript:void(0)">Products</a></li>
                  <li className={Styles.nav_link}><a href="javascript:void(0)">About Us</a></li>
                  <li className={Styles.nav_link}><a href="javascript:void(0)">Contact</a></li>
                  <li className={Styles.nav_link + " " + Styles.more}><a href="javascript:void(0)">More</a>
                    <ul className={Styles.submenu}>
                      <li><a href="javascript:void(0)">Submenu Item</a></li>
                      <li><a href="javascript:void(0)">Another Item</a></li>
                      <li className={Styles.more}><a href="javascript:void(0)">Item with submenu</a>
                        <ul className={Styles.submenu}>
                          <li><a href="javascript:void(0)">Sub-submenu Item</a></li>
                          <li><a href="javascript:void(0)">Another Item</a></li>
                        </ul>
                      </li>
                      <li className={Styles.more}><a href="javascript:void(0)">Another submenu</a>
                        <ul className={Styles.submenu}>
                          <li><a href="javascript:void(0)">Sub-submenu</a></li>
                          <li><a href="javascript:void(0)">An Item</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className={Styles.navigation_tools}>
                <div className={Styles.search_bar}>
                  <form role="search">
                    <input type="search" placeholder="Enter Search" />
                    <button type="submit">
                      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/search-icon.png" alt="Search Icon" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
        </header>;
  }
}
