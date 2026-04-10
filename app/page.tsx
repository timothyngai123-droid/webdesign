import Link from "next/link";

// Plain unstyled index of brand pages. Styling will come later.
export default function IndexPage() {
  return (
    <main>
      <h1>Brand pages</h1>
      <ul>
        <li>
          <Link href="/grove-and-grain">Grove &amp; Grain</Link>
        </li>
        <li>
          <Link href="/keymaster-24">Keymaster 24</Link>
        </li>
      </ul>
    </main>
  );
}
