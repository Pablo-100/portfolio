export const PFE_CV_URL = '/assets/aistudio/TBINI_Mustapha-Amin_CV__PFE__f74fed52.pdf';
export const PFE_CV_FALLBACK_URL = '/TBINI_Mustapha_Amine_CV_PFE.pdf';
export const PFE_CV_FILENAME = 'TBINI_Mustapha_Amine_CV_PFE.pdf';

function triggerAnchorDownload(href: string, filename: string) {
  const link = document.createElement('a');
  link.href = href;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function fetchPdfBlob(url: string): Promise<Blob | null> {
  try {
    const res = await fetch(url, { credentials: 'same-origin' });
    if (!res.ok) return null;
    const buffer = await res.arrayBuffer();
    if (buffer.byteLength < 1024) return null;
    const header = new TextDecoder('ascii').decode(new Uint8Array(buffer, 0, 5));
    if (!header.startsWith('%PDF-')) return null;
    return new Blob([buffer], { type: 'application/pdf' });
  } catch {
    return null;
  }
}

export async function downloadPfeCv(): Promise<void> {
  const blob = (await fetchPdfBlob(PFE_CV_URL)) || (await fetchPdfBlob(PFE_CV_FALLBACK_URL));
  if (blob) {
    const blobUrl = URL.createObjectURL(blob);
    triggerAnchorDownload(blobUrl, PFE_CV_FILENAME);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
    return;
  }
  triggerAnchorDownload(PFE_CV_URL, PFE_CV_FILENAME);
}
