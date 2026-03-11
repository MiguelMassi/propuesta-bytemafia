"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Database, 
  Layout, 
  ShieldCheck, 
  Zap, 
  Menu, 
  Bell,
  UserCircle,
  Code2,
  Cpu,
  Home,
  ChevronRight,
  ServerCrash,
  FileQuestion,
  Wrench,
  Wand2,
  Palette,
  Check,
  AppWindow,
  X,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  HelpCircle,
  ChevronUp,
  ChevronDown,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  DollarSign,
  CheckCircle2,
  Image,
  Settings,
  Search,
  Filter,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Calendar,
  Share2,
  BarChart3,
  TrendingUp,
  Globe,
  Smartphone
} from 'lucide-react';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

// Definición de Temas (Igual que en el Home)
const THEMES = {
  blue: { id: 'blue', label: 'Tech Blue', primary: 'blue', gray: 'zinc', hex: '#2563EB' },
  indigo: { id: 'indigo', label: 'Trust Indigo', primary: 'indigo', gray: 'slate', hex: '#4F46E5' },
  rose: { id: 'rose', label: 'Modern Rose', primary: 'rose', gray: 'stone', hex: '#E11D48' },
  amber: { id: 'amber', label: 'Luxury Gold', primary: 'amber', gray: 'stone', hex: '#D97706' },
  violet: { id: 'violet', label: 'Creative Violet', primary: 'violet', gray: 'zinc', hex: '#7C3AED' },
  emerald: { id: 'emerald', label: 'Eco Green', primary: 'emerald', gray: 'stone', hex: '#059669' }
};

type ThemeKey = keyof typeof THEMES;

