import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Article', href: '/article' },
  { label: 'Consultation', href: '/consultation' },
];

const helpItems = [
  { label: 'Pusat bantuan', href: '/help' },
  { label: 'Syarat & Ketentuan', href: '/terms' },
  { label: 'Pemberitahuan privasi', href: '/privacy' },
  { label: 'FAQ', href: '/faq' },
];

const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" 
       className="w-8 h-8 flex items-center justify-center bg-white/30 rounded-full text-lg hover:bg-white/50 transition">
        {children}
    </a>
);


export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-200 to-purple-300 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-x-8 lg:gap-x-16 border-b border-white/20 pb-10">
          
          <div>
            <h3 className="text-2xl font-bold mb-3">MediBot</h3>
            <p className="text-sm space-y-1">
              <span>Teman cerdas untuk</span><br/>
              <span>Dapatkan informasi</span><br/>
              <span>Konsultasi terpercaya</span>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Bantuan & Panduan</h4>
            <ul className="space-y-3">
              {helpItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <p className="text-sm mb-4">+3822 4567 8910</p>
            
            <div className="flex space-x-3">
              <SocialIcon href="#"><i className="fab fa-tiktok"></i></SocialIcon> 
              <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
              <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
              <SocialIcon href="#"><i className="fab fa-twitter"></i></SocialIcon>
            </div>
          </div>

        </div>

        <div className="mt-8 text-center text-xs text-white/70">
          © 2024 Aido Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
}