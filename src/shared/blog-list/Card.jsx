function Card({date, title}) {
  return (
    <div>
         <div className="card-container">
          <div className="card-of-blog"></div>
          <h6 className="date-of-blog">{date}</h6>
          <h1 className="blog-title-medium">{title}</h1>
         </div>
    </div>
  );
}
export default Card;
