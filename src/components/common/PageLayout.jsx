import { cn } from "@/lib/utils";

export const PageLayout = ({
  children,
  className = "",
  as: Component = "section",
  ...props
}) => {
  return (
    <Component
      className={cn(
        "max-w-7xl mx-auto px-6 lg:px-8 w-full",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
