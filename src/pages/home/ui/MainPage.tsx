import { Button } from "@/shared/ui/shadcn/button";

type MainPageProps = {
  theme: string;
  onToggleTheme: () => void;
};

export const MainPage = ({ theme, onToggleTheme }: MainPageProps) => {
  return (
    <div className="flex justify-between items-center border-border rounded p-2 py-2 pl-4 bg-primary text-primary-foreground">
      <h1 className="text-primary-foreground font-bold text-2xl">
        Welcome to project task4
      </h1>
      <Button
        variant="default"
        size="sm"
        onClick={onToggleTheme}
        aria-label="Toggle theme"
      >
        Toggle theme: {theme}
      </Button>
    </div>
  );
};
