import React, { useState } from "react";
import "./index.css";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];

function App() {
  // ✅ Hook MUST be here
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>app</div>
  );
}

export default App;
