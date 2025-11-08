import { useState } from "react";
import "./RSVP.css";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    companion: "",
    code: "",
    attending: "",
    hasAllergy: false,
    allergyDetails: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdoo2EP37DAgUvIyuzoVt-TeMC2VZ3Vly7eVtLZzi4To04YRQ/formResponse";

    const data = new FormData();
    data.append("entry.1641324281", formData.name);
    data.append("entry.905752416", formData.companion);
    data.append("entry.1919643671", formData.code);
    data.append("entry.139186207", formData.attending);
    data.append("entry.373463721", formData.allergyDetails);

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: data
    })
      .then(() => {
        alert("✅ RSVP enviado correctamente!");
        setFormData({
          name: "",
          companion: "",
          code: "",
          attending: "",
          hasAllergy: false,
          allergyDetails: ""
        });
      })
      .catch(() => alert("⚠️ Algo salió mal, inténtalo de nuevo."));
  };

  return (
    <section id="rsvp" className="rsvp-section" style={{ padding: "2rem" }}>
      <div className="rsvp-content max-w-xl mx-auto text-center relative z-10">
        <br/><h2 className="text-4xl md:text-5xl font-calisto mb-4">RSVP</h2><br/>
        <h3 className="text-xl font-dubai-reg mb-2">
          Let us know if we will count with you!
        </h3>
        <p className="font-dubai mb-2">
          Kindly RSVP by the end of <strong>February 2026</strong>
        </p>
        <br/><br/><br/>

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name and last name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="companion"
            placeholder="Name of companion(s) (if any)"
            value={formData.companion}
            onChange={handleChange}
          />

          <input
            type="text"
            name="code"
            placeholder="Invitation Code"
            value={formData.code}
            onChange={handleChange}
            required
          />

          <div className="radio-group font-dubai-reg">
            <label className="radio-label">
              <strong>Yes, I'll go!</strong>
              <input
                type="radio"
                name="attending"
                value="Sí"
                checked={formData.attending === "Sí"}
                onChange={handleChange}
                required
              />
            </label>
            

            
            <label className="radio-label">
              <strong>No, I can't</strong>
              <input
                type="radio"
                name="attending"
                value="No"
                checked={formData.attending === "No"}
                onChange={handleChange}
              />
            </label>
          </div>

    

          <button
            type="submit"
            style={{
              padding: "0.75rem",
              cursor: "pointer",
              color: "black",
              backgroundColor: "beige"
            }}
          >
            Send RSVP
          </button>
        </form>
      </div>
    </section>
  );
}


/*

    <label>
          <input
            type="checkbox"
            name="hasAllergy"
            checked={formData.hasAllergy}
            onChange={handleChange}
          />{" "}
          Si tienes algun comentario, adelante.
        </label>

        {formData.hasAllergy && (
          <textarea
            name="allergyDetails"
            placeholder="Por favor, especifique"
            value={formData.allergyDetails}
            onChange={handleChange}
          />
        )}
*/