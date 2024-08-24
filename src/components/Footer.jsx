import FooterStyle from "../scss/footer.module.scss";

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
        <p>R2105-SECKIN {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer