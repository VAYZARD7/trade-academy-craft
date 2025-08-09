import { Link } from "react-router-dom";
import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">TradeMaster Academy</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional trading education platform designed to transform beginners into confident traders.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@trademaster-academy.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning Paths */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Learning Paths</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/beginner" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Beginner Trading
                </Link>
              </li>
              <li>
                <Link to="/advanced" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Advanced Strategies
                </Link>
              </li>
              <li>
                <Link to="/risk-management" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Risk Management
                </Link>
              </li>
              <li>
                <Link to="/technical-analysis" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Technical Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 TradeMaster Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;