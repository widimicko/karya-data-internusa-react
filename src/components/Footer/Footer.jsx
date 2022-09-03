import "./style.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Micko Widi</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