// Componente Demo de Formulario (Definido aquí para uso en la propuesta)
const FormValidationDemo = ({ p, g }: { p: string, g: string }) => {
  const [form, setForm] = useState({ email: '', password: '', phone: '', price: '' });
  const [showPass, setShowPass] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = {
    email: (v: string) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Formato inválido (@ y dominio)' : '',
    password: (v: string) => {
        if (v.length < 8) return 'Mín. 8 caracteres';
        if (!/[A-Z]/.test(v)) return 'Falta mayúscula';
        if (!/[0-9]/.test(v)) return 'Falta número';
        return '';
    },
    phone: (v: string) => v.length < 8 ? 'Se requieren 8 dígitos' : '',
    price: (v: string) => !v ? 'Requerido' : ''
  };

  const errors = {
    email: validate.email(form.email),
    password: validate.password(form.password),
    phone: validate.phone(form.phone),
    price: validate.price(form.price)
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 8) v = v.slice(0, 8);
    setForm({ ...form, phone: v });
  };

  const isFormValid = !Object.values(errors).some(Boolean) && Object.values(form).every(Boolean);

  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center`}>
        {/* Form Visual */}
        <div className={`bg-white p-8 rounded-2xl border border-${g}-200 shadow-lg`}>
            <h3 className={`text-lg font-bold text-${g}-900 mb-6 flex items-center gap-2`}>
                <div className={`p-2 bg-${p}-100 rounded-lg text-${p}-600`}><ShieldCheck className="size-5" /></div>
                Formulario Seguro
            </h3>
            <div className="space-y-5">
                {/* Email */}
                <div>
                    <label className={`text-xs font-semibold text-${g}-500 uppercase tracking-wider`}>Email Corporativo</label>
                    <div className="relative mt-1">
                        <Mail className={`absolute left-3 top-3 size-4 text-${g}-400`} />
                        <input 
                            type="email" 
                            value={form.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                            onBlur={() => setTouched({...touched, email: true})}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${touched.email && errors.email ? 'border-red-500 bg-red-50 text-red-900' : `border-${g}-200 focus:border-${p}-500 focus:ring-4 focus:ring-${p}-500/10`} transition-all outline-none text-sm`}
                            placeholder="nombre@empresa.com"
                        />
                    </div>
                    {touched.email && errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="size-3" /> {errors.email}</p>}
                </div>

                {/* Password */}
                <div>
                    <label className={`text-xs font-semibold text-${g}-500 uppercase tracking-wider`}>Contraseña Segura</label>
                    <div className="relative mt-1">
                        <Lock className={`absolute left-3 top-3 size-4 text-${g}-400`} />
                        <input 
                            type={showPass ? "text" : "password"}
                            value={form.password}
                            onChange={(e) => setForm({...form, password: e.target.value})}
                            onBlur={() => setTouched({...touched, password: true})}
                            className={`w-full pl-10 pr-10 py-2.5 rounded-lg border ${touched.password && errors.password ? 'border-red-500 bg-red-50 text-red-900' : `border-${g}-200 focus:border-${p}-500 focus:ring-4 focus:ring-${p}-500/10`} transition-all outline-none text-sm`}
                            placeholder="••••••••"
                        />
                        <button onClick={() => setShowPass(!showPass)} className={`absolute right-3 top-3 text-${g}-400 hover:text-${g}-600`}>
                            {showPass ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                        </button>
                    </div>
                    {/* Password Strength Indicators */}
                    <div className="flex gap-2 mt-2">
                        <div className={`h-1 flex-1 rounded-full ${form.password.length >= 8 ? 'bg-green-500' : `bg-${g}-200`}`}></div>
                        <div className={`h-1 flex-1 rounded-full ${/[A-Z]/.test(form.password) ? 'bg-green-500' : `bg-${g}-200`}`}></div>
                        <div className={`h-1 flex-1 rounded-full ${/[0-9]/.test(form.password) ? 'bg-green-500' : `bg-${g}-200`}`}></div>
                    </div>
                    {touched.password && errors.password && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="size-3" /> {errors.password}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Phone (Mask) */}
                    <div>
                        <label className={`text-xs font-semibold text-${g}-500 uppercase tracking-wider`}>Teléfono</label>
                        <div className="relative mt-1">
                            <Phone className={`absolute left-3 top-3 size-4 text-${g}-400`} />
                            <input 
                                type="text" 
                                value={form.phone}
                                onChange={handlePhone}
                                onBlur={() => setTouched({...touched, phone: true})}
                                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${touched.phone && errors.phone ? 'border-red-500 bg-red-50 text-red-900' : `border-${g}-200 focus:border-${p}-500`} transition-all outline-none text-sm`}
                                placeholder="70000000"
                                maxLength={8}
                            />
                        </div>
                    </div>
                    {/* Price (Numeric) */}
                    <div>
                        <label className={`text-xs font-semibold text-${g}-500 uppercase tracking-wider`}>Precio</label>
                        <div className="relative mt-1">
                            <DollarSign className={`absolute left-3 top-3 size-4 text-${g}-400`} />
                            <input 
                                type="text" 
                                value={form.price}
                                onChange={(e) => {
                                    if (!isNaN(Number(e.target.value))) setForm({...form, price: e.target.value})
                                }}
                                onBlur={() => setTouched({...touched, price: true})}
                                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${touched.price && errors.price ? 'border-red-500 bg-red-50 text-red-900' : `border-${g}-200 focus:border-${p}-500`} transition-all outline-none text-sm`}
                                placeholder="0.00"
                            />
                        </div>
                    </div>
                </div>

                <button 
                    disabled={!isFormValid}
                    className={`w-full mt-4 py-3 rounded-xl font-bold text-sm transition-all ${isFormValid ? `bg-${p}-600 text-white shadow-lg shadow-${p}-500/30 hover:scale-[1.02]` : `bg-${g}-100 text-${g}-400 cursor-not-allowed`}`}
                >
                    {isFormValid ? "Enviar Formulario Seguro" : "Complete los campos"}
                </button>
            </div>
        </div>

        {/* Explanation */}
        <div className="flex flex-col justify-center space-y-4">
            <div className={`p-5 rounded-2xl bg-${g}-50 border border-${g}-100 transition-all hover:shadow-md`}>
                <h4 className={`font-bold text-${g}-900 mb-2 flex items-center gap-2 text-sm`}><CheckCircle2 className={`text-${p}-600 size-5`} /> Validación Client-side</h4>
                <p className={`text-sm text-${g}-600`}>El botón de "Enviar" se bloquea si falta un campo. Feedback inmediato.</p>
            </div>
            <div className={`p-5 rounded-2xl bg-${g}-50 border border-${g}-100 transition-all hover:shadow-md`}>
                <h4 className={`font-bold text-${g}-900 mb-2 flex items-center gap-2 text-sm`}><ShieldCheck className={`text-${p}-600 size-5`} /> Tipos de datos obligatorios</h4>
                <ul className={`text-sm text-${g}-600 space-y-1.5 list-none`}>
                    <li className="flex items-start gap-2"><div className={`mt-1.5 size-1.5 rounded-full bg-${p}-500`}></div><span><strong>Emails:</strong> Validación de formato (@ y dominio).</span></li>
                    <li className="flex items-start gap-2"><div className={`mt-1.5 size-1.5 rounded-full bg-${p}-500`}></div><span><strong>Passwords:</strong> Mín. 8 caracteres, mayúscula y número.</span></li>
                    <li className="flex items-start gap-2"><div className={`mt-1.5 size-1.5 rounded-full bg-${p}-500`}></div><span><strong>Numéricos:</strong> Evitar letras en precio/cantidad.</span></li>
                </ul>
            </div>
            <div className={`p-5 rounded-2xl bg-${g}-50 border border-${g}-100 transition-all hover:shadow-md`}>
                <h4 className={`font-bold text-${g}-900 mb-2 flex items-center gap-2 text-sm`}><AlertTriangle className={`text-${p}-600 size-5`} /> Estados de Error Visual</h4>
                <p className={`text-sm text-${g}-600`}>El borde del input se pone rojo y aparece un texto explicando el error.</p>
            </div>
            <div className={`p-5 rounded-2xl bg-${g}-50 border border-${g}-100 transition-all hover:shadow-md`}>
                <h4 className={`font-bold text-${g}-900 mb-2 flex items-center gap-2 text-sm`}><Zap className={`text-${p}-600 size-5`} /> Máscaras de Entrada</h4>
                <p className={`text-sm text-${g}-600`}>Control de entrada numérico para Bolivia (8 dígitos), ej: <code>77777777</code>.</p>
            </div>
        </div>
    </div>
  );
};

