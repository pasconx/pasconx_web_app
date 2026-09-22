"use client";

import React, { useState } from "react";

interface ProgrammeCardImageProps {
  image?: string;
  title: string;
}

export function ProgrammeCardImage({ image, title }: ProgrammeCardImageProps) {
  const [hasError, setHasError] = useState(!image);

  if (!image || hasError) {
    return (
      <div className="upcoming-programme-placeholder" aria-label={`Placeholder for ${title}`}>
        <span>Course Image</span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={title}
      className="upcoming-programme-img"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        display: "block",
      }}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}

export const ProgrammeTechVisual = ProgrammeCardImage;
