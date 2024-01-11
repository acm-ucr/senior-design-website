const Footer = () => {
  return (
    <div
      className="Footer"
      style={{ textAlign: "center", background: "#daf0ff" }}
    >
      <div
        className="UCR"
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "orange",
          display: "inline",
        }}
      >
        UCR{" "}
      </div>
      <div
        className="Senior Designs"
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          display: "inline",
          margin: "0.25px",
        }}
      >
        Senior Designs{" "}
      </div>
      <div
        className="Copyright"
        style={{
          fontSize: "12px",
          margin: "0.25px",
        }}
      >
        Copyright © ACM UCR - All Rights Reserved.{" "}
      </div>
    </div>
  );
};

export default Footer;
