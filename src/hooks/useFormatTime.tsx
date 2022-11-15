import React from "react";

export default function useFormatTime(time: string): string {
  const str = time.replace("T", " ").replace("Z", "");
  return str;
}
