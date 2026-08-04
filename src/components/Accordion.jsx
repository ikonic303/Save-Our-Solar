import { useState } from "react";

export default function Accordion({ items, renderContent, renderLabel, defaultOpenId }) {
  const [openId, setOpenId] = useState(defaultOpenId ?? items[0]?.id ?? null);

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            id={item.id}
            className={`accordion-item ${isOpen ? "is-open" : ""}`}
            key={item.id}
          >
            <h3>
              <button
                type="button"
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={`panel-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="accordion-trigger-label">
                  {renderLabel ? renderLabel(item) : item.name}
                </span>
                <span className="accordion-icon" aria-hidden="true">
                  +
                </span>
              </button>
            </h3>
            <div className="accordion-panel-wrapper">
              <div
                id={`panel-${item.id}`}
                className="accordion-panel"
                role="region"
                aria-hidden={!isOpen}
              >
                <div className="accordion-panel-inner">{renderContent(item)}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
