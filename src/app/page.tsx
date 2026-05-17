"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Sparkles, Zap, Star, Award } from 'lucide-react';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeLargeTitles"
        background="aurora"
        cardStyle="soft-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Collections", id: "features" },
        { name: "New Arrivals", id: "arrivals" },
        { name: "About", id: "about" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Nabiha Collection"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "gradient-bars" }}
      title="Nabiha Collection"
      description="Timeless elegance meets luxury. Discover our premium embroidered 3-piece suits tailored for the modern woman."
      buttons={[{ text: "Shop Now", href: "#products" }]}
      imageSrc="http://img.b2bpic.net/free-photo/attractive-young-blond-woman-with-flower-wreath-head_23-2148079355.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Handcrafted Detail", description: "Intricate embroidery work by master artisans.", buttonIcon: Sparkles, imageSrc: "http://img.b2bpic.net/free-photo/sideways-woman-posing-green-house_23-2148261255.jpg", imageAlt: "Sideways woman posing in a green house" },
        { title: "Premium Lawn", description: "Ultra-soft premium lawn fabric for all seasons.", buttonIcon: Zap, imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-blond-woman-with-flower-wreath-head_23-2148079355.jpg", imageAlt: "Sideways woman posing in a green house" },
        { title: "Gold Accents", description: "Elegant gold thread details for festive occasions.", buttonIcon: Star, imageSrc: "http://img.b2bpic.net/free-photo/close-up-dress-with-paisley-pattern_23-2148237605.jpg", imageAlt: "Sideways woman posing in a green house" },
        { title: "Modern Cuts", description: "Contemporary silhouettes that feel timeless.", buttonIcon: Award, imageSrc: "http://img.b2bpic.net/free-photo/stylish-businesswoman-walking-posing_1328-600.jpg", imageAlt: "Sideways woman posing in a green house" },
      ]}
      title="Featured Embroidery"
      description="Exquisite craftsmanship meets sophisticated design in our new festive collection."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "1", name: "Royal Gold Suit", price: "PKR 8,500", imageSrc: "http://img.b2bpic.net/free-photo/close-up-dress-with-paisley-pattern_23-2148237605.jpg" },
        { id: "2", name: "Midnight Lawn", price: "PKR 7,200", imageSrc: "http://img.b2bpic.net/free-photo/stylish-businesswoman-walking-posing_1328-600.jpg" },
        { id: "3", name: "Beige Elegance", price: "PKR 6,900", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-lying-yellow-cloth-nature_23-2148170289.jpg" },
      ]}
      title="Best Sellers"
      description="Explore our top-rated festive outfits."
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="About Nabiha Collection"
      description="Inspired by the grace and beauty of Pakistani heritage, we bring you curated fashion that reflects luxury and sophistication in every thread."
      metrics={[{ value: "500+", title: "Happy Customers" }, { value: "100%", title: "Quality Assured" }]}
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/business-owners-preparing-their-store_23-2149300867.jpg"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Fatima Zahra", role: "Designer", company: "Client", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-brunette-caucasian-girl-puts-hand-waist-thumbs-up-isolated-green-background-with-copy-space_141793-67070.jpg" },
        { id: "t2", name: "Ayesha Khan", role: "Doctor", company: "Client", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/internationals-people-standing-cafe-with-shopping-bags_1157-31458.jpg" },
        { id: "t3", name: "Sana Ahmed", role: "Manager", company: "Client", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-women-with-clothes_23-2149241337.jpg" },
      ]}
      kpiItems={[{ value: "4.9", label: "Rating" }, { value: "99%", label: "Satisfaction" }, { value: "24/7", label: "Support" }]}
      title="What Our Clients Say"
      description="Experience of elegance through our customers' eyes."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{ variant: "gradient-bars" }}
      text="Visit us in Karachi, Pakistan or call us at +92 320 0387685 for personalized styling advice."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Nabiha Collection"
      leftLink={{ text: "Terms & Conditions", href: "#" }}
      rightLink={{ text: "WhatsApp Support", href: "https://wa.me/923200387685" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}