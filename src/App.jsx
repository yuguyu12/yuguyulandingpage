import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Moon,
  Sun,
  Activity,
  Target,
  ChevronRight,
  TrendingUp,
  Menu,
  X,
  Heart,
  Brain,
  Zap,
  Moon as MoonIcon,
  Utensils,
  Watch,
  BarChart3,
  Sparkles,
  Shield,
  Layers,
  Compass,
  CheckCircle2,
  Sliders,
  RefreshCw,
  Cpu,
  Flame,
  Scale,
  Gauge,
  Radio,
  Orbit,
  Database,
  Filter,
  HeartPulse,
  Clock,
  ListChecks,
  Wind,
  Droplets,
  Thermometer,
  Smile,
  Coffee,
  AlertCircle
} from 'lucide-react';
import './index.css';

// ---- Error Boundary ----
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error('React Error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: '#ff4d4f', background: '#0a0a0f', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h2>Component Error Encountered</h2>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '0.85rem', color: '#aaa', marginTop: '1rem' }}>
            {String(this.state.error?.stack || this.state.error)}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: '1.5rem', padding: '0.6rem 1.2rem', background: '#E11D48', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            Reload Experience
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ---- Media Query Hook ----
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);
  return matches;
};

// ---- Reveal Animation Wrapper ----
const Reveal = ({ children, delay = 0, className = '', style = {} }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);

