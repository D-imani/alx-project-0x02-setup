//Contains the exports
export interface CardProps{
    title: string ;
    content : string ;
}

export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
  className?: string; // Optional for extra styling
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}