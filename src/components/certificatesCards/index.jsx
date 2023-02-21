import CardCert from "./styles";

const CertificatesCards = ({title, Icer}) => {
  return (
    <>
        <CardCert>
            <img src={Icer} alt={title} title={title}/>
        </CardCert>
    </>
  );
}

export default CertificatesCards;