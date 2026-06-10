import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  variant?: "general" | "colegios" | "empresas";
}

const DESCRIPTIONS = {
  general: "Impulsamos el desarrollo socioemocional de estudiantes y docentes con inteligencia artificial, para promover una sana convivencia escolar.",
  colegios: "Impulsamos el desarrollo socioemocional de estudiantes y docentes con inteligencia artificial, para promover una sana convivencia escolar.",
  empresas: "Impulsamos el bienestar emocional de las personas con inteligencia artificial, para construir equipos y comunidades más sanas.",
};

export default function Footer({ variant = "general" }: FooterProps) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Image
              className="foot-logo"
              src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620c8_Logo%20MUUD%20(1).png"
              alt="MUUD"
              width={140}
              height={40}
            />
            <p>{DESCRIPTIONS[variant]}</p>
            <div className="foot-socials">
              <a href="https://www.instagram.com/muud.app/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/662996d8d341aac4a3f456c2_4.png" alt="Instagram" width={20} height={20} />
              </a>
              <a href="https://www.linkedin.com/company/muud-app/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/662996d8c30fbb4b5a0b44df_5.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="https://www.facebook.com/muud.app.latam" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/662998f198f0c8cbcff2509b_Disen%CC%83o%20sin%20ti%CC%81tulo.png" alt="Facebook" width={20} height={20} />
              </a>
            </div>
          </div>
          <div className="foot-col">
            <h4>Soluciones</h4>
            <Link href="/colegios">Para colegios</Link>
            <Link href="/empresas">Para empresas</Link>
            <Link href="/">Inicio</Link>
            {variant === "colegios" || variant === "general" ? (
              <a href="https://school.muud.app/welcome" target="_blank" rel="noopener noreferrer">Acceso colegios</a>
            ) : (
              <a href="https://business.muud.app" target="_blank" rel="noopener noreferrer">Acceso empresas</a>
            )}
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <a href="https://muud-app.webflow.io/terminos-y-condiciones-muud-spa" target="_blank" rel="noopener noreferrer">Términos y condiciones</a>
            <a href="https://www.muud.app/politica-de-privacidad-muud-spa" target="_blank" rel="noopener noreferrer">Política de privacidad</a>
            <a href="https://www.muud.app/eula" target="_blank" rel="noopener noreferrer">EULA</a>
            <a href="https://forms.gle/qXwFsM4n2VEnoo5h7" target="_blank" rel="noopener noreferrer">Eliminar cuenta</a>
          </div>
          <div className="foot-col">
            <h4>Contacto</h4>
            <div className="foot-contact">
              <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620c5_Location.svg" alt="" width={18} height={18} style={{ marginTop: 2 }} />
              <span>Av. Presidente Kennedy 5600, Of. 507, Vitacura, Chile</span>
            </div>
            <div className="foot-contact">
              <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620c6_Mail.svg" alt="" width={18} height={18} style={{ marginTop: 2 }} />
              <a href="mailto:hola@muud.app" style={{ padding: 0 }}>hola@muud.app</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <p>© 2026 MUUD SpA · Todos los derechos reservados</p>
          <div style={{ color: "rgba(255,255,255,.4)" }}>Hecho con cariño en Chile 🇨🇱</div>
        </div>
      </div>
    </footer>
  );
}
