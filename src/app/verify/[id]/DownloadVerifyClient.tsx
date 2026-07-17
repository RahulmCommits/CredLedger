"use client";

import React, { useState } from 'react';
import { Download, ArrowRight, Loader2 } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { ReactPdfCertificate } from '@/components/ReactPdfCertificate';
import QRCode from 'qrcode';

interface DownloadVerifyClientProps {
  credentialId: string;
  transactionHash: string;
  stellarExpertUrl: string;
  verificationTime: string;
  dynamicData: any;
}

export function DownloadVerifyClient({ 
  credentialId, 
  transactionHash, 
  stellarExpertUrl,
  verificationTime,
  dynamicData
}: DownloadVerifyClientProps) {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGeneratingPdf(true);
    try {
      // The QR code on the certificate itself should point back to this verify page!
      const verifyUrl = typeof window !== 'undefined' 
        ? `${window.location.origin}/verify/${credentialId}`
        : `https://verify.credledger.com/verify/${credentialId}`;

      const qrDataUrl = await QRCode.toDataURL(verifyUrl, { width: 400, margin: 1 });
      
      const blob = await pdf(
        <ReactPdfCertificate 
          credentialId={credentialId}
          transactionHash={transactionHash}
          verificationTime={verificationTime}
          qrDataUrl={qrDataUrl}
          data={{
            title: "CERTIFICATE",
            subtitle: "OF PARTICIPATION",
            presentedTo: "PROUDLY PRESENTED TO",
            name: dynamicData.name || "Unknown",
            description: "for successfully participating in",
            eventName: dynamicData.eventName || "Unknown",
            eventDetails: dynamicData.eventDetails || "An insightful session covering the fundamentals of Blockchain, Smart Contracts, and Web3 Development.",
            date: dynamicData.date || "",
            duration: "6 Hours",
            mode: "Online",
            organizer: "CredLedger",
            issuerName: dynamicData.issuerName || "Admin",
            signature1Name: dynamicData.signature1Name || "Community Lead",
            signature1Title: dynamicData.signature1Title || "Lead",
            signature2Name: dynamicData.signature2Name || "Event Coordinator",
            signature2Title: dynamicData.signature2Title || "Coordinator",
          }}
          theme="light"
        />
      ).toBlob();
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `credential-${credentialId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF Generation failed", err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center z-10 relative pt-4 border-t border-outline-variant/50">
      <a 
        href={stellarExpertUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pure-white text-primary border-2 border-primary font-dot text-[14px] uppercase px-8 py-4 flex items-center justify-center gap-3 hover:bg-surface-bright transition-colors shadow-sm"
      >
        View on Stellar Explorer <ArrowRight className="w-4 h-4" />
      </a>
      
      <button 
        onClick={handleDownloadPDF}
        disabled={isGeneratingPdf}
        className="bg-primary text-pure-white font-dot text-[14px] uppercase px-8 py-4 flex items-center justify-center gap-3 hover:bg-inverse-surface transition-colors shadow-sm disabled:opacity-50"
      >
        {isGeneratingPdf ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
        {isGeneratingPdf ? "Generating..." : "Download Certificate PDF"}
      </button>
    </div>
  );
}
