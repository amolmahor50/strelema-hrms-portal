import { AuthProvider } from "@/contexts/AuthContext";
import { EmployeeProvider } from "@/contexts/EmployeeContext";

const contexts = [[AuthProvider], [EmployeeProvider]];

export const AppProviders = ({ children }) => {
  return contexts.reduceRight(
    (acc, [Provider, props]) => <Provider {...(props || {})}>{acc}</Provider>,
    children
  );
};
