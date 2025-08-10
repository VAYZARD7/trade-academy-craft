import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp, User, BookOpen, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">TradeMaster Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('header.courses')}
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('header.about')}
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('header.pricing')}
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('header.contact')}
            </Link>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <Button variant="ghost" asChild>
              <Link to="/login">{t('header.login')}</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/register">{t('header.start_learning')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link to="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('header.courses')}
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('header.about')}
              </Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('header.pricing')}
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('header.contact')}
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
                <Button variant="ghost" asChild>
                  <Link to="/login">{t('header.login')}</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/register">{t('header.start_learning')}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;