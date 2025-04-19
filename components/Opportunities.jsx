export default function Opportunities() {
  const cards = [
    {
      title: "Oportunidad 1",
      description: "Descripción de la oportunidad 1"
    },
    {
      title: "Oportunidad 2",
      description: "Descripción de la oportunidad 2"
    },
    {
      title: "Oportunidad 3",
      description: "Descripción de la oportunidad 3"
    },
    {
      title: "Oportunidad 4",
      description: "Descripción de la oportunidad 4"
    },
    {
      title: "Oportunidad 5",
      description: "Descripción de la oportunidad 5"
    }
  ];

  return (
    <section className="opportunities">
      <div className="carrousel-wrapper">
        <div className="carrousel-track">
          {/* Original cards */}
          {cards.map((card, index) => (
            <div key={`card-${index}`} className="carrousel-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
          {/* Duplicated cards for infinite effect */}
          {cards.map((card, index) => (
            <div key={`card-duplicate-${index}`} className="carrousel-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 