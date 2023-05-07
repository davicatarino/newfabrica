import './styles.css';
export default function Flutuante() {
  return (
    <div className="whats">
      <a
        href="https://api.whatsapp.com/send/?phone=5521979762621&text&type=phone_number&app_absent=0"
        className="z-[999]"
        target="_blank" rel="noreferrer"
      >
        <img

          src={`${process.env.PUBLIC_URL}/assets/iconzap.PNG`}
          alt="fale conosco pelo Whatsapp"
          title="fale conosco pelo Whatsapp"
        />
      </a>
    </div>
    );
}
