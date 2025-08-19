import { useEffect, useState } from "react";

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
    <div className="flex flex-col items-center">
      <svg className="animate-spin h-12 w-12 text-white mb-4" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      <span className="text-white text-lg font-semibold">Loading...</span>
    </div>
  </div>
);

export default function AppLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for all images to load
    const images = Array.from(document.images);
    if (images.length === 0) {
      setLoading(false);
      return;
    }
    let loaded = 0;
    images.forEach(img => {
      if (img.complete) loaded++;
      else img.addEventListener("load", () => {
        loaded++;
        if (loaded === images.length) setLoading(false);
      });
      img.addEventListener("error", () => {
        loaded++;
        if (loaded === images.length) setLoading(false);
      });
    });
    if (loaded === images.length) setLoading(false);
  }, []);

  return loading ? <Loader /> : children;
}
