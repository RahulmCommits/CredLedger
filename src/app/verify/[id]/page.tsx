import React from 'react';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { ShieldCheck, Calendar, Hash, Building2, User as UserIcon, CheckCircle2, ArrowRight } from 'lucide-react';
import { CredLedgerLogo } from '@/components/CredLedgerLogo';
import Link from 'next/link';
import { DownloadVerifyClient } from './DownloadVerifyClient';

export default async function VerifyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const credentialId = resolvedParams.id;
  
  const certificate = await prisma.certificate.findUnique({
    where: { id: credentialId },
    include: {
      batch: {
        include: {
          organization: true,
          template: true
        }
      }
    }
  });

  if (!certificate) {
    notFound();
  }

  let dynamicData: any = {};
  try {
    dynamicData = JSON.parse(certificate.dynamicData);
  } catch (e) {
    console.error("Failed to parse dynamic data");
  }

  const issueDate = new Date(certificate.issuedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const stellarExpertUrl = `https://stellar.expert/explorer/testnet/tx/${certificate.dataHash}`;

  return (
    <div className="min-h-screen bg-surface-bright flex flex-col">
      {/* Header */}
      <header className="bg-pure-white border-b border-outline-variant p-6 flex justify-between items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <CredLedgerLogo className="text-pure-black" />
        </Link>
        <div className="flex items-center gap-2 text-primary font-dot uppercase text-[14px]">
          <ShieldCheck className="w-5 h-5" />
          <span>Verification Portal</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="max-w-3xl w-full bg-pure-white border-2 border-pure-black border-b-8 border-r-8 shadow-sm p-8 md:p-12 relative overflow-hidden">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0" />
          
          {/* Status Badge */}
          <div className="flex items-center justify-center gap-2 mb-10 z-10 relative">
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Verified on Blockchain
            </div>
          </div>

          <div className="text-center mb-12 z-10 relative">
            <h1 className="font-playfair text-[32px] md:text-[48px] leading-tight text-pure-black font-bold mb-4">
              Credential Verification
            </h1>
            <p className="font-hanken text-on-surface-variant text-lg max-w-xl mx-auto">
              This credential has been mathematically verified on the Stellar blockchain, proving its authenticity and ensuring it has not been tampered with.
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 z-10 relative">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-on-surface-variant font-mono text-xs uppercase mb-1">
                  <UserIcon className="w-4 h-4" /> Recipient Name
                </div>
                <div className="font-hanken text-xl font-semibold text-pure-black">
                  {dynamicData.name || certificate.recipientEmail || "N/A"}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-on-surface-variant font-mono text-xs uppercase mb-1">
                  <Building2 className="w-4 h-4" /> Issued By
                </div>
                <div className="font-hanken text-xl font-semibold text-pure-black">
                  {certificate.batch.organization.name}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-on-surface-variant font-mono text-xs uppercase mb-1">
                  <Calendar className="w-4 h-4" /> Issue Date
                </div>
                <div className="font-hanken text-xl font-semibold text-pure-black">
                  {issueDate}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-on-surface-variant font-mono text-xs uppercase mb-1">
                  <Hash className="w-4 h-4" /> Certificate ID
                </div>
                <div className="font-mono text-sm font-medium text-pure-black break-all bg-surface-container-low p-2 border border-outline-variant rounded">
                  {certificate.id}
                </div>
              </div>
            </div>
          </div>
          
          {/* Event Details Box */}
          {dynamicData.eventName && (
            <div className="bg-surface-bright border border-outline-variant p-6 rounded-lg mb-12 z-10 relative">
              <div className="font-mono text-xs uppercase text-on-surface-variant mb-2">Event / Certification Details</div>
              <div className="font-playfair text-2xl font-bold text-pure-black">
                {dynamicData.eventName}
              </div>
            </div>
          )}

          {/* Actions */}
          <DownloadVerifyClient 
            credentialId={credentialId}
            transactionHash={certificate.dataHash}
            stellarExpertUrl={stellarExpertUrl}
            verificationTime={new Date(certificate.issuedAt).toLocaleString('en-US')}
            dynamicData={dynamicData}
          />
        </div>
      </main>
    </div>
  );
}
