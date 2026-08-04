// Client-supplied logo (public/logo.png) — cropped from the original mockup export.
export default function LightningLogo({ size = 44 }) {
  return (
    <img
      src="/logo.png"
      alt="Save Our Solar Club"
      width={size}
      height={size}
      style={{ display: "block", borderRadius: 8, flexShrink: 0 }}
    />
  );
}
