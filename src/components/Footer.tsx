// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-6 mt-12">
      <div className="container mx-auto px-6 space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()} Grégoire Fontaine – BTS SIO SISR. Tous droits réservés.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="www.linkedin.com/in/grégoire-fontaine-7228642a6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:gregoire.fontaine@example.com"
            className="hover:text-primary transition"
          >
            gregoire.fontaine@sts-sio-caen.info
          </a>
        </div>
      </div>
    </footer>
  )
}