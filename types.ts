export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface CopyBlockProps {
  content: string;
  label?: string;
  rows?: number;
}
