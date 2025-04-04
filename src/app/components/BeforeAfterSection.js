import ReactCompareImage from "react-compare-image";

export default function BeforeAfterSection() {
  return (
    <section style={{ paddingTop: "1.5rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        Before and after - Comming soon
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            marginBottom: "3rem", // add spacing here
          }}
        >
          <ReactCompareImage
            leftImage="/b4jam.png"
            rightImage="/afterJam.png"
            alt="Detailing Comparison 1"
            sliderLineColor="#17B0EA"
          />
          <p style={{ marginTop: "0.5rem" }}>Stuck on grime</p>
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            marginBottom: "3rem", // spacing here too (or remove if it’s last)
          }}
        >
          <ReactCompareImage
            leftImage="/b4mat.png"
            rightImage="/aftermat.png"
            alt="Detailing Comparison 2"
            sliderLineColor="#17B0EA"
          />
          <p style={{ marginTop: "0.5rem" }}>Floor mat restoration</p>
        </div>
      </div>
    </section>
  );
}
