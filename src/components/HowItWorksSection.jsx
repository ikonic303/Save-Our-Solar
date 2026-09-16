import { ClipboardList, Calendar, Wrench } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Request",
    description: "Tell us what's going on through our contact form or your member portal.",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "We'll get a technician on the calendar for your service area.",
  },
  {
    icon: Wrench,
    title: "Resolve",
    description: "Our team completes the work and documents everything for your records.",
  },
];

// Shared "Request → Schedule → Resolve" block used on every service and service-item page.
export default function HowItWorksSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">How it works</span>
          <h2>Three steps, start to finish</h2>
        </div>
        <div className="grid grid-3">
          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <div className="card service-step" key={title}>
              <span className="service-step-number">{index + 1}</span>
              <span className="card-icon">
                <Icon size={22} strokeWidth={2} />
              </span>
              <h3>{title}</h3>
              <p className="text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-step {
          padding: 24px;
          position: relative;
        }
        .service-step-number {
          position: absolute;
          top: 20px;
          right: 24px;
          font-family: var(--heading);
          font-weight: 700;
          font-size: 1.4rem;
          color: var(--border-strong);
        }
      `}</style>
    </section>
  );
}
