type Prop = {
  children?: React.ReactNode;
};
export default function EnNumber({ children }: Prop) {
  return (
    <span
      style={{ direction: "ltr", display: "inline-block" }}
    >
      {children}
    </span>
  );
}
