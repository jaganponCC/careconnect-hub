import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type Stat = { label: string; value: string; icon: LucideIcon; hint?: string };

type Props = {
  title: string;
  subtitle?: string;
  stats?: Stat[];
  children?: ReactNode;
};

export const RoleDashboard = ({ title, subtitle, stats = [], children }: Props) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>

      {stats.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {s.label}
                </CardTitle>
                <s.icon className="w-4 h-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                {s.hint && <p className="text-xs text-muted-foreground mt-1">{s.hint}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {children}
    </div>
  );
};

export const PlaceholderPage = ({ title, description }: { title: string; description?: string }) => (
  <Card className="shadow-soft">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        {description ?? "This section is part of the demo. Connect Lovable Cloud to load real data."}
      </p>
    </CardContent>
  </Card>
);
