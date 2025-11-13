import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Article', href: '/article' },
  { name: 'Consultation', href: '/consultation' },
];

export function Header({ currentPage }: { currentPage: string }) {

  const gradientButtonClasses =
    'px-6 py-2 rounded-full font-semibold text-white ' +
    'bg-gradient-to-r from-purple-400 to-blue-300 ' +
    'shadow-lg shadow-purple-200/50 hover:opacity-90 transition';

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold text-gray-900">
          AIDOC
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition duration-150 ${item.name.toLowerCase() === currentPage.toLowerCase()
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link href="/signin" className={gradientButtonClasses}>
          Sign In
        </Link>
      </div>

      <div className="h-0.5 max-w-7xl mx-auto"
        style={{ backgroundImage: 'linear-gradient(to right, #C084FC, #93C5FD)' }}>
      </div>
    </header>
  );
}