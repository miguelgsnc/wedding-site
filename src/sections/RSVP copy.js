import { useState } from "react";

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
    data.append("entry.1641324281", formData.name);           // Nombre y Apellidos
    data.append("entry.905752416", formData.companion);       // Nombre de acompañante
    data.append("entry.1919643671", formData.code);           // Código
    data.append("entry.139186207", formData.attending);       // Asistencia
    data.append("entry.373463721", formData.allergyDetails);  // Alergias

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: data
    })
      .then(() => {
        alert("✅ RSVP submitted successfully!");
        setFormData({
          name: "",
          companion: "",
          code: "",
          attending: "",
          hasAllergy: false,
          allergyDetails: ""
        });
      })
      .catch(() => alert("⚠️ Something went wrong, try again."));
  };

  return (
    <section id="rsvp" style={{ padding: "2rem", background: "#f8f8f8" }}>
      <h2 className="text-3xl font-bold mb-4 text-center">RSVP</h2>
      <h3 className="text-xl font-semibold mb-2 text-center">Let us know if we will count with you!</h3>
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
          placeholder="Nombre y Apellidos"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="companion"
          placeholder="Nombre de acompañante (si aplica)"
          value={formData.companion}
          onChange={handleChange}
        />

        <input
          type="text"
          name="code"
          placeholder="Código de invitación"
          value={formData.code}
          onChange={handleChange}
          required
        />

        <div>
          <label>
            <input
              type="radio"
              name="attending"
              value="Sí"
              checked={formData.attending === "Sí"}
              onChange={handleChange}
              required
            />{" "}
            Sí, asistiré
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="attending"
              value="No"
              checked={formData.attending === "No"}
              onChange={handleChange}
            />{" "}
            No podré asistir
          </label>
        </div>

        <label>
          <input
            type="checkbox"
            name="hasAllergy"
            checked={formData.hasAllergy}
            onChange={handleChange}
          />{" "}
          Tengo alguna alergia o condición alimentaria
        </label>

        {formData.hasAllergy && (
          <textarea
            name="allergyDetails"
            placeholder="Por favor, especifique"
            value={formData.allergyDetails}
            onChange={handleChange}
          />
        )}

        <button type="submit" style={{ padding: "0.75rem", cursor: "pointer", color: "black", backgroundColor: "beige" }}>
          Enviar RSVP
        </button>
      </form>
    </section>
  );
}


/* import React from "react";
export default function RSVP() {
  return (
    <section
      id="rsvp"
      style={{
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f8f8f8"
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>
        RSVP
      </h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdoo2EP37DAgUvIyuzoVt-TeMC2VZ3Vly7eVtLZzi4To04YRQ/viewform?embedded=true"
        width="100%"
        height="900"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="RSVP Form"
        style={{
          border: "none",
          maxWidth: "640px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        Loading…
      </iframe>
    </section>
  );
} */

/* export default function RSVP() {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-4 text-center">Confirmación de Asistencia (RSVP)</h2>
      <div className="max-w-xl mx-auto">
        <form
          action="https://docs.google.com/forms/d/e/your-form-id/formResponse"
          method="POST"
          target="_blank"
          className="space-y-4"
        >
          <input type="text" name="entry.123456" placeholder="Tu nombre" className="w-full p-2 border rounded" required />
          <select name="entry.654321" className="w-full p-2 border rounded" required>
            <option value="">¿Asistirás?</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
          <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Enviar</button>
        </form>
      </div>
    </section>
  );
} */