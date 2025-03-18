import  "./Footer.module.css";
import "./footer.css";

const Footer = (props) => {
  return (
    <footer>
      <p>
        Feito com ❤️ por
        <a href={props.devLink}>{props.devName}</a>
      </p>
    </footer>
  );
};

export default Footer;
