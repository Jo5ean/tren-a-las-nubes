import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'ghost';

type ButtonProps = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-puna-900 text-puna-50 hover:bg-puna-800',
  outline: 'border border-puna-300 text-puna-800 hover:border-puna-500 hover:bg-puna-100',
  ghost: 'text-puna-700 hover:bg-puna-100',
};

export function Button({ href, variant = 'primary', className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
