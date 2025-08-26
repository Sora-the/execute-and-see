import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AlgorithmShowcase } from "@/components/AlgorithmShowcase";

const Index = () => {
  // Placeholder functions for Clerk integration
  const handleSignIn = () => {
    console.log("Sign in clicked - Clerk integration needed");
    // TODO: Integrate with Clerk when publishable key is provided
  };

  const handleSignUp = () => {
    console.log("Sign up clicked - Clerk integration needed");
    // TODO: Integrate with Clerk when publishable key is provided
  };

  const handleGetStarted = () => {
    console.log("Get started clicked");
    // TODO: Navigate to dashboard or show sign up modal
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSignIn={handleSignIn} onSignUp={handleSignUp} />
      <Hero onGetStarted={handleGetStarted} />
      <Features />
      <AlgorithmShowcase />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Codesculpt. Sculpting the Logic Behind Your Code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
