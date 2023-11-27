import PdfViewerButton from "./PdfViewerButton";

const handleButtonClicked = (pdfUrl) => {
  window.open(pdfUrl, "_blank");
};

const Book = (props) => {
  const { img, title, author, path, number } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
      <PdfViewerButton pdfUrl={path} />
    </article>
  );
};

export default Book;
