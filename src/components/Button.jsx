/**
 * Reusable CTA Button
 * Supports both scroll-to-section and file download behaviors.
 */

const Button = ({ text, className, id, href, download = false }) => {
  const handleClick = (e) => {
    if (download && href) {
      // Let the default anchor tag behavior handle the download
      return;
    }

    // Scroll behavior (default)
    e.preventDefault();

    const target = document.getElementById(id);
    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a
      href={href ?? "#"} // Use href only if provided
      download={download}
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
