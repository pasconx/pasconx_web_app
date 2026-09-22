"use client";

import { useRouter } from "next/navigation";

export function CourseBackLink() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="course-back"
      aria-label="Back to all programmes"
      onClick={() => {
        window.__pascalxLenis?.stop();
        window.sessionStorage.setItem("pascalx-scroll-target", "live-programmes");
        window.sessionStorage.setItem("pascalx-skip-preloader", "true");
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
        } else {
          router.push("/#live-programmes");
        }
      }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 12H5M11 18l-6-6 6-6" />
      </svg>
    </button>
  );
}
