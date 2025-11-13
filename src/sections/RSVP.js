import { useEffect, useMemo, useState } from "react";
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

  // Store allowed codes from CSV
  const [codeSet, setCodeSet] = useState(() => new Set());
  const [isLoadingCodes, setIsLoadingCodes] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [codeError, setCodeError] = useState("");

  // Normalize codes: trim & uppercase so input isn’t case-sensitive
  const normalize = (s) => (s || "").trim().toUpperCase();

  // Minimal CSV-first-column parser that handles quoted first fields
  const parseFirstColumn = (csvText) => {
    const lines = csvText
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    // If there’s a header row, you can skip it by checking content;
    // here we accept *all* lines—remove the header if needed.
    const codes = new Set();
    for (const line of lines) {
      let first;
      if (line.startsWith('"')) {
        const m = line.match(/^"((?:[^"]|"")*)"/); // handle escaped quotes
        first = m ? m[1].replace(/""/g, '"') : "";
      } else {
        first = line.split(",")[0] ?? "";
      }
      if (first) codes.add(normalize(first));
    }
    return codes;
  };

  // Load CSV once on mount
  useEffect(() => {
    let isCancelled = false;
    (async () => {
      try {
        setIsLoadingCodes(true);
        setLoadError("");
        const res = await fetch("/RSVP_list_invitation.csv", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        if (isCancelled) return;
        setCodeSet(parseFirstColumn(text));
      } catch (err) {
        console.error("Failed to load codes:", err);
        setLoadError("We couldn’t load the invitation list. Please try again later.");
      } finally {
        if (!isCancelled) setIsLoadingCodes(false);
      }
    })();
    return () => {
      isCancelled = true;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    if (name === "code") {
      // Clear error while typing, re-check on blur/submit
      setCodeError("");
    }
  };

  const handleCodeBlur = () => {
    const ok = codeSet.has(normalize(formData.code));
    setCodeError(ok || !formData.code ? "" : "This code is not in our invitation list.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Block submission if codes didn’t load or invalid
    if (isLoadingCodes) {
      alert("Loading invitation list… please try again in a moment.");
      return;
    }
    if (loadError) {
      alert("We couldn’t verify your code right now. Please try again later.");
      return;
    }

    const valid = codeSet.has(normalize(formData.code));
    if (!valid) {
      setCodeError("This code is not in our invitation list.");
      return;
    }

    const formUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdoo2EP37DAgUvIyuzoVt-TeMC2VZ3Vly7eVtLZzi4To04YRQ/formResponse";

    const data = new FormData();
    data.append("entry.1641324281", formData.name);
    data.append("entry.905752416", formData.companion);
    data.append("entry.1919643671", formData.code);
    data.append("entry.139186207", formData.attending);
    data.append("entry.373463721", formData.allergyDetails);

    fetch(formUrl, { method: "POST", mode: "no-cors", body: data })
      .then(() => {
        alert("✅ RSVP sent successfully!");
        setFormData({
          name: "",
          companion: "",
          code: "",
          attending: "",
          hasAllergy: false,
          allergyDetails: ""
        });
        setCodeError("");
      })
      .catch(() => alert("⚠️ Something went wrong, please try again."));
  };

  return (
    <section id="rsvp" className="rsvp-section" style={{ padding: "2rem" }}>
      <div className="rsvp-content max-w-xl mx-auto text-center relative z-10">
        <br/><h2 className="text-4xl md:text-5xl font-calisto mb-4">RSVP</h2><br/>
        <h3 className="text-xl font-dubai-reg mb-2">Let us know if we will count with you!</h3>
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

          <div style={{ textAlign: "left" }}>
            <input
              type="text"
              name="code"
              placeholder="Invitation Code"
              value={formData.code}
              onChange={handleChange}
              onBlur={handleCodeBlur}
              required
            />
            {codeError && (
              <div style={{ color: "#b91c1c", fontSize: "0.9rem", marginTop: "0.25rem" }}>
                {codeError}
              </div>
            )}
          </div>

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
            disabled={isLoadingCodes || !!loadError}
            style={{
              padding: "0.75rem",
              cursor: isLoadingCodes || loadError ? "not-allowed" : "pointer",
              color: "black",
              backgroundColor: "beige",
              opacity: isLoadingCodes || loadError ? 0.6 : 1
            }}
          >
            {isLoadingCodes ? "Loading codes…" : "Send RSVP"}
          </button>
        </form>

        {loadError && (
          <p style={{ color: "#b91c1c", marginTop: "0.75rem" }}>{loadError}</p>
        )}
      </div>
    </section>
  );
}
