import { useState } from "react";
import { submitLead } from "../lib/leadApi";

const EMPTY_FORM = {
  name: "",
  phone: "",
  email: "",
  address: "",
  message: "",
};

export default function LeadForm({ heading = "Request an Inspection" }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitLead(form);
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card lead-form-success" role="status">
        <h3>Thanks — we've got it.</h3>
        <p className="text-muted">
          Your request was received. A member of our team will reach out shortly
          to schedule your inspection.
        </p>
        <p className="text-muted" style={{ fontSize: "0.85rem" }}>
          [stub] Lead sent to CRM &amp; technician dispatch triggered for your
          service area.
        </p>
        <button type="button" className="btn btn-outline" onClick={() => setStatus("idle")}>
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form className="lead-form card" onSubmit={handleSubmit}>
      {heading && <h3>{heading}</h3>}

      <div className="lead-form-field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
      </div>

      <div className="lead-form-row">
        <div className="lead-form-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} />
        </div>
        <div className="lead-form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
        </div>
      </div>

      <div className="lead-form-field">
        <label htmlFor="address">Address or ZIP code</label>
        <input
          id="address"
          name="address"
          type="text"
          required
          placeholder="e.g. 80231 or full service address"
          value={form.address}
          onChange={handleChange}
        />
      </div>

      <div className="lead-form-field">
        <label htmlFor="message">What's going on with your system? (optional)</label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} />
      </div>

      {status === "error" && (
        <p style={{ color: "var(--danger)" }}>
          Something went wrong submitting your request. Please try again or call us directly.
        </p>
      )}

      <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Request Inspection"}
      </button>
    </form>
  );
}
