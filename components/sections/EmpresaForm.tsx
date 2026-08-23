"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site.config";

type Status = { kind: "ok" | "err"; text: string } | null;

const interests = [
  "Capacitación técnica", "Programas in company", "Evaluación de competencias",
  "Bolsa laboral especializada", "Seguridad y salud en el trabajo",
  "Consultoría y acompañamiento", "Aún no lo sé — quiero orientación",
];

export function EmpresaForm() {
  const [values, setValues] = useState({
    eCompany: "", eContact: "", eEmail: "", ePhone: "", eInterest: "", eTeamSize: "", eMsg: "",
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function update<K extends keyof typeof values>(key: K, v: string) {
    setValues((s) => ({ ...s, [key]: v }));
  }

  function validate() {
    const fields: (keyof typeof values)[] = ["eCompany", "eContact", "eEmail", "ePhone", "eInterest"];
    const next: Record<string, boolean> = {};
    let ok = true;
    for (const f of fields) {
      const v = values[f].trim();
      let fieldOk = v.length > 0;
      if (f === "eEmail" && fieldOk) fieldOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (f === "ePhone" && fieldOk) fieldOk = /^[0-9+()\s-]{6,}$/.test(v);
      next[f] = !fieldOk;
      if (!fieldOk) ok = false;
    }
    setErrors(next);
    return ok;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const botcheck = new FormData(e.currentTarget).get("botcheck");
    if (botcheck) {
      // Un bot rellenó el campo trampa: se simula éxito sin enviar nada.
      setDone(true);
      return;
    }
    if (!validate() || !consent) {
      setStatus({ kind: "err", text: "Revisa los campos marcados antes de continuar." });
      return;
    }
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsAccessKey,
          subject: "Nueva solicitud de capacitación empresarial — TechHub Perú",
          from_name: "Formulario Empresas — TechHub Perú",
          ...values,
        }),
      });
      const data = await res.json();
      if (data.success) setDone(true);
      else setStatus({ kind: "err", text: `No se pudo enviar tu solicitud. Escríbenos directo a ${siteConfig.contact.email}.` });
    } catch {
      setStatus({ kind: "err", text: `No se pudo enviar tu solicitud. Escríbenos directo a ${siteConfig.contact.email}.` });
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-9 text-center shadow-[var(--shadow-md)]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 h-[52px] w-[52px] text-good">
          <circle cx="12" cy="12" r="9.5" />
          <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
        <h3 className="mb-2.5 text-xl font-bold">¡Gracias, {values.eCompany}!</h3>
        <p className="text-ink-muted">Un asesor de TechHub Perú se pondrá en contacto contigo en menos de 24 horas hábiles.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-[clamp(24px,4vw,36px)] shadow-[var(--shadow-md)]">
      {/* honeypot: campo invisible para humanos, los bots suelen rellenar todo */}
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-px w-px opacity-0" />
      <div className="grid grid-cols-1 gap-4 min-[561px]:grid-cols-2">
        <Field label="Nombre de la empresa" error={errors.eCompany && "Ingresa el nombre de la empresa."}>
          <input value={values.eCompany} onChange={(e) => update("eCompany", e.target.value)} className={inputClass(errors.eCompany)} />
        </Field>
        <Field label="Persona de contacto" error={errors.eContact && "Ingresa un nombre de contacto."}>
          <input value={values.eContact} onChange={(e) => update("eContact", e.target.value)} className={inputClass(errors.eContact)} />
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-4 min-[561px]:grid-cols-2">
        <Field label="Correo corporativo" error={errors.eEmail && "Ingresa un correo válido."}>
          <input value={values.eEmail} onChange={(e) => update("eEmail", e.target.value)} type="email" className={inputClass(errors.eEmail)} />
        </Field>
        <Field label="Teléfono / WhatsApp" error={errors.ePhone && "Ingresa un teléfono válido."}>
          <input value={values.ePhone} onChange={(e) => update("ePhone", e.target.value)} type="tel" className={inputClass(errors.ePhone)} />
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-4 min-[561px]:grid-cols-2">
        <Field label="Tipo de capacitación" error={errors.eInterest && "Selecciona una opción."}>
          <select value={values.eInterest} onChange={(e) => update("eInterest", e.target.value)} className={inputClass(errors.eInterest)}>
            <option value="">Selecciona una opción</option>
            {interests.map((i) => <option key={i}>{i}</option>)}
          </select>
        </Field>
        <Field label="N.° aproximado de técnicos">
          <select value={values.eTeamSize} onChange={(e) => update("eTeamSize", e.target.value)} className={inputClass(false)}>
            <option value="">Selecciona un rango (opcional)</option>
            <option>1 a 10</option><option>11 a 30</option><option>31 a 50</option><option>Más de 50</option>
          </select>
        </Field>
      </div>
      <Field label="Mensaje (opcional)">
        <textarea value={values.eMsg} onChange={(e) => update("eMsg", e.target.value)} rows={3} className={inputClass(false)} />
      </Field>
      <label className="flex items-start gap-2.5">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5" />
        <span className="text-[.82rem] text-ink-muted">Acepto la política de privacidad y el tratamiento de mis datos personales.</span>
      </label>
      <button type="submit" disabled={sending} className="w-full rounded-lg bg-brand py-3.5 text-[.86rem] font-bold uppercase tracking-wide text-on-brand hover:bg-navy-2 disabled:opacity-60">
        {sending ? "Enviando…" : "Solicitar propuesta"}
      </button>
      {status && (
        <p className={`rounded-lg px-3.5 py-3 text-[.86rem] ${status.kind === "ok" ? "bg-good/14 text-good" : "bg-red-500/12 text-red-600"}`}>
          {status.text}
        </p>
      )}
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `rounded-lg border px-3.5 py-2.5 text-[.92rem] bg-bg-soft text-ink transition-[border-color,box-shadow] focus:outline-none focus:border-brand focus:shadow-[0_0_0_3px_rgba(30,115,224,.16)] ${
    hasError ? "border-red-500" : "border-border-strong"
  }`;
}

function Field({ label, error, children }: { label: string; error?: string | false; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[.8rem] font-semibold text-ink-muted">{label}</span>
      {children}
      {error && <span className="text-[.76rem] text-red-600">{error}</span>}
    </label>
  );
}
