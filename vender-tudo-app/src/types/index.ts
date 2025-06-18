export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends ComponentProps {
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export interface ShapeProps {
  className?: string;
  size?: number;
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  delay?: number;
}
