import ReactCompareImage from "react-compare-image";

export default function BeforeAfterSection() {
  return (
    <section style={{ paddingTop: "1.5rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        Comming soon before and after: These are temporary pictures
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* First comparison */}
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            marginBottom: "3rem", // add spacing here
          }}
        >
          <ReactCompareImage
            leftImage="/tempbefore.PNG"
            rightImage="/tempafter.PNG"
            alt="Detailing Comparison 1"
            sliderLineColor="#17B0EA"
          />
          <p style={{ marginTop: "0.5rem" }}>Interior deep clean</p>
        </div>

        {/* Second comparison */}
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            marginBottom: "3rem", // spacing here too (or remove if it’s last)
          }}
        >
          <ReactCompareImage
            leftImage="/tempbefore.PNG"
            rightImage="/tempafter.PNG"
            alt="Detailing Comparison 2"
            sliderLineColor="#17B0EA"
          />
          <p style={{ marginTop: "0.5rem" }}>Exterior polish and shine</p>
        </div>
      </div>
    </section>
  );
}
