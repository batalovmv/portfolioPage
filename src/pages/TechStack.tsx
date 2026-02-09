import FadeIn from '../utils/FadeIn';
import './techstack.css';

const techCategories = [
  {
    title: 'Frontend',
    items: ['TypeScript', 'React', 'Next.js', 'React Native', 'Vite', 'Tailwind CSS', 'Redux Toolkit', 'React Router', 'Socket.IO'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Firebase', 'REST API', 'WebSocket'],
  },
  {
    title: 'AI / ML',
    items: ['OpenAI', 'Claude (Anthropic)', 'Gemini', 'ChromaDB', 'TTS / STT', 'RAG', 'LangChain'],
  },
  {
    title: 'DevOps & Tools',
    items: ['Docker', 'GitHub Actions', 'Turborepo', 'Sentry', 'Prometheus', 'Nginx', 'Linux'],
  },
];

const TechStack = () => {
  return (
    <section className="section" id="tech">
      <div className="container">
        <h2 className="section-title">Технологии</h2>
        <div className="tech-grid">
          {techCategories.map((cat) => (
            <FadeIn key={cat.title}>
              <div className="tech-category">
                <h3 className="tech-category__title">{cat.title}</h3>
                <div className="tech-category__tags">
                  {cat.items.map((item) => (
                    <span key={item} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