// =====================================================================
// 1. NAVIGATION
// =====================================================================
const Navbar = ({ isMobile, isLightMode, setIsLightMode, onContactClick, currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Overview', href: '#/' },
    { id: 'band', label: 'Screenless Band', href: '#/band' },
    { id: 'coach', label: 'Personal Coach', href: '#/coach' },
    { id: 'telemetry', label: 'Telemetry Matrix', href: '#/telemetry' },
    { id: 'indices', label: 'Calculated Indices', href: '#/indices' },
    { id: 'ecosystem', label: 'Ecosystem & Roadmap', href: '#/ecosystem' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <nav
        className="nav-blur"
        style={{
          padding: isMobile ? '0.85rem 1.25rem' : '0.85rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#/"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          style={{
            fontSize: isMobile ? '1.4rem' : '1.55rem',
            fontWeight: '800',
            fontFamily: 'var(--font-logo)',
            letterSpacing: '-0.04em',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>
            <span style={{ color: 'var(--text-primary)' }}>Yugu</span>
            <span style={{ color: 'var(--accent-red)' }}>yu</span>
          </span>
          <span className="mono-tag" style={{ fontSize: '0.6rem', padding: '2px 6px', background: 'var(--bg-tertiary)', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
            SCREENLESS BAND + AI
          </span>
        </a>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                  style={{
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.01em',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    padding: '0.42rem 0.75rem',
                    borderRadius: '8px',
                    background: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                    border: isActive ? '1px solid var(--border-light)' : '1px solid transparent',
                    boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.25)' : 'none'
                  }}
                  onMouseEnter={e => { if (!isActive) e.target.style.color = 'var(--text-primary)'; }}
                  onMouseLeave={e => { if (!isActive) e.target.style.color = 'var(--text-secondary)'; }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}

        {/* Right CTA & Controls */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            aria-label="Toggle theme"
            style={{
              width: '38px', height: '38px', borderRadius: '50%',
              background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid var(--border-light)', transition: 'all 0.2s ease'
            }}
          >
            {isLightMode ? <Sun size={15} color="var(--text-primary)" /> : <Moon size={15} color="var(--text-primary)" />}
          </button>

          {isMobile ? (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)' }}
            >
              {mobileMenuOpen ? <X size={16} color="var(--text-primary)" /> : <Menu size={16} color="var(--text-primary)" />}
            </button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onContactClick}
              className="btn btn-accent"
              style={{ padding: '0.55rem 1.4rem', fontSize: '0.85rem' }}
            >
              Get Early Access
            </motion.button>
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: '60px', left: 0, right: 0, bottom: 0,
              background: 'var(--bg-primary)', zIndex: 99,
              padding: '2rem 1.5rem',
              display: 'flex', flexDirection: 'column', gap: '0.65rem',
              overflowY: 'auto'
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = currentPage === link.id;
              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                  style={{
                    fontSize: '1.15rem', fontWeight: isActive ? 700 : 500, fontFamily: 'var(--font-heading)',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: isActive ? 'rgba(225, 29, 72, 0.12)' : 'var(--bg-secondary)',
                    border: isActive ? '1px solid var(--accent-red)' : '1px solid var(--border-light)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                  }}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} color={isActive ? 'var(--accent-red)' : 'var(--text-tertiary)'} />
                </motion.a>
              );
            })}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              onClick={() => { setMobileMenuOpen(false); onContactClick(); }}
              className="btn btn-accent"
              style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.75rem' }}
            >
              Get Early Access
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// =====================================================================
// BIOMETRIC RADAR CONSOLE (Interactive Multi-Axis Telemetry)
// =====================================================================
const BiometricRadar = ({ isMobile }) => {
  const [activePreset, setActivePreset] = useState(0);

  const presets = [
    {
      name: "Optimal Readiness",
      tag: "READY",
      values: [0.92, 0.84, 0.78, 0.94, 0.88, 0.96],
      recovery: "88%",
      recoveryStatus: "OPTIMAL",
      recoveryColor: "#22c55e",
      hrv: "78 ms",
      hrvDelta: "+12% BASELINE",
      status: "OPTIMAL",
    },
    {
      name: "High Strain Day",
      tag: "STRAIN",
      values: [0.70, 0.96, 0.90, 0.65, 0.82, 0.86],
      recovery: "64%",
      recoveryStatus: "HIGH LOAD",
      recoveryColor: "var(--accent-orange)",
      hrv: "62 ms",
      hrvDelta: "8% BELOW BASELINE",
      status: "STRAIN",
    },
    {
      name: "Deep Restoration",
      tag: "RESTORE",
      values: [0.96, 0.45, 0.70, 0.98, 0.95, 0.94],
      recovery: "95%",
      recoveryStatus: "RESTORED",
      recoveryColor: "#22c55e",
      hrv: "88 ms",
      hrvDelta: "+18% BASELINE",
      status: "PEAK",
    }
  ];

  const current = presets[activePreset];

  const axes = [
    { label: "HRV / AUTONOMIC", short: "HRV", angle: -Math.PI / 2 },
    { label: "CARDIO LOAD", short: "CARDIO", angle: -Math.PI / 6 },
    { label: "METABOLIC FLUX", short: "METABOLIC", angle: Math.PI / 6 },
    { label: "RECOVERY READINESS", short: "RECOVERY", angle: Math.PI / 2 },
    { label: "SLEEP ARCHITECTURE", short: "SLEEP", angle: (5 * Math.PI) / 6 },
    { label: "RESPIRATORY", short: "RESP", angle: (-5 * Math.PI) / 6 },
  ];

  const cx = 220;
  const cy = 195;
  const maxR = 120;
  const rings = [0.25, 0.5, 0.75, 1.0];

  // Calculate polygon points
  const polygonPoints = current.values
    .map((val, i) => {
      const angle = axes[i].angle;
      const x = cx + maxR * val * Math.cos(angle);
      const y = cy + maxR * val * Math.sin(angle);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <div style={{ position: 'relative' }}>
      {/* The Central Radar Console */}
      <div className="radar-console" style={{ padding: isMobile ? '1rem' : '1.5rem', position: 'relative' }}>

        {/* 4 Corner HUD Brackets */}
        <div className="radar-corner-hud" style={{ top: '10px', left: '10px', borderTop: '2px solid var(--accent-red)', borderLeft: '2px solid var(--accent-red)' }} />
        <div className="radar-corner-hud" style={{ top: '10px', right: '10px', borderTop: '2px solid var(--accent-red)', borderRight: '2px solid var(--accent-red)' }} />
        <div className="radar-corner-hud" style={{ bottom: '10px', left: '10px', borderBottom: '2px solid var(--accent-red)', borderLeft: '2px solid var(--accent-red)' }} />
        <div className="radar-corner-hud" style={{ bottom: '10px', right: '10px', borderBottom: '2px solid var(--accent-red)', borderRight: '2px solid var(--accent-red)' }} />

        {/* Top Console Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="pulse-dot" style={{ width: '7px', height: '7px' }} />
            <span className="mono-tag" style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.68rem' }}>
              SCREENLESS WRIST BAND // LIVE TELEMETRY
            </span>
          </div>
          <div className="mono-tag" style={{ fontSize: '0.64rem', color: 'var(--text-tertiary)' }}>
            250 Hz PPG • CONTINUOUS
          </div>
        </div>

        {/* SVG Canvas Stage */}
        <div style={{ position: 'relative', width: '100%', height: isMobile ? '300px' : '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          {/* Animated 360 Radar Conic Sweep Beam */}
          <div className="radar-sweep-beam" />

          {/* Animated Concentric Ping Ring */}
          <div className="radar-ping-ring" />

          <svg
            viewBox="0 0 440 390"
            style={{ width: '100%', height: '100%', overflow: 'visible', position: 'relative', zIndex: 3 }}
          >
            <defs>
              <radialGradient id="radarPolyGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.4" />
                <stop offset="70%" stopColor="var(--accent-crimson)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0.05" />
              </radialGradient>
              <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Concentric Reference Rings */}
            {rings.map((rFrac) => (
              <circle
                key={rFrac}
                cx={cx}
                cy={cy}
                r={maxR * rFrac}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeDasharray={rFrac === 1.0 ? 'none' : '3,4'}
                strokeWidth={rFrac === 1.0 ? '1.5' : '1'}
              />
            ))}

            {/* Coordinate Ring Percent Text */}
            {rings.map((rFrac) => (
              <text
                key={`label-${rFrac}`}
                x={cx + 6}
                y={cy - maxR * rFrac + 11}
                fill="rgba(255, 255, 255, 0.3)"
                fontSize="8"
                fontFamily="var(--font-mono)"
              >
                {Math.round(rFrac * 100)}%
              </text>
            ))}

            {/* Spoke Axes & Labels */}
            {axes.map((axis) => {
              const endX = cx + maxR * Math.cos(axis.angle);
              const endY = cy + maxR * Math.sin(axis.angle);
              const labelX = cx + (maxR + 24) * Math.cos(axis.angle);
              const labelY = cy + (maxR + 24) * Math.sin(axis.angle);
              return (
                <g key={axis.label}>
                  <line
                    x1={cx}
                    y1={cy}
                    x2={endX}
                    y2={endY}
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="1"
                  />
                  <circle
                    cx={endX}
                    cy={endY}
                    r="2"
                    fill="rgba(255, 255, 255, 0.3)"
                  />
                  <text
                    x={labelX}
                    y={labelY + 3}
                    textAnchor="middle"
                    fill="var(--text-secondary)"
                    fontSize={isMobile ? '8' : '9'}
                    fontWeight="600"
                    fontFamily="var(--font-mono)"
                    letterSpacing="0.05em"
                  >
                    {isMobile ? axis.short : axis.label}
                  </text>
                </g>
              );
            })}

            {/* Animated Athlete Biometric Polygon */}
            <polygon
              points={polygonPoints}
              fill="url(#radarPolyGrad)"
              stroke="var(--accent-red)"
              strokeWidth="2.5"
              strokeLinejoin="round"
              filter="url(#radarGlow)"
              className="radar-polygon-glow"
              style={{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
            />

            {/* Polygon Node Vertices with Value Dots */}
            {current.values.map((val, i) => {
              const angle = axes[i].angle;
              const x = cx + maxR * val * Math.cos(angle);
              const y = cy + maxR * val * Math.sin(angle);
              return (
                <g key={i} style={{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                  <circle
                    cx={x}
                    cy={y}
                    r="5"
                    fill="var(--accent-red)"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="9"
                    fill="none"
                    stroke="rgba(225, 29, 72, 0.5)"
                    strokeWidth="1"
                  />
                </g>
              );
            })}

            {/* Center Hub Core Display */}
            <circle cx={cx} cy={cy} r="28" fill="var(--bg-primary)" stroke="rgba(225, 29, 72, 0.4)" strokeWidth="1.5" />
            <text x={cx} y={cy - 2} textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800" fontFamily="var(--font-heading)">
              {current.recovery}
            </text>
            <text x={cx} y={cy + 10} textAnchor="middle" fill="var(--accent-red)" fontSize="7" fontWeight="700" fontFamily="var(--font-mono)">
              {current.status}
            </text>
          </svg>
        </div>

        {/* Bottom Console Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--border-light)',
          paddingTop: '0.75rem',
          marginTop: '0.25rem',
          position: 'relative',
          zIndex: 10,
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          gap: '0.5rem'
        }}>
          <span className="mono-tag" style={{ color: 'var(--text-tertiary)', fontSize: '0.65rem' }}>
            SIMULATE ENVELOPE:
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {presets.map((p, idx) => {
              const isSel = activePreset === idx;
              return (
                <button
                  key={p.name}
                  onClick={() => setActivePreset(idx)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: isSel ? 'var(--accent-red)' : 'var(--bg-tertiary)',
                    color: isSel ? '#ffffff' : 'var(--text-secondary)',
                    border: `1px solid ${isSel ? 'var(--accent-crimson)' : 'var(--border-light)'}`,
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {p.tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Live Telemetry Badge: Recovery */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="glass-card"
        style={{
          position: 'absolute',
          top: '-20px',
          right: isMobile ? '-10px' : '-24px',
          padding: '0.85rem 1.25rem',
          borderRadius: '16px',
          background: 'rgba(10, 10, 15, 0.88)',
          backdropFilter: 'blur(16px)',
          border: `1px solid ${current.recoveryColor}`,
          boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 20,
          transition: 'border-color 0.4s ease'
        }}
      >
        <div style={{
          width: '38px', height: '38px', borderRadius: '50%',
          background: 'rgba(34, 197, 94, 0.1)', border: `2px solid ${current.recoveryColor}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Heart size={18} color={current.recoveryColor} />
        </div>
        <div>
          <div className="mono-tag" style={{ fontSize: '0.65rem' }}>RECOVERY SCORE</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: current.recoveryColor, fontFamily: 'var(--font-heading)' }}>
            {current.recovery} <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 400 }}>{current.recoveryStatus}</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Live Telemetry Badge: HRV */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="glass-card"
        style={{
          position: 'absolute',
          bottom: '-25px',
          left: isMobile ? '-10px' : '-24px',
          padding: '0.85rem 1.25rem',
          borderRadius: '16px',
          background: 'rgba(10, 10, 15, 0.88)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(147, 51, 234, 0.35)',
          boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 20
        }}
      >
        <div style={{
          width: '38px', height: '38px', borderRadius: '50%',
          background: 'rgba(147, 51, 234, 0.1)', border: '2px solid var(--accent-purple)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Activity size={18} color="var(--accent-purple)" />
        </div>
        <div>
          <div className="mono-tag" style={{ fontSize: '0.65rem' }}>HRV RMSSD</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
            {current.hrv} <span style={{ fontSize: '0.75rem', color: 'var(--accent-red)', fontWeight: 600 }}>{current.hrvDelta}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// =====================================================================
// 2. HERO SECTION : Product Led Positioning
// =====================================================================
const HeroSection = ({ isMobile, onCtaClick, onExploreBand }) => {
  return (
    <section
      id="hero"
      className="tech-grid-bg"
      style={{
        minHeight: '100vh',
        paddingTop: isMobile ? '7.5rem' : '10.5rem',
        paddingBottom: isMobile ? '4rem' : '6rem',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Cinematic ambient rim light */}
      <div style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%, -20%)',
        width: isMobile ? '400px' : '900px', height: isMobile ? '400px' : '900px',
        background: 'radial-gradient(circle, rgba(225, 29, 72, 0.12) 0%, rgba(147, 51, 234, 0.03) 40%, transparent 70%)',
        filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
          gap: isMobile ? '3rem' : '4rem',
          alignItems: 'center'
        }}>

          {/* Left Narrative */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span className="label-tag" style={{
                background: 'rgba(225, 29, 72, 0.08)',
                color: 'var(--accent-red)',
                border: '1px solid rgba(225, 29, 72, 0.25)'
              }}>
                <span className="pulse-dot" style={{ marginRight: '6px' }} />
                <span>SCREENLESS WEARABLE WRIST BAND + AI COACH</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '1.5rem', lineHeight: 1.04 }}
            >
              Your body tells a story.{' '}
              <span className="text-gradient-accent">
                Yuguyu gives it direction.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: isMobile ? '1.05rem' : '1.22rem',
                maxWidth: '580px',
                marginBottom: '2.25rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7
              }}
            >
              Powered by our <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>screenless biometric wearable wrist band</strong> and an intelligent adaptive coaching layer. Continuous physiological monitoring across cardiovascular strain, sleep, and recovery, with <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>zero screens, zero digital noise</strong>, and total focus on your performance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', alignItems: isMobile ? 'stretch' : 'center', marginBottom: '2.5rem' }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onCtaClick}
                className="btn btn-accent"
                style={{ padding: '0.95rem 2.2rem', fontSize: '1rem' }}
              >
                Get Early Access <ArrowRight size={17} style={{ marginLeft: '8px' }} />
              </motion.button>

              <button
                type="button"
                onClick={(e) => { e.preventDefault(); if (onExploreBand) onExploreBand(); }}
                className="btn btn-secondary"
                style={{ padding: '0.95rem 1.8rem', fontSize: '1rem', textAlign: 'center', cursor: 'pointer' }}
              >
                Explore The Screenless Band
              </button>
            </motion.div>

            {/* Athlete Cohort Presence */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.7 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                marginBottom: '2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="/images/athlete_gym_strength.jpg"
                  alt="Strength Athlete in Cohort"
                  style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--bg-primary)' }}
                />
                <img
                  src="/images/athlete_training_run.jpg"
                  alt="Endurance Athlete in Cohort"
                  style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--bg-primary)', marginLeft: '-10px' }}
                />
                <img
                  src="/images/sleep_recovery_rest.jpg"
                  alt="Recovery Athlete in Cohort"
                  style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--bg-primary)', marginLeft: '-10px' }}
                />
                <img
                  src="/images/nutrition_fuel_prep.jpg"
                  alt="Performance Nutritionist in Cohort"
                  style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--bg-primary)', marginLeft: '-10px' }}
                />
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Active Athlete Cohort:</span> Testing continuous 250 Hz strain, sleep architecture & adaptive AI coaching
              </div>
            </motion.div>

            {/* Fast Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                borderTop: '1px solid var(--border-light)',
                paddingTop: '1.5rem',
                maxWidth: '520px'
              }}
            >
              <div>
                <div className="mono-val" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Screenless
                </div>
                <div className="mono-tag" style={{ fontSize: '0.68rem', marginTop: '2px' }}>
                  Wearable Wrist Band
                </div>
              </div>

              <div>
                <div className="mono-val" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-red)' }}>
                  7 Domains
                </div>
                <div className="mono-tag" style={{ fontSize: '0.68rem', marginTop: '2px' }}>
                  Continuous Biometrics
                </div>
              </div>

              <div>
                <div className="mono-val" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  24/7 AI
                </div>
                <div className="mono-tag" style={{ fontSize: '0.68rem', marginTop: '2px' }}>
                  Adaptive Coach
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Hardware / Radar Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <BiometricRadar isMobile={isMobile} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};


// =====================================================================
// 3. TELEMETRY STREAM RIBBON
// =====================================================================
const TelemetryRibbon = () => {
  const streamItems = [
    { label: 'HARDWARE', val: 'SCREENLESS WRIST BAND', status: '24/7 ACTIVE' },
    { label: 'INTEGRATION', val: 'UNIVERSAL WEARABLE SYNC', status: 'CONNECTED' },
    { label: 'CARDIOVASCULAR', val: 'HRV 84 MS', status: 'BASELINE +14%' },
    { label: 'SLEEP ARCHITECTURE', val: 'DEEP 1H 44M', status: 'RESTORED' },
    { label: 'METABOLIC EXPENDITURE', val: '2,640 KCAL', status: 'BALANCED' },
    { label: 'TRAINING VOLUME', val: '14,200 LBS', status: 'OVERLOAD' },
    { label: 'RESPIRATORY RATE', val: '14.2 BR/MIN', status: 'STABLE' },
    { label: 'SKIN TEMPERATURE', val: '0.3°C VARIANCE', status: 'NORMAL' },
    { label: 'AUTONOMIC TONE', val: 'PARASYMPATHETIC', status: 'RECOVERED' },
  ];

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)',
      padding: '0.75rem 0',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        gap: '3rem',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        width: 'max-content',
        animation: 'marquee 32s linear infinite'
      }}>
        {[...streamItems, ...streamItems, ...streamItems].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
            <span className="mono-tag" style={{ fontSize: '0.7rem' }}>{item.label}:</span>
            <span className="mono-val" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>{item.val}</span>
            <span style={{ fontSize: '0.65rem', color: 'var(--accent-red)', opacity: 0.85 }}>// {item.status}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};


// =====================================================================
// 4. THE PROBLEM: DATA WITHOUT DIRECTION
// =====================================================================
const ProblemSection = ({ isMobile }) => {
  const siloItems = [
    { icon: <Activity size={22} />, title: "Workout Tracker", subtitle: "Records isolated exercises", stat: "1,240 lbs lifted", tag: "NO CONTEXT" },
    { icon: <Utensils size={22} />, title: "Nutrition App", subtitle: "Counts static calories", stat: "2,350 kcal logged", tag: "NO CONTEXT" },
    { icon: <MoonIcon size={22} />, title: "Sleep Monitor", subtitle: "Scores hours in bed", stat: "6h 15m duration", tag: "NO CONTEXT" },
    { icon: <Watch size={22} />, title: "Smartwatch", subtitle: "Pings steps & heart rate", stat: "8,420 steps", tag: "NO CONTEXT" },
  ];

  return (
    <section id="system" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: isMobile ? '3rem' : '5rem' }}>

        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center', marginBottom: isMobile ? '3rem' : '4.5rem' }}>
          <Reveal>
            <span className="label-tag" style={{
              background: 'var(--bg-tertiary)', color: 'var(--text-secondary)',
              border: '1px solid var(--border-light)', marginBottom: '1.25rem', display: 'inline-flex'
            }}>
              01 // THE FUNDAMENTAL PROBLEM
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              More fitness data than ever.<br />
              <span className="text-gradient">Zero unified direction.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: isMobile ? '1.02rem' : '1.18rem', maxWidth: '620px', margin: '0 auto' }}>
              You don't lack data. You have four separate apps producing four conflicting graphs.
              None of them speak to each other. None of them answer the only question that matters:
              <strong style={{ color: 'var(--text-primary)' }}> what should your body actually do today?</strong>
            </p>
          </Reveal>
        </div>

        {/* Silos Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          {siloItems.map((item, i) => (
            <Reveal key={item.title} delay={0.1 + i * 0.08}>
              <div
                className="shimmer-card"
                style={{
                  padding: '1.75rem 1.25rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderStyle: 'dashed'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-secondary)'
                    }}>
                      {item.icon}
                    </div>
                    <span className="mono-tag" style={{ color: 'var(--accent-red)', fontSize: '0.62rem' }}>
                      {item.tag}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{item.subtitle}</p>
                </div>

                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span className="mono-tag" style={{ fontSize: '0.65rem' }}>RAW LOG</span>
                  <span className="mono-val" style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>{item.stat}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The Synthesis Solution */}
        <Reveal delay={0.35}>
          <div
            className="glass-card"
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              padding: isMobile ? '1.75rem 1.25rem' : '2.5rem 3rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.08) 0%, rgba(10, 10, 15, 0.95) 100%)',
              border: '1px solid rgba(225, 29, 72, 0.25)'
            }}
          >
            <span className="mono-tag" style={{ color: 'var(--accent-red)', marginBottom: '0.5rem', display: 'inline-block' }}>
              THE YUGUYU SOLUTION
            </span>
            <h3 style={{ fontSize: isMobile ? '1.35rem' : '1.75rem', marginBottom: '1rem' }}>
              One Coach. One Continuous Context. Total Direction.
            </h3>
            <p style={{ fontSize: isMobile ? '0.95rem' : '1.08rem', color: 'var(--text-secondary)', maxWidth: '660px', margin: '0 auto', lineHeight: 1.7 }}>
              Instead of forcing you to guess how your 5.5 hours of sleep relates to today's heavy squats
              or your post workout protein timing, Yuguyu continuously correlates the signals and produces
              an exact daily protocol.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};


// =====================================================================
// 4B. SCREENLESS WEARABLE WRIST BAND SHOWCASE
// =====================================================================
const ScreenlessWearableSection = ({ isMobile, onCtaClick }) => {
  return (
    <section id="wearable-band" className="section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
      <div className="section-divider" />

      {/* Background subtle radial glow */}
      <div style={{
        position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -20%)',
        width: isMobile ? '350px' : '750px', height: isMobile ? '350px' : '750px',
        background: 'radial-gradient(circle, rgba(225, 29, 72, 0.09) 0%, transparent 65%)',
        filter: 'blur(90px)', pointerEvents: 'none'
      }} />

      <div className="container" style={{ paddingTop: isMobile ? '3rem' : '5rem', position: 'relative', zIndex: 10 }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto', marginBottom: isMobile ? '3rem' : '4.5rem' }}>
          <Reveal>
            <span className="label-tag" style={{
              background: 'rgba(225, 29, 72, 0.08)', color: 'var(--accent-red)',
              border: '1px solid rgba(225, 29, 72, 0.25)', marginBottom: '1.25rem', display: 'inline-flex'
            }}>
              <Watch size={14} style={{ marginRight: '6px' }} />
              PROPRIETARY HARDWARE // WRIST TELEMETRY
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              The Yuguyu Screenless<br />
              <span className="text-gradient-accent">Wearable Wrist Band.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: isMobile ? '1.02rem' : '1.18rem', maxWidth: '640px', margin: '0 auto' }}>
              We intentionally built a tracker with <strong>no screen</strong>. No buzzing alerts, no blue light before sleep, and zero digital fatigue. Just continuous, medical grade physiological telemetry that stays locked to your wrist 24/7.
            </p>
          </Reveal>
        </div>

        {/* Dual Industrial Hardware Showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '2rem',
          alignItems: 'stretch',
          marginBottom: '3.5rem'
        }}>
          {/* Card 1: Universal Wearable Sync */}
          <Reveal delay={0.1}>
            <div className="glass-card" style={{
              height: '100%',
              padding: isMobile ? '1.75rem 1.4rem' : '2.25rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(180deg, rgba(14, 14, 20, 0.95) 0%, rgba(5, 5, 5, 0.98) 100%)',
              border: '1px solid var(--border-light)',
              borderRadius: '24px'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="mono-tag" style={{ color: 'var(--accent-red)', fontWeight: 700 }}>
                    01 // UNIVERSAL INTEGRATION
                  </span>
                  <span className="mono-tag" style={{ background: 'var(--bg-tertiary)', padding: '3px 9px', borderRadius: '4px' }}>
                    SYNC YOUR TRACKER TODAY
                  </span>
                </div>

                <h3 style={{ fontSize: isMobile ? '1.35rem' : '1.65rem', marginBottom: '0.85rem' }}>
                  Bring Your Existing Wearable
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  Don’t wait for dedicated hardware. Yuguyu connects directly with the trackers and platforms you already wear. Continuous heart rate, sleep architecture, HRV RMSSD, and daily strain streams are automatically ingested into your personal AI model.
                </p>

                {/* Telemetry Metric Widgets */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: '0.85rem',
                  marginBottom: '1.5rem'
                }}>
                  {/* Sync Stream Status */}
                  <div style={{
                    background: 'rgba(12, 12, 18, 0.88)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '14px',
                    padding: '0.75rem 0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1.5px solid #10B981',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <RefreshCw size={15} color="#10B981" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        DATA INGESTION
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#10B981', letterSpacing: '-0.01em' }}>
                        Universal <span style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-secondary)' }}>SYNC ENGINE</span>
                      </div>
                    </div>
                  </div>

                  {/* Normalized AI Baseline */}
                  <div style={{
                    background: 'rgba(12, 12, 18, 0.88)',
                    border: '1px solid rgba(147, 51, 234, 0.3)',
                    borderRadius: '14px',
                    padding: '0.75rem 0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: 'rgba(147, 51, 234, 0.12)',
                      border: '1.5px solid #9333EA',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <Activity size={16} color="#9333EA" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        SIGNAL ACCURACY
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                        Continuous <span style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--accent-red)' }}>MULTI SOURCE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag Pills */}
              <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <span className="mono-tag" style={{ background: 'var(--bg-tertiary)', padding: '4px 10px', borderRadius: '6px' }}>
                  APPLE HEALTH
                </span>
                <span className="mono-tag" style={{ background: 'var(--bg-tertiary)', padding: '4px 10px', borderRadius: '6px' }}>
                  WHOOP
                </span>
                <span className="mono-tag" style={{ background: 'var(--bg-tertiary)', padding: '4px 10px', borderRadius: '6px' }}>
                  OURA RING
                </span>
                <span className="mono-tag" style={{ background: 'var(--bg-tertiary)', padding: '4px 10px', borderRadius: '6px' }}>
                  GARMIN CONNECT
                </span>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Proprietary Hardware R&D */}
          <Reveal delay={0.2}>
            <div className="glass-card" style={{
              height: '100%',
              padding: isMobile ? '1.75rem 1.4rem' : '2.25rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(180deg, rgba(14, 14, 20, 0.95) 0%, rgba(5, 5, 5, 0.98) 100%)',
              border: '1px solid var(--border-light)',
              borderRadius: '24px'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="mono-tag" style={{ color: 'var(--accent-red)', fontWeight: 700 }}>
                    02 // PROPRIETARY HARDWARE
                  </span>
                  <span className="mono-tag" style={{ background: 'var(--bg-tertiary)', padding: '3px 9px', borderRadius: '4px' }}>
                    IN ACTIVE R&D
                  </span>
                </div>

                <h3 style={{ fontSize: isMobile ? '1.35rem' : '1.65rem', marginBottom: '0.85rem' }}>
                  The Future Screenless Wrist Band
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  In parallel with our software platform, our purpose built screenless biometric wearable is currently in engineering development. Conceived with zero screens to eliminate digital fatigue, engineered for sub millimeter skin contact, and targeting high frequency continuous optical telemetry.
                </p>

                {/* Telemetry Metric Widgets */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: '0.85rem',
                  marginBottom: '1.5rem'
                }}>
                  {/* R&D Stage */}
                  <div style={{
                    background: 'rgba(12, 12, 18, 0.88)',
                    border: '1px solid rgba(225, 29, 72, 0.3)',
                    borderRadius: '14px',
                    padding: '0.75rem 0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: 'rgba(225, 29, 72, 0.12)',
                      border: '1.5px solid var(--accent-red)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <Cpu size={16} color="var(--accent-red)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        HARDWARE STAGE
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--accent-red)', letterSpacing: '-0.01em' }}>
                        In Engineering <span style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-secondary)' }}>PROTOTYPE</span>
                      </div>
                    </div>
                  </div>

                  {/* Early Access Cohort */}
                  <div style={{
                    background: 'rgba(12, 12, 18, 0.88)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    borderRadius: '14px',
                    padding: '0.75rem 0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1.5px solid #38BDF8',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <Shield size={16} color="#38BDF8" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        BETA ACCESS
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                        Join the Journey <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#38BDF8' }}>OPEN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag Pills */}
              <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <span className="mono-tag" style={{ background: 'var(--bg-tertiary)', padding: '4px 10px', borderRadius: '6px' }}>
                  SCREENLESS DESIGN
                </span>
                <span className="mono-tag" style={{ background: 'var(--bg-tertiary)', padding: '4px 10px', borderRadius: '6px' }}>
                  ZERO NOTIFICATIONS
                </span>
                <span className="mono-tag" style={{ background: 'var(--bg-tertiary)', padding: '4px 10px', borderRadius: '6px' }}>
                  250 Hz OPTICAL TARGET
                </span>
                <span className="mono-tag" style={{ background: 'var(--bg-tertiary)', padding: '4px 10px', borderRadius: '6px' }}>
                  HARDWARE ROADMAP
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Human Performance in Action - Real Athletes */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            <Reveal>
              <span className="label-tag" style={{
                background: 'rgba(225, 29, 72, 0.08)', color: 'var(--accent-red)',
                border: '1px solid rgba(225, 29, 72, 0.2)', marginBottom: '0.75rem', display: 'inline-flex'
              }}>
                HUMAN PHYSIOLOGY IN ACTION // 24/7 WRIST CONTINUITY
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 style={{ fontSize: isMobile ? '1.5rem' : '1.95rem', marginBottom: '0.75rem' }}>
                Engineered for How Real Athletes Move, Recover & Fuel.
              </h3>
            </Reveal>
            <Reveal delay={0.12}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6 }}>
                No fragile screens to crack during heavy barbell pulls. No glowing blue light corrupting your circadian melatonin. Just uninterrupted biological fidelity across your entire day.
              </p>
            </Reveal>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}>
            {/* Card 1: Strength & Power */}
            <Reveal delay={0.1}>
              <div className="cinematic-card" style={{ height: '100%', borderRadius: '24px' }}>
                <div className="cinematic-img-wrap" style={{ height: isMobile ? '280px' : '320px' }}>
                  <img
                    src="/images/athlete_gym_strength.jpg"
                    alt="Strength athlete resting on barbell in gym wearing screenless band"
                    className="cinematic-img"
                  />
                  <div className="cinematic-gradient-overlay" />
                  <div style={{
                    position: 'absolute', top: '14px', right: '14px',
                    background: 'rgba(12, 12, 18, 0.92)', backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(225, 29, 72, 0.45)', borderRadius: '10px',
                    padding: '5px 11px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-red)', fontWeight: 700, letterSpacing: '0.04em',
                    zIndex: 6
                  }}>
                    STRAIN // 18.6 PEAK
                  </div>
                </div>
                <div className="cinematic-text-body" style={{ padding: isMobile ? '0 1.4rem 1.6rem' : '0 1.75rem 2rem', marginTop: '-3rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.18rem', marginBottom: '0.45rem', color: 'var(--text-primary)', textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
                      Barbell & Heavy Axial Loading
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                      Low profile woven strap eliminates wrist flexion impingement during heavy cleans, snatches, and deadlifts. Zero accidental touchscreen taps.
                    </p>
                  </div>
                  <div className="mono-tag" style={{ color: 'var(--text-tertiary)', fontSize: '0.68rem', marginTop: '1.25rem', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                    164 BPM MAX • HIGH CAPILLARY CONTACT
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Nocturnal Recovery */}
            <Reveal delay={0.18}>
              <div className="cinematic-card" style={{ height: '100%', borderRadius: '24px' }}>
                <div className="cinematic-img-wrap" style={{ height: isMobile ? '280px' : '320px' }}>
                  <img
                    src="/images/sleep_recovery_rest.jpg"
                    alt="Athlete sleeping comfortably wearing screenless band"
                    className="cinematic-img"
                  />
                  <div className="cinematic-gradient-overlay" />
                  <div style={{
                    position: 'absolute', top: '14px', right: '14px',
                    background: 'rgba(12, 12, 18, 0.92)', backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(16, 185, 129, 0.45)', borderRadius: '10px',
                    padding: '5px 11px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)',
                    color: '#10B981', fontWeight: 700, letterSpacing: '0.04em',
                    zIndex: 6
                  }}>
                    RECOVERY // 91% OPTIMAL
                  </div>
                </div>
                <div className="cinematic-text-body" style={{ padding: isMobile ? '0 1.4rem 1.6rem' : '0 1.75rem 2rem', marginTop: '-3rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.18rem', marginBottom: '0.45rem', color: 'var(--text-primary)', textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
                      Rest Architecture & RMSSD
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                      Screenless design preserves nocturnal melatonin cycles. Accurately tracks slow wave sleep and millisecond level HRV without buzzes waking you.
                    </p>
                  </div>
                  <div className="mono-tag" style={{ color: 'var(--text-tertiary)', fontSize: '0.68rem', marginTop: '1.25rem', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                    74 MS RMSSD • 2H 14M DEEP REST
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Cardiovascular Threshold */}
            <Reveal delay={0.26}>
              <div className="cinematic-card" style={{ height: '100%', borderRadius: '24px' }}>
                <div className="cinematic-img-wrap" style={{ height: isMobile ? '280px' : '320px' }}>
                  <img
                    src="/images/athlete_training_run.jpg"
                    alt="Athlete road running at dusk catching breath wearing screenless band"
                    className="cinematic-img"
                  />
                  <div className="cinematic-gradient-overlay" />
                  <div style={{
                    position: 'absolute', top: '14px', right: '14px',
                    background: 'rgba(12, 12, 18, 0.92)', backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(56, 189, 248, 0.45)', borderRadius: '10px',
                    padding: '5px 11px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)',
                    color: '#38BDF8', fontWeight: 700, letterSpacing: '0.04em',
                    zIndex: 6
                  }}>
                    ZONE 4 TO 5 // VO2 MAX
                  </div>
                </div>
                <div className="cinematic-text-body" style={{ padding: isMobile ? '0 1.4rem 1.6rem' : '0 1.75rem 2rem', marginTop: '-3rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.18rem', marginBottom: '0.45rem', color: 'var(--text-primary)', textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
                      Endurance & Cardiac Output
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                      High frequency 250 Hz optical PPG captures clean microvascular blood flow during sweat, high cadence arm swing, and wet road tempo sessions.
                    </p>
                  </div>
                  <div className="mono-tag" style={{ color: 'var(--text-tertiary)', fontSize: '0.68rem', marginTop: '1.25rem', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                    4:15/KM PACE • SWEAT RESISTANT
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3 Core Wrist Band Principles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          {[
            {
              title: "Zero Screens. Zero Distractions.",
              desc: "Traditional smartwatches constantly demand your attention with emails, texts, and alarms. Yuguyu's screenless wrist band works silently in the background, keeping your focus where it belongs: on your training and your life.",
              icon: <Watch size={20} color="var(--accent-red)" />
            },
            {
              title: "Unbroken 24/7 Wrist Adherence",
              desc: "AI coaching models are only as good as the continuity of their data. Engineered with featherweight balance and breathable weave to ensure comfortable 24/7 skin adherence through sleep, workouts, and daily wear.",
              icon: <Shield size={20} color="var(--accent-red)" />
            },
            {
              title: "Direct Feed to Your AI Coach",
              desc: "Every pulse wave, autonomic variance, and sleep phase logged on your wrist syncs seamlessly to your personal coach model. Your coach interprets your physiological readiness and adapts your workout before your feet hit the floor.",
              icon: <Brain size={20} color="var(--accent-red)" />
            }
          ].map((item, idx) => (
            <Reveal key={item.title} delay={0.1 + idx * 0.08}>
              <div
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  height: '100%',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{
                  width: '38px', height: '38px', borderRadius: '10px',
                  background: 'rgba(225, 29, 72, 0.08)', border: '1px solid rgba(225, 29, 72, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.12rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Bar */}
        <Reveal delay={0.3}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.08) 0%, rgba(10, 10, 15, 0.95) 100%)',
            border: '1px solid rgba(225, 29, 72, 0.3)',
            borderRadius: '18px',
            padding: isMobile ? '1.5rem' : '2rem 2.5rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: '1.5rem'
          }}>
            <div>
              <span className="mono-tag" style={{ color: 'var(--accent-red)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                HARDWARE ACCESS
              </span>
              <h4 style={{ fontSize: isMobile ? '1.2rem' : '1.35rem', marginBottom: '0.25rem' }}>
                Experience Screenless Wrist Biometrics
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                Join the early access cohort to test the Yuguyu Screenless Wearable Wrist Band and adaptive AI coach.
              </p>
            </div>
            <button
              onClick={onCtaClick}
              className="btn btn-accent"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}
            >
              Join the Journey <ArrowRight size={16} style={{ marginLeft: '6px' }} />
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
};


// =====================================================================
// 5. YUGUYU’S HEALTH & FITNESS TELEMETRY MATRIX (Categories 1 to 7)
// =====================================================================
const TelemetryMatrixSection = ({ isMobile }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'cardio',
      name: 'Cardiovascular Health',
      icon: <HeartPulse size={18} />,
      source: 'WEARABLE BAND',
      sourceType: 'wearable',
      headline: 'Heart and Cardiovascular Dynamics',
      purpose: 'Understand cardiovascular trends, training response, stress, and recovery. Crucially: HRV is interpreted against your personal baseline, not a generic universal score.',
      metrics: [
        { name: 'Heart Rate (HR)', desc: 'Real time beats per minute throughout the day and exercise', sample: '58 bpm' },
        { name: 'Resting Heart Rate (RHR)', desc: 'Nocturnal resting pulse indicating baseline cardiovascular strain', sample: '48 bpm' },
        { name: 'Heart Rate Variability (HRV)', desc: 'RMSSD autonomic nervous system parasympathetic recovery metric', sample: '84 ms' },
        { name: 'Walking & Exercise HR', desc: 'Cardiovascular efficiency and heart rate reserve during exertion', sample: '138 bpm' },
        { name: 'HR Recovery after Exercise', desc: 'Post workout rate of heart rate deceleration back to baseline', sample: '32 bpm drop / 1m' },
        { name: 'Estimated VO₂ Max', desc: 'Cardiovascular fitness and maximal oxygen uptake estimation', sample: '54.2 ml/kg' },
      ],
      aiInterpretation: 'Your HRV is currently +14% above your 30 day baseline, indicating elevated parasympathetic readiness. Your heart rate recovery post interval session was 32 bpm in minute one, confirming high aerobic recovery capacity.'
    },
    {
      id: 'sleep',
      name: 'Sleep & Recovery',
      icon: <MoonIcon size={18} />,
      source: 'WEARABLE + APP',
      sourceType: 'hybrid',
      headline: 'Rest Architecture & Autonomic Restoration',
      purpose: 'Combines overnight biometric signals with recent training load and subjective soreness to recommend whether to push, maintain, or prioritize restorative sleep. Recovery scores are estimates, not clinical diagnoses.',
      metrics: [
        { name: 'Total Sleep Duration', desc: 'Time asleep minus wake interruptions', sample: '7h 48m' },
        { name: 'Sleep & Wake Timing', desc: 'Circadian bedtime consistency and awakening window', sample: '10:45 PM to 6:33 AM' },
        { name: 'Sleep Consistency', desc: 'Regularity of sleep/wake schedule over rolling 14 days', sample: '92% consistent' },
        { name: 'Sleep Efficiency', desc: 'Percentage of time in bed actually asleep', sample: '94%' },
        { name: 'Sleep Latency', desc: 'Time taken to fall asleep after getting into bed', sample: '12 min' },
        { name: 'Sleep Interruptions', desc: 'Nocturnal wake events and restlessness frequency', sample: '2 minor micro wakes' },
        { name: 'REM, Deep & Light Sleep', desc: 'Estimated neurochemical and physical restoration architecture', sample: '1h 44m Deep / 2h 12m REM' },
        { name: 'Daily Recovery Score', desc: 'Composite readiness estimate based on overnight vitals', sample: '88% [Optimal]' },
        { name: 'Reported Muscle Soreness', desc: 'Subjective fatigue logged by the athlete in the Yuguyu app', sample: 'Low (Hamstrings 2/5)' },
      ],
      aiInterpretation: 'Deep slow wave sleep reached 22% of total sleep duration, ensuring growth hormone release and muscular tissue repair. Recovery score of 88% supports high training strain today.'
    },
    {
      id: 'activity',
      name: 'Activity & Movement',
      icon: <Activity size={18} />,
      source: 'WEARABLE BAND',
      sourceType: 'wearable',
      headline: 'Non Exercise Physical Activity & Energy Flux',
      purpose: 'Understand whether you are moving sufficiently outside the gym to maintain metabolic health, insulin sensitivity, and non exercise energy expenditure (NEAT).',
      metrics: [
        { name: 'Daily Step Count', desc: 'Cumulative daily ambulation volume', sample: '11,420 steps' },
        { name: 'Distance Travelled', desc: 'Total mileage covered throughout day and training', sample: '8.4 km' },
        { name: 'Active Minutes', desc: 'Time spent in moderate to vigorous physical activity', sample: '68 min' },
        { name: 'Sedentary Time', desc: 'Consecutive hours of physical inactivity and sitting', sample: '4.2 hrs total' },
        { name: 'Active Energy Expenditure', desc: 'Calories burned through physical exertion above basal rate', sample: '840 kcal' },
        { name: 'Resting Energy (BMR)', desc: 'Basal metabolic energy required for biological maintenance', sample: '1,820 kcal' },
        { name: 'Auto Activity Detection', desc: 'Autonomous recognition of walking, running, and cycling', sample: 'Run detected (34m)' },
        { name: 'GPS Pace & Route (Connected)', desc: 'Outdoor route mapping and split times via connected phone/GPS', sample: '4:52 /km avg pace' },
      ],
      aiInterpretation: 'High NEAT activity today (+240 kcal above baseline) offsets sedentary work hours. Total daily caloric expenditure is tracking at 2,660 kcal.'
    },
    {
      id: 'workout',
      name: 'Workout Performance',
      icon: <Target size={18} />,
      source: 'YUGUYU APP',
      sourceType: 'app',
      headline: 'Strength Progression & Muscular Load',
      purpose: 'Where the AI coach becomes exceptionally useful: recognizing when you are progressing, stagnating on a plateau, accumulating overtraining fatigue, and dynamically adjusting reps and load.',
      metrics: [
        { name: 'Exercises, Sets, Reps & Weights', desc: 'Detailed log of resistance training and compound movements', sample: 'Squat 4x6 @ 275 lbs' },
        { name: 'Total Training Volume', desc: 'Cumulative tonnage moved during workout session', sample: '16,400 lbs' },
        { name: 'Personal Records (PRs)', desc: 'Automatic tracking of 1RM, rep maximums, and volume peaks', sample: 'New 5RM Bench Press' },
        { name: 'Workout Duration', desc: 'Total working time including rest intervals', sample: '54 min' },
        { name: 'Estimated Strength Progression', desc: 'Trajectory curves across primary movement patterns', sample: '+6.2% over 6 weeks' },
        { name: 'Exercise Intensity & RPE', desc: 'Rate of Perceived Exertion and proximity to failure', sample: 'RPE 8.5' },
        { name: 'Weekly Workload Distribution', desc: 'Volume distribution across push, pull, and leg muscle groups', sample: '16 sets Quadriceps / wk' },
      ],
      aiInterpretation: 'You have logged progressive overload across compound lifts for 3 consecutive weeks. Volume accumulation on anterior delts has reached its upper limit; introducing an accessory deload on secondary pressing next session.'
    },
    {
      id: 'respiratory',
      name: 'Respiratory & Advanced',
      icon: <Wind size={18} />,
      source: 'WEARABLE BAND',
      sourceType: 'wearable',
      headline: 'Physiological Markers & Baseline Deviations',
      purpose: 'Adds critical autonomic context to recovery and systemic wellness. Overnight skin temperature shifts and respiratory rate can reveal impending illness or overtraining days in advance. Estimates, not medical testing.',
      metrics: [
        { name: 'Respiratory Rate', desc: 'Breaths per minute, specifically tracked during nocturnal sleep', sample: '14.1 br/min' },
        { name: 'Blood Oxygen (SpO₂)', desc: 'Estimated peripheral capillary oxygen saturation via optical sensor', sample: '98% SpO₂' },
        { name: 'Overnight Skin Temperature', desc: 'Deviations from personal 30 day baseline during rest', sample: '0.2°C below baseline [Normal]' },
        { name: 'ECG Electrocardiogram (Roadmap)', desc: 'Electrical cardiac waveform detection from hardware electrodes', sample: 'Sinus Rhythm [Future]' },
      ],
      aiInterpretation: 'Respiratory rate is rock solid at 14.1 breaths/min with normal skin temperature (0.2°C variance). Zero markers of systemic inflammatory stress or respiratory fatigue.'
    },
    {
      id: 'nutrition',
      name: 'Nutrition & Body Comp',
      icon: <Utensils size={18} />,
      source: 'YUGUYU APP',
      sourceType: 'app',
      headline: 'Metabolic Intake, Timing & Body Composition',
      purpose: 'Sourced from the Yuguyu app, smart logging, and compatible external scales. The AI coach connects food intake with expenditure to modulate calorie and protein targets.',
      metrics: [
        { name: 'Daily Calories Consumed', desc: 'Accurate intake tracking with AI photo/voice assistance', sample: '2,580 kcal' },
        { name: 'Protein, Carbs & Fat', desc: 'Macronutrient breakdown aligned with hypertrophy and endurance', sample: '175g P / 280g C / 70g F' },
        { name: 'Fibre, Water & Micronutrients', desc: 'Digestive fiber, hydration volume, and micronutrient density', sample: '38g Fiber / 3.4L Water' },
        { name: 'Meal Timing & Consistency', desc: 'Distribution of nutrient intake relative to circadian and workout windows', sample: 'Post workout hit within 60m' },
        { name: 'Energy Surplus or Deficit', desc: 'Net balance comparing expenditure against intake', sample: '80 kcal [Mild Deficit]' },
        { name: 'Body Weight Rolling Trend', desc: '7 day moving average eliminating acute water fluctuations', sample: '178.4 lbs (down 0.6 lbs/wk)' },
        { name: 'Body Fat % & Lean Mass', desc: 'Longitudinal composition trajectory via compatible smart scale', sample: '14.2% estimated' },
      ],
      aiInterpretation: 'Protein intake hit 2.1g/kg target with optimal post workout distribution. Calorie balance is in a controlled 80 kcal deficit, maintaining lean mass retention.'
    },
    {
      id: 'stress',
      name: 'Stress & Subjective Wellness',
      icon: <Smile size={18} />,
      source: 'APP + WEARABLE',
      sourceType: 'hybrid',
      headline: 'Subjective State & Inferred Physiological Stress',
      purpose: 'Important distinction: physiological stress is inferred from autonomic signals (HRV/HR); it is not a direct mind reading of emotion. Blends subjective perception with biometric signals.',
      metrics: [
        { name: 'Physiological Stress Indicators', desc: 'Autonomic sympathetic arousal calculated from heart rate and HRV', sample: 'Low Stress Zone' },
        { name: 'Self Reported Mood & Energy', desc: 'Quick 1 to 5 daily check in logged in the Yuguyu app', sample: 'Energy: 4/5, Mood: High' },
        { name: 'Perceived Cognitive Stress', desc: 'Subjective mental load that may impair workout recovery', sample: 'Moderate (Work deadline)' },
        { name: 'Muscle Soreness & Joint Fatigue', desc: 'Targeted physical check in for specific body regions', sample: 'Traps: Sore, Knee: Fine' },
        { name: 'Habit & Routine Adherence', desc: 'Consistency tracking for morning sunlight, hydration, and mobility', sample: '5/5 Habits completed' },
        { name: 'Caffeine & Alcohol Logging', desc: 'Intake logging with automatic correlation to sleep latency and HRV', sample: '1 Espresso @ 9 AM' },
        { name: 'Illness Symptoms Log', desc: 'Self reported congestion, headache, or fever symptoms', sample: 'None reported' },
      ],
      aiInterpretation: 'Zero alcohol logged and caffeine cut off by 10 AM, directly explaining your improved sleep latency (12 min). High self reported energy matches biometric recovery readiness.'
    }
  ];

  const current = categories[activeCategory];

  return (
    <section id="telemetry-matrix" className="section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
      <div className="section-divider" />

      <div className="container" style={{ paddingTop: isMobile ? '3rem' : '5rem' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto', marginBottom: isMobile ? '2.5rem' : '3.5rem' }}>
          <Reveal>
            <span className="label-tag" style={{
              background: 'rgba(225, 29, 72, 0.08)', color: 'var(--accent-red)',
              border: '1px solid rgba(225, 29, 72, 0.2)', marginBottom: '1.25rem', display: 'inline-flex'
            }}>
              02 // COMPREHENSIVE TELEMETRY
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              The 7 dimensions of health.<br />
              <span className="text-gradient">Measured continuously.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: isMobile ? '1rem' : '1.15rem' }}>
              Yuguyu moves far beyond steps and calories. Explore the complete biometric and lifestyle matrix that feeds your personal coach.
            </p>
          </Reveal>
        </div>

        {/* Category Horizontal Filter Tabs */}
        <div style={{
          display: 'flex',
          gap: '0.65rem',
          overflowX: 'auto',
          paddingBottom: '1rem',
          marginBottom: '2.5rem',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch'
        }}>
          {categories.map((cat, idx) => {
            const isSel = activeCategory === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className="matrix-category-tab"
                style={{
                  background: isSel ? 'var(--text-primary)' : 'var(--bg-tertiary)',
                  color: isSel ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  border: `1px solid ${isSel ? 'var(--text-primary)' : 'var(--border-light)'}`,
                  boxShadow: isSel ? '0 4px 20px rgba(0,0,0,0.4)' : 'none'
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                <span className="mono-tag" style={{
                  color: isSel ? 'var(--accent-red)' : 'var(--text-tertiary)',
                  fontSize: '0.65rem',
                  fontWeight: 700
                }}>
                  0{idx + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="shimmer-card"
            style={{
              padding: isMobile ? '1.5rem' : '2.5rem',
              background: 'var(--bg-primary)',
              borderRadius: '24px'
            }}
          >
            {/* Header info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                  <span className={`source-badge-${current.sourceType}`}>
                    SOURCE: {current.source}
                  </span>
                  <span className="mono-tag" style={{ fontSize: '0.68rem' }}>
                    CATEGORY 0{activeCategory + 1}
                  </span>
                </div>
                <h3 style={{ fontSize: isMobile ? '1.4rem' : '1.85rem' }}>
                  {current.headline}
                </h3>
              </div>

              <div style={{ maxWidth: isMobile ? '100%' : '440px', textAlign: isMobile ? 'left' : 'right' }}>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                  {current.purpose}
                </p>
              </div>
            </div>

            {/* Metrics Table / Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {current.metrics.map((m) => (
                <div
                  key={m.name}
                  style={{
                    background: 'var(--bg-secondary)',
                    padding: '1.1rem 1.25rem',
                    borderRadius: '14px',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                      {m.name}
                    </div>
                    <span className="mono-val" style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--accent-red)',
                      background: 'rgba(225, 29, 72, 0.08)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      whiteSpace: 'nowrap'
                    }}>
                      {m.sample}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* AI Coach Interpretation Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.06) 0%, rgba(10, 10, 15, 0.8) 100%)',
              border: '1px solid rgba(225, 29, 72, 0.25)',
              borderRadius: '16px',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start'
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: 'var(--accent-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                <Brain size={17} color="#fff" />
              </div>
              <div>
                <span className="mono-tag" style={{ color: 'var(--accent-red)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  YUGUYU AI COACH SYNTHESIS DIRECTIVE
                </span>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  {current.aiInterpretation}
                </p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};


// =====================================================================
// 6. THE 5 CALCULATED INDICES (What Yuguyu Calculates From Everything)
// =====================================================================
const CalculatedIndicesSection = ({ isMobile }) => {
  const indices = [
    {
      num: '01',
      title: 'Daily Recovery Score',
      score: '88%',
      status: 'Optimal Readiness',
      color: '#22c55e',
      desc: 'Synthesizes overnight HRV trend, nocturnal resting heart rate, sleep efficiency, cumulative training load, and self reported soreness.',
      impact: 'Determines whether your cardiovascular and central nervous systems are primed for maximal strain or require active restoration.'
    },
    {
      num: '02',
      title: 'Sleep Quality & Consistency',
      score: '92 / 100',
      status: 'High Circadian Alignment',
      color: 'var(--accent-purple)',
      desc: 'Blends deep and REM stage proportions, sleep latency, nocturnal wake events, and rolling bedtime consistency over 14 days.',
      impact: 'Identifies chronic circadian drift and recommends realistic, actionable wind down timing adjustments.'
    },
    {
      num: '03',
      title: 'Training Readiness',
      score: 'Zone 4 Primed',
      status: 'High Load Capacity',
      color: 'var(--accent-red)',
      desc: 'Integrates neuromuscular fatigue, soft tissue recovery, recent resistance volume, and baseline cardiovascular reserve.',
      impact: 'Dynamically selects daily workout intensity, set volume, and auto regulates weights based on acute physiological state.'
    },
    {
      num: '04',
      title: 'Energy Balance & Flux',
      score: '120 kcal deficit',
      status: 'Controlled Deficit',
      color: 'var(--accent-orange)',
      desc: 'Compares real time energy expenditure (active burn + basal rate) against logged food intake, protein density, and meal timing.',
      impact: 'Auto adjusts caloric surplus or deficit targets to support body composition goals while sustaining recovery.'
    },
    {
      num: '05',
      title: 'Fitness Trajectory',
      score: '+7.4%',
      status: 'Progressing Peak',
      color: '#06b6d4',
      desc: 'Tracks multi week progression in strength volume, estimated VO₂ max trends, training consistency, and habit adherence.',
      impact: 'Forecasts progression plateaus weeks before they happen, allowing proactive deloads and programming pivots.'
    }
  ];

  return (
    <section id="calculated-indices" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-divider" />

      <div className="container" style={{ paddingTop: isMobile ? '3rem' : '5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto', marginBottom: isMobile ? '3rem' : '4.5rem' }}>
          <Reveal>
            <span className="label-tag" style={{
              background: 'rgba(225, 29, 72, 0.08)', color: 'var(--accent-red)',
              border: '1px solid rgba(225, 29, 72, 0.2)', marginBottom: '1.25rem', display: 'inline-flex'
            }}>
              03 // THE CORE DIFFERENTIATOR
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              The 5 metrics Yuguyu calculates<br />
              <span className="text-gradient">from everything.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: isMobile ? '1rem' : '1.15rem' }}>
              The real breakthrough is not collecting more numbers. It is how our intelligence engine combines disconnected signals into five actionable composite indices that guide your day.
            </p>
          </Reveal>
        </div>

        {/* 5 Calculated Indices Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '1.5rem',
          maxWidth: '1150px',
          margin: '0 auto'
        }}>
          {indices.map((item, idx) => (
            <Reveal key={item.title} delay={0.1 + idx * 0.08} style={{ gridColumn: idx === 3 && !isMobile ? 'span 1' : idx === 4 && !isMobile ? 'span 2' : 'auto' }}>
              <div
                className="shimmer-card"
                style={{
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span className="mono-tag" style={{ color: item.color, fontWeight: 700, fontSize: '0.85rem' }}>
                      INDEX {item.num}
                    </span>
                    <span className="mono-val" style={{ fontSize: '1.15rem', fontWeight: 800, color: item.color }}>
                      {item.score}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.35rem' }}>{item.title}</h3>
                  <div className="mono-tag" style={{ color: 'var(--text-tertiary)', marginBottom: '1rem', fontSize: '0.7rem' }}>
                    {item.status.toUpperCase()}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'flex-start'
                }}>
                  <span style={{ color: item.color, fontWeight: 700, fontSize: '0.9rem' }}>→</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
                    {item.impact}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};


// =====================================================================
// 7. DUAL-SOURCE ARCHITECTURE & HARDWARE ROADMAP
// =====================================================================
const DualEcosystemSection = ({ isMobile, onCtaClick }) => {
  const hardwareRoadmap = [
    { priority: 'Essential', tier: 'P0', metric: 'Optical Heart Rate', use: 'Continuous heart rate trends, resting pulse & exercise response', badgeClass: 'badge-essential' },
    { priority: 'Essential', tier: 'P0', metric: 'HRV (Overnight RMSSD)', use: 'Autonomic nervous system recovery against personal baseline', badgeClass: 'badge-essential' },
    { priority: 'Essential', tier: 'P0', metric: '3 Axis Accelerometer', use: 'Movement, step cadence, activity classification & sleep estimation', badgeClass: 'badge-essential' },
    { priority: 'Essential', tier: 'P0', metric: 'Resting Heart Rate (RHR)', use: 'Baseline cardiovascular recovery and systemic strain trends', badgeClass: 'badge-essential' },
    { priority: 'High', tier: 'P1', metric: 'Skin Temperature Sensor', use: 'Overnight temperature deviations from baseline (illness/strain)', badgeClass: 'badge-high' },
    { priority: 'High', tier: 'P1', metric: 'Respiratory Rate', use: 'Breaths per minute during sleep and rest architecture', badgeClass: 'badge-high' },
    { priority: 'High', tier: 'P1', metric: 'SpO₂ Blood Oxygen', use: 'Estimated capillary oxygen saturation via dual wavelength optics', badgeClass: 'badge-high' },
    { priority: 'Later / Optional', tier: 'P2', metric: 'Electrocardiogram (ECG)', use: 'Electrical cardiac waveform detection from hardware electrodes', badgeClass: 'badge-optional' },
    { priority: 'Later / Optional', tier: 'P2', metric: 'GPS Mapping', use: 'Outdoor route pace, splits & distance (via phone or standalone)', badgeClass: 'badge-optional' },
  ];

  return (
    <section id="dual-ecosystem" className="section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
      <div className="section-divider" />

      <div className="container" style={{ paddingTop: isMobile ? '3rem' : '5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto', marginBottom: isMobile ? '3rem' : '4.5rem' }}>
          <Reveal>
            <span className="label-tag" style={{
              background: 'var(--bg-tertiary)', color: 'var(--text-secondary)',
              border: '1px solid var(--border-light)', marginBottom: '1.25rem', display: 'inline-flex'
            }}>
              04 // ECOSYSTEM ARCHITECTURE
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              Two complementary sources.<br />
              <span className="text-gradient">One continuous personal model.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: isMobile ? '1rem' : '1.15rem' }}>
              From day one, Yuguyu unites active software logging with continuous hardware biometrics into an adaptive personal digital twin.
            </p>
          </Reveal>
        </div>

        {/* Dual Source Convergence Visualization */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 0.8fr 1fr',
          gap: isMobile ? '1.5rem' : '2rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }}>
          {/* Source 1: The Yuguyu App */}
          <Reveal delay={0.1}>
            <div className="flow-node-cinematic">
              <div className="flow-img-wrap">
                <img
                  src="/images/nutrition_fuel_prep.jpg"
                  alt="Athlete preparing nutritional fuel with Yuguyu band"
                />
                <div className="flow-gradient-overlay" />
                <span className="mono-tag" style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '0.64rem', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', padding: '3px 9px', borderRadius: '6px', color: 'var(--text-primary)', border: '1px solid var(--border-light)', zIndex: 5 }}>
                  INTENTIONAL LIFESTYLE CONTEXT
                </span>
              </div>
              <div className="flow-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="source-badge-app">DATA SOURCE 01</span>
                  <span className="mono-tag">INPUT & CONTEXT</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>The Yuguyu App</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Captures the human, intentional inputs that hardware cannot see on its own.
                </p>
                <ul style={{ margin: '0.25rem 0 0 0', paddingLeft: '1.2rem', color: 'var(--text-tertiary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li>Workouts, sets, reps & weights</li>
                  <li>AI photo & voice nutrition logging</li>
                  <li>Body weight & body composition trends</li>
                  <li>Subjective muscle soreness & fatigue</li>
                  <li>Habit adherence & lifestyle check ins</li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Center Convergence: The Personal AI Model */}
          <Reveal delay={0.2}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)',
              border: '1px solid rgba(225, 29, 72, 0.4)',
              borderRadius: '24px',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              boxShadow: '0 0 40px rgba(225, 29, 72, 0.15)'
            }}>
              <div style={{
                width: '54px', height: '54px', borderRadius: '50%',
                background: 'var(--accent-red)', margin: '0 auto 1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Brain size={26} color="#fff" />
              </div>
              <span className="mono-tag" style={{ color: 'var(--accent-red)', fontWeight: 800, display: 'block', marginBottom: '4px' }}>
                THE CONVERGENCE
              </span>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Personal Coach</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Constantly updates your personal baseline, explains the exact "why" behind every guidance, and adapts your plan in real time.
              </p>
            </div>
          </Reveal>

          {/* Source 2: The Wearable Band */}
          <Reveal delay={0.3}>
            <div className="flow-node-cinematic">
              <div className="flow-img-wrap">
                <img
                  src="/images/athlete_gym_strength.jpg"
                  alt="Athlete training with barbell and screenless wrist band"
                />
                <div className="flow-gradient-overlay" />
                <span className="mono-tag" style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '0.64rem', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', padding: '3px 9px', borderRadius: '6px', color: 'var(--accent-red)', border: '1px solid rgba(225, 29, 72, 0.4)', zIndex: 5 }}>
                  CONTINUOUS BIOMETRIC CAPTURE
                </span>
              </div>
              <div className="flow-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="source-badge-wearable">DATA SOURCE 02</span>
                  <span className="mono-tag">CONTINUOUS BIOMETRICS</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Yuguyu Band & Devices</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Continuous 24/7 physiological telemetry without digital noise or screen distraction.
                </p>
                <ul style={{ margin: '0.25rem 0 0 0', paddingLeft: '1.2rem', color: 'var(--text-tertiary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li>Optical Heart Rate & Nocturnal RHR</li>
                  <li>Overnight HRV RMSSD recovery curves</li>
                  <li>Sleep architecture (Deep, REM, Light)</li>
                  <li>Movement cadence & 24/7 activity</li>
                  <li>Skin temperature & respiratory trends</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section 9: Hardware Prioritization Roadmap */}
        <div id="hardware-roadmap" style={{ scrollMarginTop: '100px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <span className="mono-tag" style={{ color: 'var(--accent-red)', marginBottom: '0.5rem', display: 'inline-block' }}>
              HARDWARE ROADMAP // SENSOR PRIORITIZATION
            </span>
            <h3 style={{ fontSize: isMobile ? '1.5rem' : '2.1rem', marginBottom: '0.75rem' }}>
              What the Yuguyu Band Measures First
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              A disciplined, engineering first prioritization. Sampling quality, skin contact ergonomics, and algorithmic validation are prioritized over raw sensor counts.
            </p>
          </div>

          {/* Roadmap High Tech Table */}
          <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
            <table className="telemetry-table" style={{ minWidth: isMobile ? '640px' : '100%' }}>
              <thead>
                <tr>
                  <th style={{ width: '15%' }}>PRIORITY</th>
                  <th style={{ width: '10%' }}>TIER</th>
                  <th style={{ width: '28%' }}>SIGNAL / SENSOR</th>
                  <th style={{ width: '47%' }}>PRIMARY PHYSIOLOGICAL APPLICATION</th>
                </tr>
              </thead>
              <tbody>
                {hardwareRoadmap.map((row, i) => (
                  <tr key={i}>
                    <td>
                      <span className={row.badgeClass}>{row.priority}</span>
                    </td>
                    <td>
                      <span className="mono-val" style={{ fontWeight: 700, color: 'var(--text-tertiary)' }}>{row.tier}</span>
                    </td>
                    <td>
                      <span style={{ fontWeight: 700, fontFamily: 'var(--font-heading)' }}>{row.metric}</span>
                    </td>
                    <td style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                      {row.use}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Responsible Health Disclaimer */}
          <div style={{
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-light)',
            borderRadius: '16px',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            maxWidth: '920px',
            margin: '0 auto'
          }}>
            <AlertCircle size={20} color="var(--accent-red)" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.84rem', color: 'var(--text-tertiary)', margin: 0, lineHeight: 1.6 }}>
              <strong>Scientific & Regulatory Transparency:</strong> Yuguyu biometric readings are baseline relative physiological estimates designed for athletic optimization and wellness habits. They are not intended as clinical diagnostic instruments or substitutes for medical pathology testing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};


// =====================================================================
// 8. THE AI COACH IN ACTION (Interactive Scenario Simulator)
// =====================================================================
const CoachInAction = ({ isMobile }) => {
  const [selectedScenario, setSelectedScenario] = useState(0);

  const scenarios = [
    {
      label: "Sleep Deficit vs Heavy Lift",
      athleteImage: "/images/athlete_gym_strength.jpg",
      athleteName: "Marcus Vance",
      athleteRole: "Competitive Powerlifter",
      athleteState: "5.2h Sleep • HRV 18% Lower",
      query: "I slept only 5.2 hours and my resting HRV is down 18%. Today's program has heavy barbell squats. Should I still lift?",
      analysis: [
        "Cardiovascular recovery is depressed: nocturnal HRV RMSSD dropped from 78ms to 64ms.",
        "Central nervous system readiness is suboptimal for high axial load spinal compression.",
        "Muscular glycogen replenishment is intact, but motor unit recruitment velocity is impaired."
      ],
      directive: "Pivot today to hypertrophy volume: reduce squat load from 85% to 65% 1RM, increase reps from 5 to 10, and prioritize 20 minutes of restorative zone 1 mobility. Heavy deadlifts/squats rescheduled for Thursday when sleep recovery rebounds."
    },
    {
      label: "Plateau on Bench Press",
      athleteImage: "/images/nutrition_fuel_prep.jpg",
      athleteName: "Elena Rostova",
      athleteRole: "Strength & Conditioning Athlete",
      athleteState: "Hypertrophy Block • 225 lbs Stalled",
      query: "My bench press has been stuck at 225 lbs for 3 weeks and I feel constantly worn down in the afternoons.",
      analysis: [
        "Training log shows pushing volume increased 35% in 21 days without a deload week.",
        "Protein intake averaged 1.35g/kg across the last 10 days, below the 1.8g/kg hypertrophy target.",
        "Afternoon fatigue correlates with consecutive sub 6 hour sleep nights."
      ],
      directive: "Implement an immediate 5 day active deload. Drop chest volume by 50%, increase daily dietary protein intake to 160g (+30g), and target 7.5 hours minimum sleep. Retest 225 lbs next Tuesday."
    },
    {
      label: "Spike in Resting Heart Rate",
      athleteImage: "/images/sleep_recovery_rest.jpg",
      athleteName: "David Chen",
      athleteRole: "Biohacker & Executive",
      athleteState: "Resting HR +7 BPM • Recovery 42%",
      query: "Why did my resting heart rate spike 7 bpm last night and my recovery drop to 42%?",
      analysis: [
        "Meal intake logged at 10:15 PM with high sodium and carbohydrate density.",
        "Elevated core body temperature (+0.6°C) sustained through the first 3 hours of sleep.",
        "Late digestive metabolic thermogenesis suppressed nocturnal parasympathetic reactivation."
      ],
      directive: "Shift your final meal window to at least 2.5 hours prior to sleep tonight. Hydrate with 500ml water containing magnesium before bed. Keep physical exertion today to low strain Zone 2 endurance (under 125 BPM)."
    },
    {
      label: "Pre Marathon 4 Week Taper",
      athleteImage: "/images/athlete_training_run.jpg",
      athleteName: "Sarah Thorne",
      athleteRole: "Endurance Runner",
      athleteState: "4 Week Taper • 140km Strain",
      query: "I have a marathon in 28 days. How should my coaching taper adapt given my high cumulative strain?",
      analysis: [
        "Cumulative 4 week strain is 18.2/day with 140 total kilometers logged.",
        "Aerobic base VO2 capacity is maximized; soft tissue collagen requires regeneration.",
        "Resting heart rate has stabilized at 46 bpm with excellent vascular remodeling."
      ],
      directive: "Begin a 3 week progressive volume reduction: drop weekly mileage by 20% this week while maintaining target marathon race pace intensity intervals. Prioritize sleep extension to 8+ hours."
    }
  ];

  const active = scenarios[selectedScenario];

  return (
    <section id="intelligence" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-divider" />

      <div className="container" style={{ paddingTop: isMobile ? '3rem' : '5rem' }}>

        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
          <Reveal>
            <span className="label-tag" style={{
              background: 'rgba(225, 29, 72, 0.08)', color: 'var(--accent-red)',
              border: '1px solid rgba(225, 29, 72, 0.18)', marginBottom: '1.25rem', display: 'inline-flex'
            }}>
              05 // REASONING IN ACTION
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              The coach that reasons.<br />
              <span className="text-gradient">Not a chatbot that recites.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: isMobile ? '1rem' : '1.15rem' }}>
              Select a real world athlete scenario to see how Yuguyu analyzes biometric signals, identifies root causes, and delivers concrete protocols.
            </p>
          </Reveal>
        </div>

        {/* Scenario Pill Selectors */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {scenarios.map((sc, i) => {
            const isSel = selectedScenario === i;
            return (
              <button
                key={sc.label}
                onClick={() => setSelectedScenario(i)}
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: '12px',
                  background: isSel ? 'var(--accent-red)' : 'var(--bg-secondary)',
                  color: isSel ? '#fff' : 'var(--text-secondary)',
                  border: `1px solid ${isSel ? 'var(--accent-crimson)' : 'var(--border-light)'}`,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-heading)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSel ? '0 0 20px var(--accent-glow-red)' : 'none'
                }}
              >
                {sc.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Dialogue Terminal */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            className="shimmer-card"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              borderRadius: isMobile ? '18px' : '24px',
              overflow: 'hidden'
            }}
          >
            {/* Terminal Header */}
            <div style={{
              padding: '1rem 1.5rem',
              background: 'var(--bg-tertiary)',
              borderBottom: '1px solid var(--border-light)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-red)' }} />
                <span className="mono-tag" style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                  YUGUYU ADAPTIVE DIALOGUE ENGINE
                </span>
              </div>
              <span className="mono-tag" style={{ color: 'var(--text-tertiary)' }}>
                TELEMETRY ENRICHED
              </span>
            </div>

            {/* Content Area */}
            <div style={{ padding: isMobile ? '1.5rem' : '2.25rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

              {/* User Inquiry with Athlete Identity */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`user-${selectedScenario}`}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    alignSelf: 'flex-end',
                    maxWidth: isMobile ? '100%' : '88%',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '16px 16px 4px 16px',
                    padding: '1.2rem 1.4rem'
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                    <img
                      src={active.athleteImage}
                      alt={active.athleteName}
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        objectFit: 'cover',
                        border: '1.5px solid var(--accent-red)',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
                        <div>
                          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                            {active.athleteName}
                          </span>
                          <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', marginLeft: '8px' }}>
                            {active.athleteRole}
                          </span>
                        </div>
                        <span className="mono-tag" style={{ color: 'var(--accent-red)', fontSize: '0.64rem', background: 'rgba(225, 29, 72, 0.08)', padding: '2px 8px', borderRadius: '4px' }}>
                          {active.athleteState}
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: isMobile ? '0.92rem' : '0.98rem', lineHeight: 1.6 }}>
                        "{active.query}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Coach Telemetry Evaluation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`coach-${selectedScenario}`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.45 }}
                  style={{
                    alignSelf: 'flex-start',
                    maxWidth: '92%',
                    background: 'rgba(10, 10, 15, 0.9)',
                    border: '1px solid rgba(225, 29, 72, 0.25)',
                    borderRadius: '16px 16px 16px 4px',
                    padding: isMobile ? '1.25rem' : '1.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '8px',
                      background: 'var(--accent-red)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Brain size={16} color="#fff" />
                    </div>
                    <div>
                      <div className="mono-tag" style={{ color: 'var(--accent-red)', fontWeight: 700, fontSize: '0.7rem' }}>
                        YUGUYU PHYSIOLOGICAL SYNTHESIS
                      </div>
                    </div>
                  </div>

                  {/* Bulleted Diagnostic Points */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div className="mono-tag" style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                      OBSERVED BIOMETRIC ANOMALIES:
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {active.analysis.map((pt, idx) => (
                        <li key={idx} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actionable Directive */}
                  <div style={{
                    padding: '1.1rem 1.25rem',
                    borderRadius: '12px',
                    background: 'rgba(225, 29, 72, 0.08)',
                    border: '1px solid rgba(225, 29, 72, 0.2)'
                  }}>
                    <div className="mono-tag" style={{ color: 'var(--accent-red)', marginBottom: '4px', fontWeight: 700 }}>
                      → CONTEXTUAL ACTION PROTOCOL
                    </div>
                    <p style={{ margin: 0, fontSize: isMobile ? '0.9rem' : '0.98rem', color: 'var(--text-primary)', lineHeight: 1.6, fontWeight: 500 }}>
                      {active.directive}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


// =====================================================================
// 9. CLOSING SECTION & EARLY ACCESS CALL TO ACTION
// =====================================================================
const ClosingSection = ({ isMobile, onCtaClick }) => {
  return (
    <section className="section" style={{
      position: 'relative', overflow: 'hidden',
      padding: isMobile ? '6rem 0' : '10rem 0',
      background: 'var(--bg-primary)'
    }}>
      <div className="section-divider" />

      {/* Background ambient light */}
      <div style={{
        position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)',
        width: '100%', height: '70%',
        background: 'radial-gradient(ellipse at bottom, rgba(225, 29, 72, 0.1) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <Reveal>
          <span className="label-tag" style={{
            background: 'rgba(225, 29, 72, 0.08)', color: 'var(--accent-red)',
            border: '1px solid rgba(225, 29, 72, 0.18)', marginBottom: '1.5rem', display: 'inline-flex'
          }}>
            BECOME AN EARLY ATHLETE
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{
            fontSize: isMobile ? 'clamp(2.2rem, 8vw, 3.2rem)' : 'clamp(3rem, 5vw, 4.5rem)',
            marginBottom: '1.5rem', lineHeight: 1.08
          }}>
            Measure the signals.<br />
            Understand the patterns.<br />
            <span className="text-gradient-accent">Take the next best action.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{
            fontSize: isMobile ? '1.05rem' : '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '640px', margin: '0 auto 2.5rem auto',
            lineHeight: 1.7
          }}>
            Experience what happens when your workouts, recovery, sleep, and nutrition are finally synthesized by an intelligence built around your physiology.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onCtaClick}
            className="btn btn-accent"
            style={{ padding: '1.15rem 2.75rem', fontSize: '1.1rem' }}
          >
            Join the Journey <ArrowRight size={19} style={{ marginLeft: '10px' }} />
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
};


// =====================================================================
// 10. CONTACT / EARLY ACCESS MODAL
// =====================================================================
const ContactModal = ({ onClose, isMobile }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', focus: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mrppkyky", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(5, 5, 5, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
    >
      <div
        className="glass-card"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          borderRadius: '24px',
          padding: isMobile ? '2rem 1.5rem' : '2.5rem 2.25rem',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-primary)', cursor: 'pointer'
          }}
        >
          <X size={17} />
        </button>

        <div>
          <span className="mono-tag" style={{ color: 'var(--accent-red)', marginBottom: '6px', display: 'inline-block' }}>
            PRIVATE ACCESS
          </span>
          <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.3rem', marginBottom: '0.75rem', lineHeight: 1.1 }}>
            Join the <span className="text-gradient-accent">Early Access</span> cohort.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Get early access to our adaptive AI coach, sync your existing wearable data, and join the journey as we build the upcoming screenless Yuguyu Band.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              textAlign: 'center', padding: '2.5rem 1.5rem', borderRadius: '16px',
              background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)'
            }}
          >
            <div style={{
              width: '52px', height: '52px', borderRadius: '50%',
              background: 'rgba(34, 197, 94, 0.1)', border: '2px solid #22c55e',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.25rem'
            }}>
              <CheckCircle2 size={24} color="#22c55e" />
            </div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>Welcome to the Journey.</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Thank you for joining. We will reach out with early access details for the AI coach and progress updates on the Yuguyu Band.
            </p>
            <button onClick={onClose} className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
              Return to Website
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label htmlFor="modal-name" className="mono-tag" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                FULL NAME *
              </label>
              <input
                id="modal-name"
                name="name"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="Athlete name"
                style={{
                  width: '100%', padding: '0.85rem 1rem', borderRadius: '10px',
                  background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)', fontSize: '0.95rem'
                }}
              />
            </div>

            <div>
              <label htmlFor="modal-email" className="mono-tag" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                EMAIL ADDRESS *
              </label>
              <input
                id="modal-email"
                name="email"
                required
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="athlete@domain.com"
                style={{
                  width: '100%', padding: '0.85rem 1rem', borderRadius: '10px',
                  background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)', fontSize: '0.95rem'
                }}
              />
            </div>

            <div>
              <label htmlFor="modal-phone" className="mono-tag" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                PHONE NUMBER (OPTIONAL)
              </label>
              <input
                id="modal-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 555 019 2834"
                style={{
                  width: '100%', padding: '0.85rem 1rem', borderRadius: '10px',
                  background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)', fontSize: '0.95rem'
                }}
              />
            </div>

            <div>
              <label htmlFor="modal-focus" className="mono-tag" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                PRIMARY FOCUS
              </label>
              <input
                id="modal-focus"
                name="focus"
                type="text"
                value={formData.focus}
                onChange={e => setFormData({ ...formData, focus: e.target.value })}
                placeholder="e.g. Marathon training, recovery, sleep optimization"
                style={{
                  width: '100%', padding: '0.85rem 1rem', borderRadius: '10px',
                  background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)', fontSize: '0.95rem'
                }}
              />
            </div>

            <div>
              <label htmlFor="modal-message" className="mono-tag" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                CURRENT WEARABLES / GOALS (OPTIONAL)
              </label>
              <textarea
                id="modal-message"
                name="message"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="e.g. Currently tracking on Whoop/Garmin, goal is marathon sub 3 and optimized recovery..."
                rows={2}
                style={{
                  width: '100%', padding: '0.85rem 1rem', borderRadius: '10px',
                  background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)', fontSize: '0.95rem', resize: 'vertical'
                }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="btn btn-accent"
              style={{ padding: '0.95rem', fontSize: '1rem', width: '100%', opacity: isSubmitting ? 0.7 : 1, marginTop: '0.5rem' }}
            >
              {isSubmitting ? 'Joining...' : 'Get Early Access'} <ArrowRight size={17} style={{ marginLeft: '8px' }} />
            </motion.button>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', textAlign: 'center', margin: 0 }}>
              Zero spam. Your personal biometric telemetry sovereignty is protected.
            </p>
          </form>
        )}
      </div>
    </motion.div>
  );
};


// =====================================================================
// 11. FOOTER
// =====================================================================
const Footer = ({ isMobile, onNavigate }) => (
  <footer style={{
    padding: '4rem 0 2.5rem', background: 'var(--bg-secondary)',
    position: 'relative', borderTop: '1px solid var(--border-light)'
  }}>
    <div className="container">
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'center' : 'flex-start',
        gap: '2.5rem',
        marginBottom: '3rem'
      }}>
        {/* Brand */}
        <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
          <div style={{ fontSize: '1.6rem', fontWeight: '800', fontFamily: 'var(--font-logo)', letterSpacing: '-0.04em', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--text-primary)' }}>Yugu</span><span style={{ color: 'var(--accent-red)' }}>yu</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-tertiary)', maxWidth: '340px', margin: isMobile ? '0 auto' : '0', lineHeight: 1.6 }}>
            The intelligence layer between continuous biometric data and your everyday physical decisions.
          </p>
        </div>

        {/* Links Navigation */}
        <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <span className="mono-tag" style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>PLATFORM</span>
            <a href="#/" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Overview</a>
            <a href="#/band" onClick={(e) => { e.preventDefault(); onNavigate('band'); }} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Screenless Wrist Band</a>
            <a href="#/coach" onClick={(e) => { e.preventDefault(); onNavigate('coach'); }} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Adaptive Personal Coach</a>
            <a href="#/telemetry" onClick={(e) => { e.preventDefault(); onNavigate('telemetry'); }} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>7 Metric Domains</a>
            <a href="#/indices" onClick={(e) => { e.preventDefault(); onNavigate('indices'); }} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>5 Calculated Indices</a>
            <a href="#/ecosystem" onClick={(e) => { e.preventDefault(); onNavigate('ecosystem'); }} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Universal Sync & Roadmap</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <span className="mono-tag" style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>COMPANY</span>
            <a href="#/coach" onClick={(e) => { e.preventDefault(); onNavigate('coach'); }} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Reasoning Engine</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: Yuguyu adheres strictly to consumer biometric data sovereignty. Telemetry is encrypted at rest and in transit."); }} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Data Privacy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Terms: Yuguyu provides athletic wellness guidance and is not a clinical medical diagnostic device."); }} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div style={{
        borderTop: '1px solid var(--border-light)',
        paddingTop: '1.75rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '0.75rem',
        fontSize: '0.78rem',
        color: 'var(--text-tertiary)'
      }}>
        <span>© {new Date().getFullYear()} Yuguyu Technologies Inc. All rights reserved.</span>
        <span className="mono-tag" style={{ fontSize: '0.68rem' }}>
          MEASURE SIGNALS // UNDERSTAND PATTERNS // NEXT BEST ACTION
        </span>
      </div>
    </div>
  </footer>
);

// 12. ROOT APPLICATION
// =====================================================================

// =====================================================================
// DEDICATED PAGE COMPONENTS & ROUTER
// =====================================================================

const PageHeader = ({ tag, title, highlight, description, isMobile }) => (
  <div style={{
    paddingTop: isMobile ? '6.5rem' : '8.5rem',
    paddingBottom: isMobile ? '2.5rem' : '3.5rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{
      position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
      width: isMobile ? '320px' : '650px', height: isMobile ? '220px' : '350px',
      background: 'radial-gradient(circle, rgba(225, 29, 72, 0.12) 0%, transparent 70%)',
      filter: 'blur(70px)', pointerEvents: 'none'
    }} />

    <div className="container" style={{ position: 'relative', zIndex: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="label-tag" style={{
          background: 'rgba(225, 29, 72, 0.08)', color: 'var(--accent-red)',
          border: '1px solid rgba(225, 29, 72, 0.25)', marginBottom: '1.25rem', display: 'inline-flex'
        }}>
          {tag}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        style={{
          fontSize: isMobile ? 'clamp(2rem, 7vw, 2.6rem)' : 'clamp(2.8rem, 4.5vw, 3.8rem)',
          fontWeight: 800,
          marginBottom: '1.25rem',
          lineHeight: 1.1
        }}
      >
        {title} {highlight && <span className="text-gradient-accent">{highlight}</span>}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.16 }}
        style={{
          fontSize: isMobile ? '1rem' : '1.18rem',
          color: 'var(--text-secondary)',
          maxWidth: '680px',
          margin: '0 auto',
          lineHeight: 1.7
        }}
      >
        {description}
      </motion.p>
    </div>
  </div>
);

// Platform Modules Explorer Grid (Home page)
const PlatformOverviewSection = ({ isMobile, onNavigate }) => {
  const modules = [
    {
      id: 'band',
      tag: 'HARDWARE',
      title: 'The Screenless Wearable Wrist Band',
      desc: 'Engineered for unbroken 24/7 skin adherence with continuous 250 Hz optical telemetry, grade 5 titanium, and zero screens.',
      icon: <Watch size={24} color="var(--accent-red)" />,
      badge: '250 Hz Continuous',
      cta: 'Explore Screenless Band'
    },
    {
      id: 'coach',
      tag: 'INTELLIGENCE',
      title: 'Adaptive Personal Coach',
      desc: 'The reasoning engine that analyzes cardiovascular readiness, training strain, and sleep debt to dynamically adapt reps and load.',
      icon: <Brain size={24} color="var(--accent-red)" />,
      badge: 'Dynamic Adaptation',
      cta: 'See Coach In Action'
    },
    {
      id: 'telemetry',
      tag: 'BIOMETRICS',
      title: '7-Category Telemetry Matrix',
      desc: 'From HRV and overnight skin temperature to barbell velocity and sleep architecture, mapped against your personal baseline.',
      icon: <Layers size={24} color="var(--accent-red)" />,
      badge: '40+ Verified Signals',
      cta: 'Explore 7 Domains'
    },
    {
      id: 'indices',
      tag: 'ALGORITHMS',
      title: '5 Calculated Composite Indices',
      desc: 'Transform raw data into 5 actionable scores: CNS recovery, musculoskeletal strain, metabolic velocity, and restorative depth.',
      icon: <Activity size={24} color="var(--accent-red)" />,
      badge: 'Mathematical Models',
      cta: 'View Calculated Indices'
    },
    {
      id: 'ecosystem',
      tag: 'COMPATIBILITY',
      title: 'Dual-Source Ecosystem & Roadmap',
      desc: 'Sync Apple Health, Garmin, Whoop, and Oura immediately. Seamlessly transition to the Yuguyu Band in future cohort phases.',
      icon: <Radio size={24} color="var(--accent-red)" />,
      badge: 'Universal Sync',
      cta: 'View Ecosystem & Roadmap'
    }
  ];

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
      <div className="section-divider" />
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <Reveal>
            <span className="label-tag" style={{
              background: 'rgba(225, 29, 72, 0.08)', color: 'var(--accent-red)',
              border: '1px solid rgba(225, 29, 72, 0.2)', marginBottom: '1.25rem', display: 'inline-flex'
            }}>
              PLATFORM MODULES // EXPLORE YUGUYU
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              Explore the <span className="text-gradient">Yuguyu Platform.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: isMobile ? '1rem' : '1.15rem' }}>
              Select a dedicated module to explore the hardware engineering, AI reasoning engine, telemetry matrix, and universal sync.
            </p>
          </Reveal>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem'
        }}>
          {modules.map((m, idx) => (
            <Reveal key={m.id} delay={0.05 * idx}>
              <div
                className="glass-card"
                onClick={() => onNavigate(m.id)}
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  cursor: 'pointer',
                  border: '1px solid var(--border-light)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '46px', height: '46px', borderRadius: '12px',
                      background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      {m.icon}
                    </div>
                    <span className="mono-tag" style={{ color: 'var(--accent-red)' }}>{m.badge}</span>
                  </div>

                  <span className="mono-tag" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '6px' }}>
                    {m.tag}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                    {m.desc}
                  </p>
                </div>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem'
                }}>
                  <span>{m.cta}</span>
                  <ArrowRight size={16} color="var(--accent-red)" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Technical Specs Grid (Band Page)
const BandSpecsSection = ({ isMobile, onCtaClick }) => {
  const specs = [
    { category: 'Optical Sensing', spec: 'Multi-wavelength green, red & infrared photoplethysmography (PPG) at 250 Hz continuous' },
    { category: 'Motion & Mechanics', spec: '3-Axis precision 16-bit accelerometer capturing movement velocity and sleep dynamics' },
    { category: 'Thermal Monitoring', spec: 'Sub-millimeter continuous epidermal skin temperature sensor monitoring circadian shifts' },
    { category: 'Chassis & Materials', spec: 'Grade 5 micro-blasted titanium case with bio-inert medical-grade hypoallergenic backing' },
    { category: 'Battery & Pacing', spec: '7+ days of unbroken continuous sampling on a single magnetic inductive charge' },
    { category: 'Water Resistance', spec: '5 ATM rated (50 meters submersible) for open water, pool, sauna, and high humidity workouts' }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="section-divider" />
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <Reveal>
            <span className="mono-tag" style={{ color: 'var(--accent-red)', marginBottom: '8px', display: 'inline-block' }}>
              HARDWARE SPECIFICATIONS
            </span>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.4rem', marginTop: '0.5rem' }}>
              Built for <span className="text-gradient">Continuous Adherence.</span>
            </h2>
          </Reveal>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1.25rem',
          maxWidth: '960px',
          margin: '0 auto'
        }}>
          {specs.map((item, idx) => (
            <Reveal key={item.category} delay={idx * 0.05}>
              <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--border-light)' }}>
                <span className="mono-tag" style={{ color: 'var(--accent-red)', display: 'block', marginBottom: '6px' }}>
                  {item.category}
                </span>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  {item.spec}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Coach Architecture & Digital Twin (Coach Page)
const CoachArchitectureSection = ({ isMobile, onCtaClick }) => {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="section-divider" />
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <Reveal>
            <span className="mono-tag" style={{ color: 'var(--accent-red)', marginBottom: '8px', display: 'inline-block' }}>
              SYSTEM ARCHITECTURE
            </span>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.4rem', marginTop: '0.5rem' }}>
              Your Continuous <span className="text-gradient">Physiological Twin.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '1rem', lineHeight: 1.7 }}>
              Unlike generic fitness trackers that evaluate you against arbitrary population medians, Yuguyu builds an individual digital twin updated every millisecond.
            </p>
          </Reveal>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '1.5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <Reveal delay={0.05}>
            <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
              <Zap size={24} color="var(--accent-red)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Continuous Baseline</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Every metric is scored relative to your trailing 30-day personal baseline, recognizing biological individuality across age, gender, and training phase.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
              <Sliders size={24} color="var(--accent-red)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Dynamic Load Adjustment</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                If overnight HRV drops 25% due to accumulated strain, tomorrow's programmed heavy sets are dynamically shifted to regenerative tempo work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
              <Shield size={24} color="var(--accent-red)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Explainable Directives</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Never accept arbitrary numbers. Your coach provides the exact physiological reasoning behind every prescription, giving athletes complete clarity.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// 1. HOME PAGE (Overview)
const HomePage = ({ isMobile, onCtaClick, onNavigate }) => (
  <>
    <HeroSection
      isMobile={isMobile}
      onCtaClick={onCtaClick}
      onExploreBand={() => onNavigate('band')}
    />
    <TelemetryRibbon />
    <ProblemSection isMobile={isMobile} />
    <PlatformOverviewSection isMobile={isMobile} onNavigate={onNavigate} />
    <ClosingSection isMobile={isMobile} onCtaClick={onCtaClick} />
  </>
);

// 2. BAND PAGE
const BandPage = ({ isMobile, onCtaClick }) => (
  <div>
    <PageHeader
      tag="PROPRIETARY HARDWARE // 250 HZ CONTINUOUS"
      title="The Screenless"
      highlight="Wearable Wrist Band"
      description="Zero screens. Zero notifications. Just unbroken, medical-grade biometric telemetry feeding directly into your personal coach."
      isMobile={isMobile}
    />
    <ScreenlessWearableSection isMobile={isMobile} onCtaClick={onCtaClick} />
    <BandSpecsSection isMobile={isMobile} onCtaClick={onCtaClick} />
    <ClosingSection isMobile={isMobile} onCtaClick={onCtaClick} />
  </div>
);

// 3. COACH PAGE
const CoachPage = ({ isMobile, onCtaClick }) => (
  <div>
    <PageHeader
      tag="PHYSIOLOGICAL INTELLIGENCE // ADAPTIVE MODEL"
      title="Your Adaptive"
      highlight="Personal Coach"
      description="The intelligence layer that translates your sleep, strain, and recovery signals into tomorrow morning's training prescription."
      isMobile={isMobile}
    />
    <CoachInAction isMobile={isMobile} />
    <CoachArchitectureSection isMobile={isMobile} onCtaClick={onCtaClick} />
    <ClosingSection isMobile={isMobile} onCtaClick={onCtaClick} />
  </div>
);

// 4. TELEMETRY PAGE
const TelemetryPage = ({ isMobile, onCtaClick, onNavigate }) => (
  <div>
    <PageHeader
      tag="BIOMETRIC TAXONOMY // 7 DOMAINS"
      title="7-Category Health & Fitness"
      highlight="Telemetry Matrix"
      description="Yuguyu moves far beyond steps and calories. Explore the complete biometric and lifestyle matrix that feeds your personal coach."
      isMobile={isMobile}
    />
    <TelemetryMatrixSection isMobile={isMobile} />
    <section className="section" style={{ background: 'var(--bg-primary)', textAlign: 'center', padding: '4.5rem 0' }}>
      <div className="container">
        <Reveal>
          <div className="glass-card" style={{ maxWidth: '720px', margin: '0 auto', padding: '2.5rem 2rem', border: '1px solid var(--border-light)' }}>
            <span className="mono-tag" style={{ color: 'var(--accent-red)', marginBottom: '8px', display: 'inline-block' }}>
              ALGORITHMIC SYNTHESIS
            </span>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>
              How Yuguyu Calculates Composite Scores
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              These 40+ raw signals feed into our 5 composite indices to calculate CNS strain, mechanical recovery, and metabolic velocity in real time.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => onNavigate('indices')} className="btn btn-secondary">
                Explore The 5 Calculated Indices <ArrowRight size={16} style={{ marginLeft: '6px' }} />
              </button>
              <button onClick={onCtaClick} className="btn btn-accent">
                Get Early Access
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

// 5. INDICES PAGE
const IndicesPage = ({ isMobile, onCtaClick }) => (
  <div>
    <PageHeader
      tag="COMPOSITE METRICS // MATHEMATICAL MODELS"
      title="The 5 Calculated"
      highlight="Composite Indices"
      description="Raw data is noisy and contradictory. These 5 real-time indices calculate exactly how ready, strained, and recovered you are."
      isMobile={isMobile}
    />
    <CalculatedIndicesSection isMobile={isMobile} />
    <ClosingSection isMobile={isMobile} onCtaClick={onCtaClick} />
  </div>
);

// 6. ECOSYSTEM PAGE
const EcosystemPage = ({ isMobile, onCtaClick }) => (
  <div>
    <PageHeader
      tag="UNIVERSAL SYNC // PRODUCT HORIZONS"
      title="Dual-Source Architecture &"
      highlight="Hardware Roadmap"
      description="Don’t wait for dedicated hardware. Sync your existing wearable today, and upgrade to the Screenless Band tomorrow."
      isMobile={isMobile}
    />
    <DualEcosystemSection isMobile={isMobile} onCtaClick={onCtaClick} />
    <ClosingSection isMobile={isMobile} onCtaClick={onCtaClick} />
  </div>
);

// Hash Router Helper
const getPageFromHash = () => {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
  if (['band', 'wearable-band', 'hardware'].includes(hash)) return 'band';
  if (['coach', 'intelligence', 'ai-coach'].includes(hash)) return 'coach';
  if (['telemetry', 'telemetry-matrix', 'metrics'].includes(hash)) return 'telemetry';
  if (['indices', 'calculated-indices'].includes(hash)) return 'indices';
  if (['ecosystem', 'roadmap', 'hardware-roadmap', 'dual-ecosystem'].includes(hash)) return 'ecosystem';
  return 'home';
};

// =====================================================================
// ROOT APPLICATION
// =====================================================================
function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isLightMode, setIsLightMode] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isLightMode]);

  useEffect(() => {
    const handleHashChange = () => {
      const newPage = getPageFromHash();
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (pageId) => {
    window.location.hash = pageId === 'home' ? '/' : `/${pageId}`;
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'band':
        return <BandPage isMobile={isMobile} onCtaClick={() => setShowContactModal(true)} />;
      case 'coach':
        return <CoachPage isMobile={isMobile} onCtaClick={() => setShowContactModal(true)} />;
      case 'telemetry':
        return <TelemetryPage isMobile={isMobile} onCtaClick={() => setShowContactModal(true)} onNavigate={navigate} />;
      case 'indices':
        return <IndicesPage isMobile={isMobile} onCtaClick={() => setShowContactModal(true)} />;
      case 'ecosystem':
        return <EcosystemPage isMobile={isMobile} onCtaClick={() => setShowContactModal(true)} />;
      case 'home':
      default:
        return <HomePage isMobile={isMobile} onCtaClick={() => setShowContactModal(true)} onNavigate={navigate} />;
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Navigation */}
      <Navbar
        isMobile={isMobile}
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
        onContactClick={() => setShowContactModal(true)}
        currentPage={currentPage}
        onNavigate={navigate}
      />

      {/* Dynamic Page Content */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.26, ease: 'easeOut' }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer isMobile={isMobile} onNavigate={navigate} />

      {/* Early Access Form Modal */}
      <AnimatePresence>
        {showContactModal && (
          <ContactModal
            onClose={() => setShowContactModal(false)}
            isMobile={isMobile}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

const WrappedApp = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

export default WrappedApp;
