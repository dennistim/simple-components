import { getClasses } from "@utils";
import styles from "./Avatar.module.scss";

export enum AvatarSize {
  Large = "large",
  Mini = "mini",
  Small = "small"
}

export type AvatarProp = {
  name: string;
  surname: string;
  withTitles?: boolean;
  invertedTitle?: boolean;
  size?: AvatarSize;
  role?: string;
  email?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
};

export const avatarTitleSizes = {
  [AvatarSize.Large]: 20,
  [AvatarSize.Mini]: 16,
  [AvatarSize.Small]: 14,
};

export const avatarInitialsSize = {
  [AvatarSize.Large]: 24,
  [AvatarSize.Mini]: 16,
  [AvatarSize.Small]: 14,
};

export const avatarLineHeights = {
  [AvatarSize.Large]: 24,
  [AvatarSize.Mini]: 20,
  [AvatarSize.Small]: 20,
};

export const avatarSizeClasses = getClasses(AvatarSize, styles);
