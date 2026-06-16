import type { IntelItem } from "../../constants/intel";

type IntelCardProps = {
  item: IntelItem;
};

export function IntelCard({ item }: IntelCardProps) {
  return (
    <article className="intel-card">
      <time className="intel-card-date">{item.date}</time>
      <div className="intel-card-main">
        <div className="intel-card-thumb">
          <img src={item.thumbnail} alt="" width={45} height={42} />
        </div>
        <h3 className="intel-card-title">{item.title}</h3>
      </div>
      <a className="intel-card-link" href="#">
        <span className="intel-card-link-text">View brief</span>
        <span className="intel-card-link-arrow" aria-hidden="true">
          →
        </span>
      </a>
    </article>
  );
}
