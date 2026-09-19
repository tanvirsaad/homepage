import './ResearchSection.css';

export default function ResearchSection() {
  const ongoingResearch = [
    {
      title: "TablePN: How contrastive cot steps evolve a process reward models for tables",
      supervisors: [
        { name: "Dr. Mohammed Eunus Ali", link: "https://cse.buet.ac.bd/faculty/faculty_detail/eunus" },
        { name: "Md Rizwan Parvez", link: "https://scholar.google.com/citations?user=KhC8rtcAAAAJ&hl=en" }
      ],
      description: "TablePN trains PRM for table tasks using contrastive chain-of-thought (CoT) supervision. It explores how simple contrastive samples and CoT structures affect reward signal quality and downstream fine-tuning performance on tasks like table reasoning. The research scope is to develop effective reward models that capture step-by-step reasoning quality for tables using contrastive CoT.",
    },
    {
      title: "Agentic Security: Trajectory Behavioural Motif Analysis",
      supervisors: [],
      description: "We are analyzing trajectory data of agentic systems to identify anomalous behavioral motifs to generalize the attack pattern.",
    }
  ];

  const completedResearch = [
    {
      title: "Mapeval: A map-based evaluation of geo-spatial reasoning in foundation models",
      venue: <><span className="venue-highlight">Accepted</span> <span className="venue-text">ICML 2025</span> <span className="venue-highlight">Spotlight</span></>,
      link: "https://arxiv.org/abs/2501.00316",
      supervisors: [
        { name: "Dr. Mohammed Eunus Ali", link: "https://cse.buet.ac.bd/faculty/faculty_detail/eunus" },
        { name: "Md Rizwan Parvez", link: "https://scholar.google.com/citations?user=KhC8rtcAAAAJ&hl=en" }
      ],
      description: "MapEval evaluates how well foundation models perform geospatial reasoning through textual, API-based, and visual map tasks across 180 cities and 54 countries. Its research scope includes navigation, spatial relationships, route planning, distances, and travel planning. Results show that current models still perform well below humans, highlighting major gaps in real-world spatial reasoning."
    },
    {
      title: "How Semantically Stable Are LLM Refusals? Measuring Confusion in Local Safety Boundaries",
      venue: <><span className="venue-highlight">Accepted</span> <span className="venue-text">IEEE DSAA 2026</span> <span className="venue-highlight">Short Presentation</span></>,
      supervisors: [
        { name: "Dr. Ch. Md. Rakin Haider", link: "https://cse.buet.ac.bd/faculty/faculty_detail/rakinhaider" }
      ],
      description: "This research studies inconsistent refusal behavior in LLMs, where similar harmless prompts can receive different decisions. It introduces ParaGuard, a 10k-prompt dataset, and metrics to measure this inconsistency. The research scope is to evaluate and improve refusal consistency while reducing false refusals."
    },
    {
      title: "DFCon: Attention-Driven Supervised Contrastive Learning for Robust Deepfake Detection",
      venue: <><span className="venue-highlight">1st Runners Up</span> <span className="venue-text">IEEE Signal Processing Cup 2025</span> <span className="venue-highlight">Under Review</span> <span className="venue-text">ICASSP 2026</span></>,
      supervisors: [
        { name: "Dr. Mohammad Saifur Rahman", link: "https://scholar.google.com/citations?user=9d52x-cAAAAJ&hl=en" }
      ],
      description: "Trained on eight DeepFakeBench datasets with additional synthetic data via diffusion/GAN/VAE. Fine-tuned MaxViT, CoAtNet, and EVA-02 with supervised contrastive + focal loss. Multi-stage pipeline (backbone → classifier → majority vote) achieved 95.83% validation accuracy and handled class imbalance."
    }
  ];

  const renderSupervisors = (supervisors) => {
    if (!supervisors || supervisors.length === 0) return null;
    return (
      <p className="research-supervisors">
        Supervisor(s):{' '}
        {supervisors.map((sup, idx) => (
          <span key={idx}>
            <a href={sup.link} target="_blank" rel="noopener noreferrer" className="supervisor-link hover-lift">
              {sup.name}
            </a>
            {idx < supervisors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    );
  };

  return (
    <section id="research" className="section fade-in">
      <h2 className="section-title">Research Experience</h2>
      
      <div className="research-category">
        <h3 className="category-title">Completed</h3>
        <div className="research-list flex-col gap-6">
          {completedResearch.map((item, index) => (
            <div key={index} className="research-item">
              <h4 className="research-title">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="research-link hover-lift">
                    {item.title}
                    <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                ) : (
                  item.title
                )}
              </h4>
              <p className="research-venue">{item.venue}</p>
              {renderSupervisors(item.supervisors)}
              <p className="research-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="research-category mt-8">
        <h3 className="category-title">Ongoing</h3>
        <div className="research-list flex-col gap-6">
          {ongoingResearch.map((item, index) => (
            <div key={index} className="research-item">
              <h4 className="research-title">{item.title}</h4>
              {renderSupervisors(item.supervisors)}
              <p className="research-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
