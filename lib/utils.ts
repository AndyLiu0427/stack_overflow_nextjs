import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diff = Math.abs(now.getTime() - createdAt.getTime());
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  } else if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (days < 7) {
      return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (weeks < 4) {
      return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
  } else if (months < 12) {
      return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else {
      return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
}

export function formatAndDivideNumber(num: number): string {
  if (num >= 1000000) {
    const formattedNum = (num / 1000000).toFixed(1);
    return `${formattedNum}M`;
  } else if (num >= 1000) {
    const formattedNum = (num / 1000).toFixed(1);
    return `${formattedNum}K`;
  } else {
    return num.toString();
  }
}