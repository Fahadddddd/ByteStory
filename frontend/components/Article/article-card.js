import Image from "next/image";

const ArticleCard = ({ title, author, description, date, views, comments }) => {
  return (
    <article className="card border-0 mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <Image
            src={author.image || "/placeholder.svg"}
            alt={author.name}
            width={40}
            height={40}
            className="rounded-circle me-2"
          />
          <div>
            <h6 className="mb-0">
              {author.name}
              {author.verified && <span className="badge bg-primary ms-1">✓</span>}
            </h6>
          </div>
        </div>
        <h2 className="h4 fw-bold mb-2">{title}</h2>
        <p className="text-muted">{description}</p>
        <div className="d-flex align-items-center text-muted">
          <small>{date}</small>
          <span className="mx-2">·</span>
          <small>{views} views</small>
          <span className="mx-2">·</span>
          <small>{comments} comments</small>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
