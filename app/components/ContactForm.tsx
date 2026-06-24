"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("https://formspree.io/f/mnjkjrgj", {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" },
    });
    res.ok ? (setStatus("ok"), (e.target as HTMLFormElement).reset()) : setStatus("error");
  }

  return status === "ok" ? (
    <p className="text-green-600 font-medium text-center py-6">¡Mensaje enviado! Te respondo pronto 🎉</p>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <input name="name" type="text" placeholder="Tu nombre" required
        className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
      <input name="email" type="email" placeholder="Tu email" required
        className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
      <textarea name="message" placeholder="¿En qué puedo ayudarte?" rows={4} required
        className="border border-slate-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
      <button type="submit" disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-600 disabled:opacity-50">
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
      {status === "error" && <p className="text-red-500 text-sm text-center">Algo salió mal. Intentá de nuevo.</p>}
    </form>
  );
}