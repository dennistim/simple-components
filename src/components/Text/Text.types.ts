export type TextProp = {
  tag?: "b" | "span" | "i" | "p" | "em" | "small" | "del" | "ins" | "pre" | "sub" | "sup" | "mark";
  color?: string;
  lineHeight?: number;
  size?: number | "inherit";
  bgColor?: string;
  className?: string;
  children?: React.ReactNode;
};
