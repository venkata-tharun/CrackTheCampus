function FeatureCard({ feature }) {
  return (
    <article className="feature-card">
      <div className="feature-icon">{feature.icon}</div>

      <h3>{feature.title}</h3>

      <p>{feature.description}</p>

      <a href="#courses" className="text-link">
        Learn more →
      </a>
    </article>
  );
}

export default FeatureCard;