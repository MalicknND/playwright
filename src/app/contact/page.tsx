"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulation d'envoi
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="container mx-auto p-8">
      <Link href="/" className="text-blue-600 mb-4 inline-block">
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="text-3xl font-bold mb-8" data-testid="contact-title">
        Contact
      </h1>

      {submitted && (
        <div
          className="bg-green-100 p-4 rounded mb-4"
          data-testid="success-message"
        >
          Message envoyé avec succès !
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label className="block mb-2">Nom :</label>
          <input
            type="text"
            data-testid="name-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Email :</label>
          <input
            type="email"
            data-testid="email-input"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Message :</label>
          <textarea
            data-testid="message-input"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-2 border rounded"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          data-testid="submit-button"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
    </main>
  );
}