const PropuestaTecnica = () => {
  const [font, setFont] = useState('font-inter');
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('blue');

  // Helpers para clases dinámicas
  const theme = THEMES[currentTheme];
  const p = theme.primary;
  const g = theme.gray;

  const techStack = [
    {
      title: "Next.js (TypeScript)",
      icon: <Layout className={`w-8 h-8 text-${p}-500`} />,
      justification: "Next.js permite unificar el desarrollo del frontend y el backend (API Routes) en un solo proyecto. El uso de TypeScript garantiza un código más seguro, facilitando la detección de errores en tiempo de desarrollo y mejorando la mantenibilidad a largo plazo."
    },
    {
      title: "Tailwind CSS",
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      justification: "Utilizamos Tailwind para un desarrollo de interfaz ágil y altamente optimizado. Su enfoque en utilidades permite crear diseños responsivos y modernos sin generar archivos CSS pesados, mejorando la velocidad de carga."
    },
    {
      title: "PostgreSQL (Supabase)",
      icon: <Database className="w-8 h-8 text-emerald-500" />,
      justification: "Supabase proporciona una base de datos PostgreSQL robusta con capacidades escalables. Lo elegimos específicamente porque ofrece almacenamiento de imágenes (Storage) integrado y gratuito, ideal para gestionar los activos de la aplicación sin costos adicionales."
    },
    {
      title: "Prisma ORM",
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
      justification: "Prisma actúa como el motor de gestión de datos, ofreciendo un acceso eficiente y seguro a la base de datos. Su tipado automático previene errores en las consultas y facilita la gestión de relaciones complejas entre los datos de la app."
    }
  ];

  // Lista de todos los iconos utilizados para la sección de Iconografía
  const iconsList = [
    { name: 'Propiedad', Icon: Home },
    { name: 'Edificio', Icon: Building2 },
    { name: 'Ubicación', Icon: MapPin },
    { name: 'Dormitorios', Icon: Bed },
    { name: 'Baños', Icon: Bath },
    { name: 'Metros²', Icon: Square },
    { name: 'Precio', Icon: DollarSign },
    { name: 'Buscar', Icon: Search },
    { name: 'Filtros', Icon: Filter },
    { name: 'Favoritos', Icon: Heart },
    { name: 'Citas', Icon: Calendar },
    { name: 'Compartir', Icon: Share2 },
    { name: 'Galería', Icon: Image },
    { name: 'Contacto', Icon: Mail },
    { name: 'Teléfono', Icon: Phone },
    { name: 'Usuario', Icon: UserCircle },
    { name: 'Notificaciones', Icon: Bell },
    { name: 'Seguridad', Icon: ShieldCheck },
    { name: 'Privacidad', Icon: Lock },
    { name: 'Config', Icon: Settings },
    { name: 'Menú', Icon: Menu },
    { name: 'Dashboard', Icon: Layout },
    { name: 'Métricas', Icon: BarChart3 },
    { name: 'Tendencia', Icon: TrendingUp },
    { name: 'Web', Icon: Globe },
    { name: 'Móvil', Icon: Smartphone },
    { name: 'Éxito', Icon: CheckCircle2 },
    { name: 'Alerta', Icon: AlertTriangle }
  ];

  return (
    <div className={`${font === 'font-inter' ? inter.className : montserrat.className} min-h-screen bg-${g}-50 text-${g}-900 transition-colors duration-300 relative`}>
      {/* Navbar con estilo idéntico a la Home */}
      <nav className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-${g}-200 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo con Link al Home */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className={`bg-${p}-600 p-2 rounded-lg group-hover:bg-${p}-700 transition-colors`}>
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold text-${g}-900 ${montserrat.className}`}>
                Byte<span className={`text-${p}-600`}>Mafia</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className={`text-${g}-600 hover:text-${p}-600 font-medium transition-colors`}>Inicio</Link>
              <div className={`flex items-center gap-4 border-l border-${g}-200 ml-4 pl-4`}>
                <button className={`p-2 text-${g}-400 hover:text-${p}-600 transition-colors`}>
                  <Bell className="w-5 h-5" />
                </button>
                <button className={`flex items-center gap-2 p-1 pr-3 rounded-full bg-${g}-100 hover:bg-${g}-200 transition-colors`}>
                  <UserCircle className={`w-8 h-8 text-${g}-500`} />
                  <span className={`text-sm font-medium text-${g}-700`}>Cuenta</span>
                </button>
              </div>
            </div>

            <button className={`md:hidden p-2 text-${g}-600`}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* BARRA DE CONTROL DE DEMO (Idéntica al Home) */}
      <div className={`bg-white text-${g}-500 py-2 text-center text-xs border-b border-${g}-200 transition-colors duration-500 sticky top-16 z-40`}>
          <div className="flex justify-center gap-6 items-center flex-wrap px-4">
            {/* Selector de Fuente */}
            <div className="flex items-center gap-2">
                <Wand2 className="size-3" />
                <span className="opacity-80 font-mono">FUENTE:</span>
                <button onClick={() => setFont('font-montserrat')} className={`px-3 py-0.5 rounded transition-colors ${font === 'font-montserrat' ? `bg-${p}-600 text-white` : `hover:bg-${g}-100`}`}>Montserrat</button>
                <button onClick={() => setFont('font-inter')} className={`px-3 py-0.5 rounded transition-colors ${font === 'font-inter' ? `bg-${p}-600 text-white` : `hover:bg-${g}-100`}`}>Inter</button>
            </div>
            <div className={`w-px h-4 bg-${g}-200 hidden sm:block`}></div>
            {/* Selector de Tema */}
            <div className="flex items-center gap-2">
                <Palette className="size-3" />
                <span className="opacity-80 font-mono">TEMA:</span>
                <div className="flex gap-1">
                    {(Object.keys(THEMES) as ThemeKey[]).map((key) => (
                        <button 
                            key={key}
                            onClick={() => setCurrentTheme(key)}
                            className={`size-5 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${currentTheme === key ? 'ring-2 ring-white' : ''}`}
                            style={{ backgroundColor: THEMES[key].hex }}
                            title={THEMES[key].label}
                        >
                            {currentTheme === key && <Check className="size-3 text-white" strokeWidth={3} />}
                        </button>
                    ))}
                </div>
            </div>
          </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-16 text-center">
          <div className={`inline-flex items-center gap-2 bg-${p}-50 text-${p}-700 px-4 py-2 rounded-full mb-6`}>
            <Cpu className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Arquitectura de Software</span>
          </div>
          <h1 className={`${montserrat.className} text-4xl font-extrabold text-${g}-900 mb-4`}>
            Propuesta Técnica
          </h1>
          <p className={`text-xl text-${g}-600 max-w-2xl mx-auto`}>
            Stack tecnológico seleccionado para garantizar escalabilidad, velocidad y seguridad.
          </p>
        </header>

        {/* Grid de Justificaciones */}
        <div className="grid md:grid-cols-2 gap-8">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className={`group bg-white p-8 rounded-2xl shadow-sm border border-${g}-100 hover:border-${p}-200 hover:shadow-xl hover:shadow-${p}-500/5 transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`p-3 rounded-xl bg-${g}-50 group-hover:bg-white transition-colors duration-300`}>
                  {tech.icon}
                </div>
                <h3 className={`${montserrat.className} text-xl font-bold text-${g}-800`}>
                  {tech.title}
                </h3>
              </div>
              <p className={`text-${g}-600 leading-relaxed text-lg`}>
                {tech.justification}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-20">
          <header className="mb-12 text-center">
            <div className={`inline-flex items-center gap-2 bg-${p}-50 text-${p}-700 px-4 py-2 rounded-full mb-6`}>
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Componentes de UX y Feedback</span>
            </div>
            <h2 className={`${montserrat.className} text-3xl font-extrabold text-${g}-900 mb-3`}>
              Estados de Feedback y Navegación
            </h2>
            <p className={`text-lg text-${g}-600 max-w-3xl mx-auto`}>
              Ejemplos visuales de componentes cruciales para una experiencia de usuario profesional y robusta.
            </p>
          </header>

          <div className="space-y-12">
            {/* 1. Breadcrumbs */}
            <div>
              <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Breadcrumbs (Migas de pan)</h3>
              <div className={`bg-white p-6 rounded-xl border border-${g}-200 shadow-sm`}>
                <p className={`text-sm text-${g}-600 mb-4`}>Útiles si la navegación se vuelve profunda (ej: Inicio &gt; Propiedades &gt; Detalles).</p>
                <nav aria-label="Breadcrumb" className={`bg-${g}-50 p-4 rounded-lg`}>
                  <ol className={`flex items-center gap-2 text-sm text-${g}-500`}>
                    <li>
                      <a href="#" className={`flex items-center gap-1.5 hover:text-${p}-600 hover:underline`}>
                        <Home className="w-4 h-4" />
                        <span>Inicio</span>
                      </a>
                    </li>
                    <li>
                      <ChevronRight className={`w-4 h-4 text-${g}-400`} />
                    </li>
                    <li>
                      <a href="#" className={`hover:text-${p}-600 hover:underline`}>Propiedades</a>
                    </li>
                    <li>
                      <ChevronRight className={`w-4 h-4 text-${g}-400`} />
                    </li>
                    <li className={`font-semibold text-${p}-600 truncate`} aria-current="page">
                      Residencia Moderna en Cala Cala
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            {/* 2. Loading States (Skeletons) */}
            <div>
              <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Loading States (Skeletons)</h3>
              <div className={`bg-white p-6 rounded-xl border border-${g}-200 shadow-sm`}>
                <p className={`text-sm text-${g}-600 mb-4`}>Muestran una silueta del contenido mientras cargan los datos, mejorando la percepción de velocidad.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`rounded-lg border border-${g}-200 bg-white p-4 space-y-4`}>
                      <div className={`w-full h-32 bg-${g}-200 rounded-md animate-pulse`}></div>
                      <div className="space-y-3">
                        <div className={`h-5 bg-${g}-200 rounded w-3/4 animate-pulse`}></div>
                        <div className={`h-4 bg-${g}-200 rounded w-1/2 animate-pulse`}></div>
                      </div>
                      <div className={`h-8 bg-${g}-200 rounded w-1/3 animate-pulse mt-4`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. 404 y 500 Pages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Página 404 Personalizada</h3>
                <div className={`bg-white p-8 rounded-xl border border-${g}-200 h-full flex-grow shadow-sm`}>
                  <div className="text-center flex flex-col justify-center items-center h-full">
                    <FileQuestion className={`w-16 h-16 text-${p}-400 mb-4`} strokeWidth={1.5}/>
                    <h4 className={`${montserrat.className} text-2xl font-bold text-${g}-800`}>Error 404</h4>
                    <p className={`text-${g}-500 mb-6 mt-1`}>La página que buscas no existe o fue movida.</p>
                    <button className={`bg-${p}-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-${p}-700 transition-colors shadow-sm`}>
                      Volver al Inicio
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Página 500 (Server Error)</h3>
                <div className={`bg-white p-8 rounded-xl border border-${g}-200 h-full flex-grow shadow-sm`}>
                  <div className="text-center flex flex-col justify-center items-center h-full">
                    <ServerCrash className="w-16 h-16 text-rose-400 mb-4" strokeWidth={1.5}/>
                    <h4 className={`${montserrat.className} text-2xl font-bold text-${g}-800`}>Error 500</h4>
                    <p className={`text-${g}-500 mb-6 mt-1`}>Algo falló en nuestros servidores. Inténtalo de nuevo más tarde.</p>
                    <button className={`bg-${g}-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-${g}-800 transition-colors shadow-sm`}>
                      Reintentar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Navegación por Facetas */}
            <div className={`bg-white p-8 rounded-xl border border-${g}-200 shadow-sm`}>
                <h3 className={`text-xl font-bold text-${g}-800 mb-6 flex items-center gap-2`}>
                    <Filter className={`text-${p}-600 size-5`} /> Navegación por Facetas (Filtros)
                </h3>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Mockup */}
                    <div className={`w-full md:w-64 flex-shrink-0 border border-${g}-200 rounded-xl p-5 bg-${g}-50/50`}>
                        <div className="flex justify-between items-center mb-6">
                            <span className={`font-bold text-${g}-900 text-sm`}>Filtros</span>
                            <button className={`text-${p}-600 text-xs font-medium hover:underline`}>Limpiar todo</button>
                        </div>
                        
                        {/* Filter Group: Tipo */}
                        <div className="mb-6">
                            <p className={`text-xs font-bold text-${g}-500 uppercase tracking-wider mb-3`}>Tipo de Propiedad</p>
                            <div className="space-y-2.5">
                                <label className="flex items-center gap-2.5 text-sm cursor-pointer group">
                                    <div className={`size-4 rounded border border-${g}-300 bg-white flex items-center justify-center group-hover:border-${p}-500 transition-colors`}>
                                        <div className={`size-2.5 rounded-sm bg-${p}-600`}></div>
                                    </div>
                                    <span className={`text-${g}-700 font-medium`}>Casas</span>
                                    <span className={`text-${g}-400 text-xs ml-auto`}>124</span>
                                </label>
                                <label className="flex items-center gap-2.5 text-sm cursor-pointer group">
                                    <div className={`size-4 rounded border border-${g}-300 bg-white flex items-center justify-center group-hover:border-${p}-500 transition-colors`}></div>
                                    <span className={`text-${g}-600 group-hover:text-${g}-900`}>Departamentos</span>
                                    <span className={`text-${g}-400 text-xs ml-auto`}>85</span>
                                </label>
                            </div>
                        </div>

                        {/* Filter Group: Precio */}
                        <div className="mb-2">
                            <p className={`text-xs font-bold text-${g}-500 uppercase tracking-wider mb-3`}>Rango de Precio</p>
                            <div className="flex items-center gap-2 mb-4">
                                <div className={`flex-1 bg-white border border-${g}-200 rounded px-2 py-1 text-xs text-${g}-600`}>$50k</div>
                                <span className={`text-${g}-400`}>-</span>
                                <div className={`flex-1 bg-white border border-${g}-200 rounded px-2 py-1 text-xs text-${g}-600`}>$450k</div>
                            </div>
                            <div className={`h-1.5 bg-${g}-200 rounded-full relative`}>
                                <div className={`absolute left-0 right-1/3 top-0 bottom-0 bg-${p}-500 rounded-full`}></div>
                                <div className={`absolute right-1/3 top-1/2 -translate-y-1/2 size-3 bg-white border-2 border-${p}-500 rounded-full shadow-sm cursor-pointer`}></div>
                            </div>
                        </div>
                    </div>

                    {/* Content Preview Mockup */}
                    <div className="flex-1 flex flex-col gap-4">
                        {/* Active Tags */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-sm text-${g}-500 mr-2`}>Activos:</span>
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-${p}-50 text-${p}-700 text-xs font-medium border border-${p}-100`}>
                                Casas <button className={`hover:bg-${p}-200 rounded-full p-0.5`}><X className="size-3" /></button>
                            </span>
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-${p}-50 text-${p}-700 text-xs font-medium border border-${p}-100`}>
                                $50k - $450k <button className={`hover:bg-${p}-200 rounded-full p-0.5`}><X className="size-3" /></button>
                            </span>
                        </div>
                        
                        {/* Skeleton Results */}
                        <div className={`flex-1 border-2 border-dashed border-${g}-100 rounded-xl bg-${g}-50/30 flex items-center justify-center min-h-[200px]`}>
                            <div className="text-center p-6">
                                <Search className={`size-8 text-${g}-300 mx-auto mb-2`} />
                                <p className={`text-${g}-500 text-sm`}>La lista de propiedades se actualiza automáticamente al filtrar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Componentes de Interacción Avanzada */}
        <section className="mt-20">
          <header className="mb-12 text-center">
            <div className={`inline-flex items-center gap-2 bg-${p}-50 text-${p}-700 px-4 py-2 rounded-full mb-6`}>
              <AppWindow className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Interactividad Avanzada</span>
            </div>
            <h2 className={`${montserrat.className} text-3xl font-extrabold text-${g}-900 mb-3`}>
              Componentes de Interacción
            </h2>
            <p className={`text-lg text-${g}-600 max-w-3xl mx-auto`}>
              Elementos que enriquecen la experiencia del usuario proporcionando contexto, control y retroalimentación inmediata.
            </p>
          </header>

          <div className="space-y-12">
            {/* 1. Modales y Drawers */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`bg-white p-6 rounded-xl border border-${g}-200 shadow-sm relative overflow-hidden h-64`}>
                <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Modales (Confirmaciones)</h3>
                <div className={`bg-${g}-900/50 absolute inset-0 flex items-center justify-center p-4 backdrop-blur-sm`}>
                  <div className="bg-white rounded-lg shadow-2xl p-6 max-w-sm w-full transform scale-100">
                    <h4 className={`text-lg font-bold text-${g}-900 mb-2`}>¿Eliminar propiedad?</h4>
                    <p className={`text-${g}-500 mb-4 text-sm`}>Esta acción no se puede deshacer. Todos los datos asociados se perderán.</p>
                    <div className="flex justify-end gap-2">
                      <button className={`px-3 py-1.5 rounded-lg text-${g}-600 hover:bg-${g}-100 text-sm font-medium`}>Cancelar</button>
                      <button className="px-3 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 text-sm font-medium">Eliminar</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`bg-white p-6 rounded-xl border border-${g}-200 shadow-sm relative overflow-hidden h-64`}>
                <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Drawers (Menús Laterales)</h3>
                <div className={`absolute top-0 right-0 h-full w-64 bg-white shadow-2xl border-l border-${g}-100 p-4 transform translate-x-0`}>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`font-bold text-${g}-900`}>Filtros</span>
                    <button className={`p-1 hover:bg-${g}-100 rounded`}><X className={`w-4 h-4 text-${g}-500`} /></button>
                  </div>
                  <div className="space-y-4">
                    <div className={`h-2 bg-${g}-100 rounded w-full`}></div>
                    <div className={`h-2 bg-${g}-100 rounded w-3/4`}></div>
                    <div className={`h-2 bg-${g}-100 rounded w-1/2`}></div>
                  </div>
                  <button className={`w-full mt-8 bg-${p}-600 text-white py-2 rounded-lg text-sm`}>Aplicar</button>
                </div>
              </div>
            </div>

            {/* 2. Toasts & Tooltips */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Toasts (Notificaciones)</h3>
                <div className={`bg-${g}-50 p-8 rounded-xl border border-${g}-200 flex flex-col gap-4 items-center justify-center h-full min-h-[200px]`}>
                  <div className="bg-white px-4 py-3 rounded-lg shadow-lg border-l-4 border-green-500 flex items-center gap-3 w-full max-w-sm">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className={`text-sm font-medium text-${g}-900`}>Éxito</p>
                      <p className={`text-xs text-${g}-500`}>Formulario enviado correctamente.</p>
                    </div>
                  </div>
                  <div className="bg-white px-4 py-3 rounded-lg shadow-lg border-l-4 border-red-500 flex items-center gap-3 w-full max-w-sm">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <div>
                      <p className={`text-sm font-medium text-${g}-900`}>Error</p>
                      <p className={`text-xs text-${g}-500`}>No se pudo cargar la imagen.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Tooltips (Ayuda Contextual)</h3>
                <div className={`bg-white p-8 rounded-xl border border-${g}-200 flex items-center justify-center h-full min-h-[200px]`}>
                  <div className="relative group">
                    <button className={`p-3 rounded-full bg-${g}-100 hover:bg-${g}-200 transition-colors`}>
                      <HelpCircle className={`w-6 h-6 text-${g}-600`} />
                    </button>
                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-${g}-900 text-white text-xs rounded-md whitespace-nowrap opacity-100 transition-opacity`}>
                      Más información aquí
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-${g}-900`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Acordeones */}
            <div>
              <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Acordeones (FAQs)</h3>
              <div className={`bg-white rounded-xl border border-${g}-200 overflow-hidden`}>
                <div className={`border-b border-${g}-100`}>
                  <button className={`w-full flex justify-between items-center p-4 text-left hover:bg-${g}-50`}>
                    <span className={`font-medium text-${g}-700`}>¿Cómo gestionan la seguridad de los datos?</span>
                    <ChevronUp className={`w-5 h-5 text-${g}-400`} />
                  </button>
                  <div className={`p-4 pt-0 text-${g}-600 text-sm`}>
                    Utilizamos Row Level Security (RLS) de Supabase para asegurar que cada usuario solo acceda a sus propios datos.
                  </div>
                </div>
                <div>
                  <button className={`w-full flex justify-between items-center p-4 text-left hover:bg-${g}-50`}>
                    <span className={`font-medium text-${g}-700`}>¿Es escalable la infraestructura?</span>
                    <ChevronDown className={`w-5 h-5 text-${g}-400`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formularios y Validación */}
        <section className="mt-20">
          <header className="mb-12 text-center">
            <div className={`inline-flex items-center gap-2 bg-${p}-50 text-${p}-700 px-4 py-2 rounded-full mb-6`}>
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Seguridad y Validación</span>
            </div>
            <h2 className={`${montserrat.className} text-3xl font-extrabold text-${g}-900 mb-3`}>
              Formularios Inteligentes
            </h2>
            <p className={`text-lg text-${g}-600 max-w-3xl mx-auto`}>
              Ejemplo interactivo de validación en tiempo real, máscaras de entrada y gestión de errores.
            </p>
          </header>
          <FormValidationDemo p={p} g={g} />
        </section>

        {/* Sistemas de Diseño */}
        <section className="mt-20">
          <header className="mb-12 text-center">
            <div className={`inline-flex items-center gap-2 bg-${p}-50 text-${p}-700 px-4 py-2 rounded-full mb-6`}>
              <Palette className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Sistema de Diseño</span>
            </div>
            <h2 className={`${montserrat.className} text-3xl font-extrabold text-${g}-900 mb-3`}>
              Consistencia Visual
            </h2>
            <p className={`text-lg text-${g}-600 max-w-3xl mx-auto`}>
              Estándares tipográficos, estados vacíos y adaptabilidad a modo oscuro.
            </p>
          </header>

          <div className="space-y-12">
            {/* 1. Tipografía */}
            <div className={`bg-white p-8 rounded-2xl border border-${g}-200 shadow-sm`}>
               <h3 className={`text-xl font-bold text-${g}-800 mb-6 border-b border-${g}-100 pb-2`}>Escala Tipográfica</h3>
               <div className="space-y-6">
                  <div className="grid md:grid-cols-4 items-center gap-4">
                    <span className={`text-${g}-400 text-sm font-mono`}>H1 / Montserrat / 4xl</span>
                    <h1 className={`${montserrat.className} col-span-3 text-4xl font-extrabold text-${g}-900`}>El rápido zorro marrón</h1>
                  </div>
                  <div className="grid md:grid-cols-4 items-center gap-4">
                    <span className={`text-${g}-400 text-sm font-mono`}>H2 / Montserrat / 3xl</span>
                    <h2 className={`${montserrat.className} col-span-3 text-3xl font-bold text-${g}-900`}>Salta sobre el perro perezoso</h2>
                  </div>
                  <div className="grid md:grid-cols-4 items-center gap-4">
                    <span className={`text-${g}-400 text-sm font-mono`}>H3 / Montserrat / xl</span>
                    <h3 className={`${montserrat.className} col-span-3 text-xl font-semibold text-${g}-900`}>Visualización de datos y métricas</h3>
                  </div>
                  <div className="grid md:grid-cols-4 items-center gap-4">
                    <span className={`text-${g}-400 text-sm font-mono`}>P / Inter / base</span>
                    <p className={`${inter.className} col-span-3 text-base leading-relaxed text-${g}-600`}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-4 items-center gap-4">
                    <span className={`text-${g}-400 text-sm font-mono`}>Small / Inter / sm</span>
                    <small className={`${inter.className} col-span-3 text-sm font-medium text-${g}-500`}>
                      *Términos y condiciones aplican. Válido hasta agotar stock.
                    </small>
                  </div>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* 2. Empty State */}
                <div className={`bg-white p-8 rounded-2xl border border-${g}-200 shadow-sm flex flex-col`}>
                    <h3 className={`text-xl font-bold text-${g}-800 mb-6`}>Empty State (Sin Datos)</h3>
                    <div className={`flex-1 flex flex-col items-center justify-center p-8 bg-${g}-50 rounded-xl border-2 border-dashed border-${g}-200 text-center`}>
                        <div className={`size-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm`}>
                            <Image className={`size-8 text-${g}-400`} />
                        </div>
                        <h4 className={`text-lg font-bold text-${g}-900`}>Sin imágenes todavía</h4>
                        <p className={`text-${g}-500 text-sm mt-1 mb-6 max-w-[250px]`}>
                            Tu galería está vacía. ¡Sube tu primera foto para empezar a destacar!
                        </p>
                        <button className={`bg-${p}-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-${p}-700 transition-colors shadow-lg shadow-${p}-500/20`}>
                            Subir Imagen
                        </button>
                    </div>
                </div>

                {/* 3. Dark Mode Preview */}
                <div className={`bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col relative overflow-hidden`}>
                    <div className="absolute top-4 right-4 bg-amber-500/10 text-[10px] uppercase tracking-wider font-bold text-amber-500 px-2 py-1 rounded border border-amber-500/20">Dark Mode</div>
                    <h3 className="text-xl font-bold text-white mb-6">Modo Oscuro (Minimizado)</h3>
                    
                    {/* Mini Home Page Simulation */}
                    <div className="w-full max-w-[320px] mx-auto bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col">
                        
                        {/* Mini Navbar */}
                        <div className="h-10 border-b border-slate-800 flex items-center justify-between px-4 bg-slate-900/90 backdrop-blur-sm sticky top-0 z-10">
                            <div className="flex items-center gap-1.5">
                                <div className="bg-amber-600 p-1 rounded"><Building2 className="size-3 text-white" /></div>
                                <span className="font-bold text-slate-100 text-xs">In<span className="text-amber-500">Devs</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Search className="size-3 text-slate-400" />
                                <Menu className="size-3 text-slate-400" />
                            </div>
                        </div>

                        {/* Mini Hero */}
                        <div className="relative h-28 bg-slate-800">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900/20 to-slate-900 z-10"></div>
                            <div className="absolute inset-0 bg-slate-800"></div> {/* Fallback bg */}
                            <div className="absolute inset-0 z-20 flex flex-col justify-center px-4">
                                <span className="text-amber-500 text-[8px] font-bold tracking-wider uppercase mb-1">Nueva Colección</span>
                                <h3 className="text-white text-sm font-bold leading-tight mb-2">Hogares que <br/>inspiran vida.</h3>
                                <div className="h-6 bg-white/10 backdrop-blur border border-white/10 rounded-full flex items-center px-2">
                                    <span className="text-slate-400 text-[8px]">Buscar propiedad...</span>
                                </div>
                            </div>
                        </div>

                        {/* Mini Listings */}
                        <div className="p-4 space-y-3 bg-slate-900">
                            <div className="flex justify-between items-end">
                                <h4 className="text-white text-xs font-bold">Destacados</h4>
                                <span className="text-amber-500 text-[8px]">Ver todo</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {[1, 2].map((i) => (
                                    <div key={i} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-colors group cursor-pointer">
                                        <div className="h-16 bg-slate-700 relative flex items-center justify-center">
                                            <Image className="size-4 text-slate-600" />
                                            <div className="absolute top-1 right-1 bg-amber-600 text-white text-[6px] px-1 rounded-sm">Venta</div>
                                        </div>
                                        <div className="p-2">
                                            <div className="h-2 w-3/4 bg-slate-600 rounded mb-1"></div>
                                            <div className="h-1.5 w-1/2 bg-amber-500/20 rounded mb-2"></div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-white text-[8px] font-bold">$250k</span>
                                                <div className="size-3 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                                                    <ChevronRight className="size-2 text-slate-400 group-hover:text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Iconografía */}
        <section className="mt-20">
          <header className="mb-12 text-center">
            <div className={`inline-flex items-center gap-2 bg-${p}-50 text-${p}-700 px-4 py-2 rounded-full mb-6`}>
              <Layout className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Recursos Visuales</span>
            </div>
            <h2 className={`${montserrat.className} text-3xl font-extrabold text-${g}-900 mb-3`}>
              Iconografía
            </h2>
            <p className={`text-lg text-${g}-600 max-w-3xl mx-auto`}>
              Conjunto de iconos consistentes utilizados en toda la aplicación.
            </p>
            <a href="https://lucide.dev/icons" target="_blank" rel="noopener noreferrer" className={`mt-4 inline-flex items-center gap-2 text-${p}-600 font-bold hover:underline`}>
                Buscar en librería oficial (Lucide) <ChevronRight className="size-4" />
            </a>
          </header>

          <div className={`bg-white p-8 rounded-2xl border border-${g}-200 shadow-sm`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
               {iconsList.map(({ name, Icon }) => (
                 <div key={name} className="flex flex-col items-center gap-3 group cursor-default">
                    <div className={`p-4 rounded-xl bg-${g}-50 text-${g}-500 group-hover:bg-${p}-50 group-hover:text-${p}-600 transition-colors`}>
                        <Icon className="size-6" />
                    </div>
                    <span className={`text-xs font-medium text-${g}-500 font-mono group-hover:text-${g}-900`}>{name}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        <footer className="mt-20 text-center">
          <div className={`inline-flex items-center gap-2 bg-${g}-900 text-white px-8 py-4 rounded-2xl shadow-lg`}>
            <Code2 className={`w-6 h-6 text-${p}-400`} />
            <span className="font-semibold">Next.js + Tailwind + Supabase + Prisma</span>
          </div>
        </footer>
      </main>

      {/* SAFELIST: Forzar generación de clases dinámicas de Tailwind (Copiado del Home) */}
      <div className="hidden">
        {/* Grays */}
        <div className="bg-slate-50 bg-slate-900 text-slate-500 text-slate-600 text-slate-900 border-slate-100 border-slate-200 border-slate-500"></div>
        <div className="bg-zinc-50 bg-zinc-900 text-zinc-500 text-zinc-600 text-zinc-900 border-zinc-100 border-zinc-200 border-zinc-500"></div>
        <div className="bg-stone-50 bg-stone-900 text-stone-500 text-stone-600 text-stone-900 border-stone-100 border-stone-200 border-stone-500"></div>
        {/* Primaries */}
        <div className="bg-blue-50 bg-blue-100 bg-blue-500 bg-blue-600 text-blue-100 text-blue-500 text-blue-600 text-blue-700 border-blue-200 border-blue-400 border-blue-500 ring-blue-500 shadow-blue-500/20 hover:shadow-blue-500/10"></div>
        <div className="bg-indigo-50 bg-indigo-100 bg-indigo-500 bg-indigo-600 text-indigo-100 text-indigo-500 text-indigo-600 text-indigo-700 border-indigo-200 border-indigo-400 border-indigo-500 ring-indigo-500 shadow-indigo-500/20 hover:shadow-indigo-500/10"></div>
        <div className="bg-rose-50 bg-rose-100 bg-rose-500 bg-rose-600 text-rose-100 text-rose-500 text-rose-600 text-rose-700 border-rose-200 border-rose-400 border-rose-500 ring-rose-500 shadow-rose-500/20 hover:shadow-rose-500/10"></div>
        <div className="bg-amber-50 bg-amber-100 bg-amber-500 bg-amber-600 text-amber-100 text-amber-500 text-amber-600 text-amber-700 border-amber-200 border-amber-400 border-amber-500 ring-amber-500 shadow-amber-500/20 hover:shadow-amber-500/10"></div>
        <div className="bg-violet-50 bg-violet-100 bg-violet-500 bg-violet-600 text-violet-100 text-violet-500 text-violet-600 text-violet-700 border-violet-200 border-violet-400 border-violet-500 ring-violet-500 shadow-violet-500/20 hover:shadow-violet-500/10"></div>
        <div className="bg-emerald-50 bg-emerald-100 bg-emerald-500 bg-emerald-600 text-emerald-100 text-emerald-500 text-emerald-600 text-emerald-700 border-emerald-200 border-emerald-400 border-emerald-500 ring-emerald-500 shadow-emerald-500/20 hover:shadow-emerald-500/10"></div>
      </div>
    </div>
  );
};

export default PropuestaTecnica;