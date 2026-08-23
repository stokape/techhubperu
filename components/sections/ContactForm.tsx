"use client";

import { useState, type FormEvent } from "react";
import { courses, siteConfig } from "@/lib/site.config";

type Step = 1 | 2 | 3;
type Status = { kind: "ok" | "err"; text: string } | null;

export function ContactForm() {
  const [step, setStep] = useState<Step>(1);
  const [values, setValues] = useState({
    fName: "", fEmail: "", fPhone: "", fProgram: "", fCompany: "", fMsg: "",
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function update<K extends keyof typeof values>(key: K, v: string) {
    setValues((s) => ({ ...s, [key]: v }));
  }

  function validate(fields: (keyof typeof values)[]) {
    const next: Record<string, boolean> = {};
    let ok = true;
    for (const f of fields) {
      const v = values[f].trim();
      let fieldOk = v.length > 0;
      if (f === "fEmail" && fieldOk) fieldOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (f === "fPhone" && fieldOk) fieldOk = /^[0-9+()\s-]{6,}$/.test(v);
      next[f] = !fieldOk;
      if (!fieldOk) ok = false;
    }
    setErrors((e) => ({ ...e, ...next }));
    return ok;
  }

  function next(fields: (keyof typeof values)[], to: Step) {
    if (validate(fields)) setStep(to);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const botcheck = new FormData(e.currentTarget).get("botcheck");
    if (botcheck) {
      // Un bot rellenó el campo trampa: se simula éxito sin enviar nada.
      setDone(true);
      return;
    }
    const okBasics = validate(["fName", "fEmail", "fPhone"]);
    const okProgram = validate(["fProgram"]);
    if (!okBasics || !okProgram || !consent) {
      setStatus({ kind: "err", text: "Revisa los campos marcados antes de continuar." });
      if (!okBasics) setStep(1);
      else if (!okProgram) setStep(2);
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsAccessKey,
          subject: "Nueva solicitud de información — TechHub Perú",
          from_name: "Formulario web TechHub Perú",
          ...values,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setDone(true);
      } else {
        setStatus({ kind: "err", text: `No se pudo enviar tu solicitud. Escríbenos directo a ${siteConfig.contact.email}.` });
      }
    } catch {
      setStatus({ kind: "err", text: `No se pudo enviar tu solicitud. Escríbenos directo a ${siteConfig.contact.email}.` });
    } finally {
      setSending(false);
    }
  }

  if (done) {
    const firstName = values.fName.trim().split(" ")[0];
    return (
      <div className="rounded-2xl border border-border bg-surface p-9 text-center shadow-[var(--shadow-md)]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 h-[52px] w-[52px] text-good">
          <circle cx="12" cy="12" r="9.5" />
          <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
        <h3 className="mb-2.5 text-xl font-bold">¡Listo, {firstName}!</h3>
        <p className="text-ink-muted">
          Un asesor de TechHub Perú te escribirá a {values.fEmail} en menos de 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-surface p-[clamp(24px,4vw,36px)] shadow-[var(--shadow-md)]">
      {/* honeypot: campo invisible para humanos, los bots suelen rellenar todo */}
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-px w-px opacity-0" />
      <div className="mb-7 flex items-start">
        {[1, 2, 3].map((n, i) => (
          <div key={n} className="flex flex-1 items-center last:flex-none">
            <div className="flex w-[74px] flex-none flex-col items-center gap-1.5 text-center font-mono-th text-[.66rem] uppercase tracking-[.03em] text-ink-faint">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] text-[.78rem] font-bold ${
                  n === step ? "border-brand bg-brand text-on-brand" : n < step ? "border-good bg-good text-white" : "border-border-strong bg-surface text-ink-muted"
                }`}
              >
                {n}
              </span>
              <span className="text-ink-muted">{["Sobre ti", "Tu interés", "Confirmar"][i]}</span>
            </div>
            {i < 2 && <span className={`mt-[13px] h-[1.5px] flex-1 ${n < step ? "bg-good" : "bg-border-strong"}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <Field label="Nombre y apellidos" error={errors.fName && "Ingresa tu nombre completo."}>
            <input value={values.fName} onChange={(e) => update("fName", e.target.value)} type="text" autoComplete="name" className={inputClass(errors.fName)} />
          </Field>
          <Field label="Correo electrónico" error={errors.fEmail && "Ingresa un correo válido."}>
            <input value={values.fEmail} onChange={(e) => update("fEmail", e.target.value)} type="email" autoComplete="email" className={inputClass(errors.fEmail)} />
          </Field>
          <Field label="Teléfono / WhatsApp" error={errors.fPhone && "Ingresa un teléfono válido."}>
            <input value={values.fPhone} onChange={(e) => update("fPhone", e.target.value)} type="tel" autoComplete="tel" className={inputClass(errors.fPhone)} />
          </Field>
          <button type="button" onClick={() => next(["fName", "fEmail", "fPhone"], 2)} className="w-full rounded-lg bg-brand py-3.5 text-[.86rem] font-bold uppercase tracking-wide text-on-brand hover:bg-navy-2">
            Continuar
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-4">
          <Field label="Programa de interés" error={errors.fProgram && "Selecciona un programa."}>
            <select value={values.fProgram} onChange={(e) => update("fProgram", e.target.value)} className={inputClass(errors.fProgram)}>
              <option value="">Selecciona un programa</option>
              {courses.map((c) => <option key={c.slug}>{c.title}</option>)}
              <option>Aún no lo sé — quiero orientación</option>
            </select>
          </Field>
          <Field label="Empresa (opcional)">
            <input value={values.fCompany} onChange={(e) => update("fCompany", e.target.value)} type="text" className={inputClass(false)} />
          </Field>
          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="flex-1 rounded-lg border border-border-strong py-3.5 text-[.86rem] font-bold uppercase tracking-wide hover:border-brand">
              Atrás
            </button>
            <button type="button" onClick={() => next(["fProgram"], 3)} className="flex-1 rounded-lg bg-brand py-3.5 text-[.86rem] font-bold uppercase tracking-wide text-on-brand hover:bg-navy-2">
              Continuar
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-4">
          <Field label="Mensaje (opcional)">
            <textarea value={values.fMsg} onChange={(e) => update("fMsg", e.target.value)} rows={3} className={inputClass(false)} />
          </Field>

          <div className="flex flex-col gap-2 rounded-lg border border-border bg-bg-soft p-4">
            <SummaryRow label="Nombre" value={values.fName || "—"} />
            <SummaryRow label="Correo" value={values.fEmail || "—"} />
            <SummaryRow label="Programa" value={values.fProgram || "—"} />
          </div>

          <label className="flex items-start gap-2.5">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5" />
            <span className="text-[.82rem] text-ink-muted">
              Acepto la política de privacidad y el tratamiento de mis datos personales.
            </span>
          </label>

          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(2)} className="flex-1 rounded-lg border border-border-strong py-3.5 text-[.86rem] font-bold uppercase tracking-wide hover:border-brand">
              Atrás
            </button>
            <button type="submit" disabled={sending} className="flex-1 rounded-lg bg-brand py-3.5 text-[.86rem] font-bold uppercase tracking-wide text-on-brand hover:bg-navy-2 disabled:opacity-60">
              {sending ? "Enviando…" : "Enviar solicitud"}
            </button>
          </div>

          {status && (
            <p className={`rounded-lg px-3.5 py-3 text-[.86rem] ${status.kind === "ok" ? "bg-good/14 text-good" : "bg-red-500/12 text-red-600"}`}>
              {status.text}
            </p>
          )}
        </div>
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

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3 text-[.85rem]">
      <span className="flex-none text-ink-faint">{label}</span>
      <span className="text-right font-semibold text-ink">{value}</span>
    </div>
  );
}
