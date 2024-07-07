'use client'
const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-blue-600 text-white shadow-lg animate-bounce z-20"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
