import type React from "react";

export enum IconName {
  "arrowDown" = "arrow-down",
  "arrowLeft" = "arrow-left",
  "arrowUp" = "arrow-up",
  "back" = "back",
  "calendar" = "calendar",
  "checked" = "checked",
  "close" = "close",
  "dashedEye" = "dashed-eye",
  "delete" = "delete",
  "diagram" = "diagram",
  "dollar" = "dollar",
  "edit" = "edit",
  "error" = "error",
  "euro" = "euro",
  "eye" = "eye",
  "info" = "info",
  "menu" = "menu",
  "note" = "note",
  "notifications" = "notifications",
  "plus" = "plus",
  "projects" = "projects",
  "retry" = "retry",
  "search" = "search",
  "settings" = "settings",
  "statistic" = "statistic",
  "success" = "success",
  "unchecked" = "unchecked",
  "warning" = "warning",
  "yuan" = "yuan"
}

export enum IconSize {
  Large = "24",
  Mini = "16",
  Small = "14",
}

export type SvgIconProp = {
  icon: IconName;
  size?: IconSize;
  fill?: string;
  color?: string;
  className?: string;
  pointer?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};
