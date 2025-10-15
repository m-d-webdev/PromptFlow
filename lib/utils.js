"use client";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


//  function downloadImage(url, filename = "promt-flow-image.jpg") {
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = filename;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }
export function getLimitedText(text, length) {
  if (typeof text !== "string") return "";
  if (typeof length !== "number" || length < 0) return "";

  return `${text.slice(0, length)}${text.length > length ? "..." : ""}`;
}
export async function downloadImage(url, filename) {
  const response = await fetch(url);
  const blob = await response.blob();
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}


export function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else if (hour < 22) {
    return "Good evening";
  } else {
    return "Good night";
  }
}