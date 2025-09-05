type Props = {
  children?: React.ReactNode;
  label?: string; // you can use either label or children
};

export default function TopPick({ children, label = "Top Pick" }: Props) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/30 dark:text-blue-300">
      {/* star icon */}
      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24">
        <path
          d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27z"
          fill="currentColor"
        />
      </svg>
      {children ?? label}
    </span>
  );
}
