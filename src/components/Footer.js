import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer className="font-small pt-4 footer">
            <div className="container">
              <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                  <a className="btn-floating btn-fb mx-1" href="http://www.facebook.se">
                    <i className="fa fa-facebook"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-tw mx-1" href="http://www.twitter.se">
                    <i className="fa fa-twitter"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-gplus mx-1" href="http://www.google.se">
                    <i className="fa fa-google-plus"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-li mx-1" href="http://www.linkedin.se">
                    <i className="fa fa-linkedin"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-dribbble mx-1" href="http://www.sportbladet.se">
                    <i className="fa fa-dribbble"> </i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
              <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
            </div>
          </footer>
    )
  }
}

export default Footer;
