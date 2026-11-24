import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import QRCode from 'qrcode';
import {
  X, QrCode, Download, Copy, Check, FileText, Globe, Link2, Sparkles, GraduationCap, Mail, Phone
} from 'lucide-react';

interface QrPassModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'fr';
}

type CardTheme = 'clean' | 'midnight' | 'cobalt';
type TargetPreset = 'cv-prod' | 'portfolio-prod' | 'cv-current' | 'custom';

const PROD_BASE = 'https://pablo-100.vercel.app';
const CV_PATH = '/TBINI_Mustapha_Amine_CV_PFE.pdf';

export const QrPassModal: React.FC<QrPassModalProps> = ({ isOpen, onClose, lang }) => {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : PROD_BASE;
  const isVercelOrCustom =
    typeof window !== 'undefined' &&
    !window.location.hostname.includes('localhost') &&
    !window.location.hostname.includes('127.0.0.1') &&
    !window.location.hostname.includes('ais-dev');

  const defaultPreset: TargetPreset = isVercelOrCustom ? 'cv-current' : 'cv-prod';

  const [preset, setPreset] = useState<TargetPreset>(defaultPreset);
  const [customUrl, setCustomUrl] = useState<string>(`${PROD_BASE}${CV_PATH}`);
  const [cardTheme, setCardTheme] = useState<CardTheme>('clean');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [downloadingPng, setDownloadingPng] = useState(false);

  const activeUrl = useMemo(() => {
    if (preset === 'cv-prod') return `${PROD_BASE}${CV_PATH}`;
    if (preset === 'portfolio-prod') return PROD_BASE;
    if (preset === 'cv-current') return `${currentOrigin}${CV_PATH}`;
    return customUrl.trim() || `${PROD_BASE}${CV_PATH}`;
  }, [preset, customUrl, currentOrigin]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(activeUrl, {
      errorCorrectionLevel: 'H',
      margin: 2,
      width: 640,
      color: {
        dark: '#090D16',
        light: '#FFFFFF',
      },
    })
      .then((url) => {
        if (!cancelled) setQrDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setQrDataUrl('');
      });
    return () => {
      cancelled = true;
    };
  }, [activeUrl]);

  const labels = lang === 'fr'
    ? {
        modalTitle: 'Pass QR Code · CV PFE',
        modalSub: 'Partagez ou imprimez une seule carte au lieu de 20 copies papier',
        roleLine: 'Admin Systèmes & Réseaux · Analyste SOC L1 · Full-Stack',
        pfeLine: 'Élève Ingénieur Dernière Année (TEK-UP) · Stage PFE',
        scanHint: preset === 'portfolio-prod'
          ? 'Scannez pour ouvrir le Portfolio'
          : 'Scannez pour télécharger le CV PFE (PDF)',
        destLabel: 'Destination du QR Code',
        optCvProd: 'CV PFE (pablo-100.vercel.app)',
        optPortfolio: 'Portfolio Web',
        optCurrent: 'URL Actuelle (Test)',
        optCustom: 'Lien Personnalisé',
        themeLabel: 'Style de la carte',
        themeClean: 'Papier Blanc (Impression)',
        themeMidnight: 'Midnight Cyber',
        themeCobalt: 'Bleu Cobalt',
        urlLabel: 'Lien encodé',
        downloadPng: 'Télécharger Carte PNG (HD)',
        downloadSvg: 'Télécharger QR (SVG)',
        copyLink: 'Copier le lien',
        copied: 'Copié !',
        tip: 'Astuce : Enregistrez la carte PNG sur votre téléphone ou imprimez un seul badge pour les forums PFE.',
      }
    : {
        modalTitle: 'PFE CV · QR Code Pass',
        modalSub: 'Share on your phone or print 1 crisp card instead of 20 paper copies',
        roleLine: 'SysAdmin & Network Admin · SOC Analyst L1 · Full-Stack',
        pfeLine: 'Final-Year Engineering Student (TEK-UP) · Seeking PFE',
        scanHint: preset === 'portfolio-prod'
          ? 'Scan to open Portfolio'
          : 'Scan to download PFE CV (PDF)',
        destLabel: 'QR Destination',
        optCvProd: 'PFE CV (pablo-100.vercel.app)',
        optPortfolio: 'Portfolio Site',
        optCurrent: 'Current Preview URL',
        optCustom: 'Custom URL',
        themeLabel: 'Card Style',
        themeClean: 'Clean Print White',
        themeMidnight: 'Midnight Cyber',
        themeCobalt: 'Royal Cobalt',
        urlLabel: 'Encoded URL',
        downloadPng: 'Download Pass PNG (HD)',
        downloadSvg: 'Download QR (SVG)',
        copyLink: 'Copy Link',
        copied: 'Copied!',
        tip: 'Tip: Save the HD PNG card on your phone lockscreen or print a single badge for career fairs.',
      };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored
    }
  };

  const handleDownloadSvg = async () => {
    try {
      const svgString = await QRCode.toString(activeUrl, {
        type: 'svg',
        errorCorrectionLevel: 'H',
        margin: 2,
        color: { dark: '#090D16', light: '#FFFFFF' },
      });
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'TBINI_Mustapha_Amine_CV_QR.svg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch {
      // ignore
    }
  };

  const handleDownloadPngPass = async () => {
    setDownloadingPng(true);
    try {
      const W = 1200;
      const H = 1660;
      const canvas = document.createElement('canvas');
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const palette =
        cardTheme === 'clean'
          ? {
              bg: '#FFFFFF',
              border: '#CBD5E1',
              title: '#0F172A',
              sub: '#475569',
              accent: '#0284C7',
              emerald: '#059669',
              qrWrapBg: '#F8FAFC',
              qrWrapBorder: '#E2E8F0',
              footerBg: '#F1F5F9',
              footerText: '#334155',
            }
          : cardTheme === 'cobalt'
          ? {
              bg: '#0B172A',
              border: '#1E3A5F',
              title: '#F8FAFC',
              sub: '#94A3B8',
              accent: '#38BDF8',
              emerald: '#34D399',
              qrWrapBg: '#FFFFFF',
              qrWrapBorder: '#38BDF8',
              footerBg: '#10233E',
              footerText: '#CBD5E1',
            }
          : {
              bg: '#070B14',
              border: '#1E293B',
              title: '#F8FAFC',
              sub: '#94A3B8',
              accent: '#38BDF8',
              emerald: '#34D399',
              qrWrapBg: '#FFFFFF',
              qrWrapBorder: '#334155',
              footerBg: '#0E1525',
              footerText: '#CBD5E1',
            };

      const drawRoundedRect = (
        x: number,
        y: number,
        w: number,
        h: number,
        r: number
      ) => {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
      };

      // Background
      ctx.fillStyle = palette.bg;
      ctx.fillRect(0, 0, W, H);

      // Subtle top accent bar
      const grad = ctx.createLinearGradient(0, 0, W, 0);
      grad.addColorStop(0, '#0284C7');
      grad.addColorStop(0.5, '#0EA5E9');
      grad.addColorStop(1, '#10B981');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, 16);

      // Outer border frame
      ctx.strokeStyle = palette.border;
      ctx.lineWidth = 4;
      drawRoundedRect(24, 36, W - 48, H - 60, 44);
      ctx.stroke();

      // Header text
      ctx.textAlign = 'center';
      ctx.fillStyle = palette.accent;
      ctx.font = '700 28px ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.fillText('TBINI MUSTAPHA AMINE', W / 2, 130);

      ctx.fillStyle = palette.title;
      ctx.font = '800 54px system-ui, -apple-system, sans-serif';
      ctx.fillText('Curriculum Vitae · PFE', W / 2, 200);

      ctx.fillStyle = palette.emerald;
      ctx.font = '700 27px system-ui, -apple-system, sans-serif';
      ctx.fillText(labels.pfeLine, W / 2, 258);

      ctx.fillStyle = palette.sub;
      ctx.font = '500 25px system-ui, -apple-system, sans-serif';
      ctx.fillText(labels.roleLine, W / 2, 306);

      // QR Container
      const qrBoxSize = 780;
      const qrBoxX = (W - qrBoxSize) / 2;
      const qrBoxY = 370;

      ctx.fillStyle = '#FFFFFF';
      drawRoundedRect(qrBoxX, qrBoxY, qrBoxSize, qrBoxSize, 42);
      ctx.fill();

      ctx.strokeStyle = palette.qrWrapBorder;
      ctx.lineWidth = 3;
      drawRoundedRect(qrBoxX, qrBoxY, qrBoxSize, qrBoxSize, 42);
      ctx.stroke();

      // Render crisp QR onto temp canvas then draw centered
      const qrCanvas = document.createElement('canvas');
      await QRCode.toCanvas(qrCanvas, activeUrl, {
        errorCorrectionLevel: 'H',
        margin: 2,
        width: 680,
        color: { dark: '#090D16', light: '#FFFFFF' },
      });
      ctx.drawImage(qrCanvas, qrBoxX + 50, qrBoxY + 50, 680, 680);

      // Corner finder accents inside QR container
      const cLen = 36;
      const pad = 22;
      ctx.strokeStyle = palette.accent;
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      // Top-left
      ctx.beginPath();
      ctx.moveTo(qrBoxX + pad, qrBoxY + pad + cLen);
      ctx.lineTo(qrBoxX + pad, qrBoxY + pad);
      ctx.lineTo(qrBoxX + pad + cLen, qrBoxY + pad);
      ctx.stroke();
      // Top-right
      ctx.beginPath();
      ctx.moveTo(qrBoxX + qrBoxSize - pad - cLen, qrBoxY + pad);
      ctx.lineTo(qrBoxX + qrBoxSize - pad, qrBoxY + pad);
      ctx.lineTo(qrBoxX + qrBoxSize - pad, qrBoxY + pad + cLen);
      ctx.stroke();
      // Bottom-left
      ctx.beginPath();
      ctx.moveTo(qrBoxX + pad, qrBoxY + qrBoxSize - pad - cLen);
      ctx.lineTo(qrBoxX + pad, qrBoxY + qrBoxSize - pad);
      ctx.lineTo(qrBoxX + pad + cLen, qrBoxY + qrBoxSize - pad);
      ctx.stroke();
      // Bottom-right
      ctx.beginPath();
      ctx.moveTo(qrBoxX + qrBoxSize - pad - cLen, qrBoxY + qrBoxSize - pad);
      ctx.lineTo(qrBoxX + qrBoxSize - pad, qrBoxY + qrBoxSize - pad);
      ctx.lineTo(qrBoxX + qrBoxSize - pad, qrBoxY + qrBoxSize - pad - cLen);
      ctx.stroke();

      // Scan prompt below QR
      ctx.fillStyle = palette.title;
      ctx.font = '700 32px system-ui, -apple-system, sans-serif';
      ctx.fillText(labels.scanHint, W / 2, 1230);

      // URL pill-like clean strip
      ctx.fillStyle = palette.footerBg;
      drawRoundedRect(100, 1275, W - 200, 76, 20);
      ctx.fill();

      ctx.fillStyle = palette.accent;
      ctx.font = '600 23px ui-monospace, SFMono-Regular, Menlo, monospace';
      const displayUrl = activeUrl.length > 56 ? `${activeUrl.slice(0, 53)}...` : activeUrl;
      ctx.fillText(displayUrl, W / 2, 1322);

      // Contact footer
      ctx.fillStyle = palette.footerText;
      ctx.font = '600 25px system-ui, -apple-system, sans-serif';
      ctx.fillText('+216 46-345-226   ·   mustaphaamintbini@gmail.com', W / 2, 1445);

      ctx.fillStyle = palette.sub;
      ctx.font = '500 24px ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.fillText('github.com/Pablo-100   ·   linkedin.com/in/mustapha-amin-tbini', W / 2, 1495);

      ctx.fillStyle = palette.sub;
      ctx.font = '500 22px system-ui, -apple-system, sans-serif';
      ctx.fillText('TEK-UP University · Tunis, Tunisia', W / 2, 1565);

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob((b) => resolve(b), 'image/png', 1.0)
      );
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'TBINI_Mustapha_Amine_QR_Pass.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 5000);
      }
    } finally {
      setDownloadingPng(false);
    }
  };

  const themeCardClasses =
    cardTheme === 'clean'
      ? 'bg-white text-slate-900 border-slate-200 shadow-2xl'
      : cardTheme === 'cobalt'
      ? 'bg-[#0B172A] text-slate-100 border-sky-500/30 shadow-[0_20px_60px_rgba(14,165,233,0.2)]'
      : 'bg-[#070B14] text-slate-100 border-slate-700/80 shadow-[0_20px_60px_rgba(0,0,0,0.65)]';

  const themeMutedText = cardTheme === 'clean' ? 'text-slate-600' : 'text-slate-400';
  const themeAccentText = cardTheme === 'clean' ? 'text-sky-600' : 'text-sky-400';
  const themeEmeraldText = cardTheme === 'clean' ? 'text-emerald-600' : 'text-emerald-400';
  const themeUrlBg =
    cardTheme === 'clean'
      ? 'bg-slate-100 text-sky-700 border-slate-200'
      : 'bg-white/5 text-sky-300 border-white/10';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2.5 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[94dvh] sm:max-h-[92dvh] rounded-2xl sm:rounded-3xl bg-slate-950/95 text-slate-100 border border-white/15 shadow-2xl overflow-hidden flex flex-col my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4 border-b border-white/10 bg-white/[0.02] shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="p-2 sm:p-2.5 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/25 shrink-0">
                  <QrCode size={20} />
                </div>
                <div className="min-w-0">
                  <h2 className="text-base sm:text-lg font-bold text-white leading-tight truncate">{labels.modalTitle}</h2>
                  <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-2 sm:line-clamp-1">{labels.modalSub}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 p-4 sm:p-6 items-start">
              {/* Left: Designer Pass Preview */}
              <div className="md:col-span-6 flex justify-center">
                <div
                  className={`relative w-full max-w-[340px] rounded-2xl sm:rounded-3xl border overflow-hidden transition-colors duration-300 ${themeCardClasses}`}
                >
                  {/* Top gradient accent stripe */}
                  <div className="h-2 w-full bg-gradient-to-r from-sky-600 via-sky-400 to-emerald-500" />

                  <div className="p-4 sm:p-6 flex flex-col items-center text-center">
                    <div className={`text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase ${themeAccentText}`}>
                      TBINI Mustapha Amine
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold tracking-tight mt-1">
                      Curriculum Vitae · PFE
                    </h3>
                    <div className={`mt-1.5 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold ${themeEmeraldText}`}>
                      <GraduationCap size={14} className="shrink-0" />
                      <span>{labels.pfeLine}</span>
                    </div>
                    <p className={`text-[11px] mt-1 ${themeMutedText}`}>
                      {labels.roleLine}
                    </p>

                    {/* Crisp QR Frame (Always white quiet zone for 100% camera readability) */}
                    <div className="relative mt-4 sm:mt-5 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      {/* Viewfinder corners */}
                      <span className="absolute top-2 left-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t-2 border-l-2 border-sky-500 rounded-tl-md" />
                      <span className="absolute top-2 right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t-2 border-r-2 border-sky-500 rounded-tr-md" />
                      <span className="absolute bottom-2 left-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b-2 border-l-2 border-sky-500 rounded-bl-md" />
                      <span className="absolute bottom-2 right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b-2 border-r-2 border-sky-500 rounded-br-md" />

                      {qrDataUrl ? (
                        <img
                          src={qrDataUrl}
                          alt="QR Code CV PFE TBINI Mustapha Amine"
                          className="w-40 h-40 sm:w-52 sm:h-52 block select-none"
                        />
                      ) : (
                        <div className="w-40 h-40 sm:w-52 sm:h-52 flex items-center justify-center text-slate-400 text-xs">
                          Generating QR...
                        </div>
                      )}
                    </div>

                    <div className="mt-3.5 sm:mt-4 text-xs font-bold tracking-tight">
                      {labels.scanHint}
                    </div>

                    <div
                      className={`mt-2.5 w-full px-3 py-1.5 rounded-xl border text-[11px] font-mono truncate ${themeUrlBg}`}
                      title={activeUrl}
                    >
                      {activeUrl}
                    </div>

                    <div className={`mt-3.5 sm:mt-4 pt-3 border-t w-full space-y-1 text-[11px] ${cardTheme === 'clean' ? 'border-slate-200' : 'border-white/10'} ${themeMutedText}`}>
                      <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
                        <span className="inline-flex items-center gap-1 whitespace-nowrap">
                          <Phone size={11} /> +216 46-345-226
                        </span>
                        <span className="hidden sm:inline">·</span>
                        <span className="inline-flex items-center gap-1 break-all">
                          <Mail size={11} className="shrink-0" /> mustaphaamintbini@gmail.com
                        </span>
                      </div>
                      <div className="font-mono text-[10px] opacity-80">
                        github.com/Pablo-100 · TEK-UP University
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Controls & Exports */}
              <div className="md:col-span-6 space-y-4 sm:space-y-5">
                {/* Destination Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    {labels.destLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPreset('cv-prod')}
                      className={`px-3 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer text-left ${
                        preset === 'cv-prod'
                          ? 'bg-sky-500/20 border-sky-400 text-white'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <FileText size={15} className="text-sky-400 shrink-0" />
                      <span className="truncate">{labels.optCvProd}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreset('portfolio-prod')}
                      className={`px-3 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer text-left ${
                        preset === 'portfolio-prod'
                          ? 'bg-sky-500/20 border-sky-400 text-white'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <Globe size={15} className="text-emerald-400 shrink-0" />
                      <span className="truncate">{labels.optPortfolio}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreset('cv-current')}
                      className={`px-3 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer text-left ${
                        preset === 'cv-current'
                          ? 'bg-sky-500/20 border-sky-400 text-white'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <Sparkles size={15} className="text-amber-400 shrink-0" />
                      <span className="truncate">{labels.optCurrent}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreset('custom')}
                      className={`px-3 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer text-left ${
                        preset === 'custom'
                          ? 'bg-sky-500/20 border-sky-400 text-white'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <Link2 size={15} className="text-indigo-400 shrink-0" />
                      <span className="truncate">{labels.optCustom}</span>
                    </button>
                  </div>
                </div>

                {/* Encoded URL input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    {labels.urlLabel}
                  </label>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <input
                      type="url"
                      value={preset === 'custom' ? customUrl : activeUrl}
                      onChange={(e) => {
                        setPreset('custom');
                        setCustomUrl(e.target.value);
                      }}
                      className="flex-1 min-w-0 w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-white/5 border border-white/15 text-xs font-mono text-slate-200 focus:outline-none focus:border-sky-400 transition-colors"
                      placeholder="https://..."
                    />
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="px-3.5 py-2.5 min-h-[44px] rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors shrink-0 cursor-pointer"
                    >
                      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span>{copied ? labels.copied : labels.copyLink}</span>
                    </button>
                  </div>
                </div>

                {/* Card Theme Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    {labels.themeLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'clean' as const, label: labels.themeClean, dot: 'bg-white border border-slate-400' },
                      { id: 'midnight' as const, label: labels.themeMidnight, dot: 'bg-[#070B14] border border-slate-500' },
                      { id: 'cobalt' as const, label: labels.themeCobalt, dot: 'bg-[#0B172A] border border-sky-400' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCardTheme(item.id)}
                        className={`px-3 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer ${
                          cardTheme === item.id
                            ? 'bg-sky-500/20 border-sky-400 text-white'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <span className={`w-3 h-3 rounded-full shrink-0 ${item.dot}`} />
                        <span className="truncate">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Export Buttons */}
                <div className="pt-1 sm:pt-2 space-y-2.5">
                  <button
                    type="button"
                    onClick={handleDownloadPngPass}
                    disabled={downloadingPng}
                    className="w-full py-3.5 px-5 min-h-[48px] rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 transition-all cursor-pointer disabled:opacity-60"
                  >
                    <Download size={17} />
                    <span>{labels.downloadPng}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadSvg}
                    className="w-full py-3 px-5 min-h-[46px] rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <QrCode size={16} className="text-sky-400" />
                    <span>{labels.downloadSvg}</span>
                  </button>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {labels.tip}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
