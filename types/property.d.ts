export interface FilterSelectConfig<T> {
  key: keyof T;
  icon: React.ElementType;
  placeholder: string;
  items: { value: string; label: string }[];
  onValueChange: (value: string) => Partial<T>;
  value: (filters: T) => string | undefined;
}

export interface PropertyStats {
  label: string;
  value: string;
  icon: React.ElementType;
}
