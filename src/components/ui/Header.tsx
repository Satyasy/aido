import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Article', href: '/article' },
  { name: 'Consultation', href: '/consultation' },
];

export function Header({ currentPage }: { currentPage: string }) {
  const gradientButtonClasses = 
    'px-6 py-2 rounded-full font-semibold text-white ' +
    'bg-gradient-to-r from-pink-400 to-purple-400 ' +
    'shadow-lg shadow-purple-200/50 hover:opacity-90 transition';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        
        <Link href="/" className="text-2xl font-bold text-gray-900">
          AIDOC
        </Link>
        
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`text-base font-medium transition duration-150 ${
                item.name.toLowerCase() === currentPage.toLowerCase() 
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link href="/signin" className={gradientButtonClasses}>
            Sign In
          </Link>
          <div className="hidden md:block w-10 h-10 rounded-full overflow-hidden border-2 border-purple-300">
            <Image 
              src="/assets/avatar.png"
              alt="User Avatar" 
              width={40} 
              height={40} 
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="h-0.5 max-w-7xl mx-auto" 
           style={{ backgroundImage: 'linear-gradient(to right, #C084FC, #93C5FD)' }}>
      </div>
    </header>
  );
}