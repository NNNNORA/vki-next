import Link from 'next/link';

interface BackLinkProps {
  href: string;
  label?: string;
}

export default function BackLink({ href, label = '<< список студентов' }: BackLinkProps) {
  return (
    <Link href={href} className="text-blue-600 hover:underline mb-4 inline-block">
      {label}
    </Link>
  );
}