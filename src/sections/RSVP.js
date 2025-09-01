import React from "react";

export default function RSVP() {
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
}