import { CardProps } from "@/interfaces";
function Card({ children, className }: CardProps) {
  return <h1 className={className}>{children}</h1>;
}
export default Card;
