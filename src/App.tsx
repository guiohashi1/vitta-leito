/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HERO_IMAGE, PRODUCTS, buildWhatsAppUrl } from './data/products';
import { ProductShowcase } from './components/ProductShowcase';
import { ArticulationVisualizer } from './components/ArticulationVisualizer';
import { ArrowUpRight, Check, Truck, ShieldCheck, Clock } from 'lucide-react';

const HERO_HOTSPOTS = [
  {
    id: 'cabeceira',
    x: '28%',
    y: '44%',
    title: 'Inclinação Suave (0° a 75°)',
    detail: 'Ideal para alimentar o paciente e assistir TV sem escorregar.'
  },
  {
    id: 'colchao',
    x: '54%',
    y: '55%',
    title: 'Colchão 100% Impermeável',
    detail: 'Espuma ortopédica que dobra com a cama e limpa em 1 minuto.'
  },
  {
    id: 'altura',
    x: '72%',
    y: '72%',
    title: 'Estrutura Silenciosa e Segura',
    detail: 'Grades de proteção e rodízios com trava firme que não riscam o piso.'
  }
];

export default function App() {
  const [heroImgError, setHeroImgError] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string>(HERO_HOTSPOTS[0].id);

  const selectedHotspot =
    HERO_HOTSPOTS.find((h) => h.id === activeHotspot) || HERO_HOTSPOTS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#141615]">
      {/* Minimalist 3-Zone Header */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E6E4DD]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a
            href="#"
            className="font-display text-xl font-semibold tracking-tight text-[#141615]"
          >
            VittaLeito
          </a>

          <nav
            aria-label="Produtos"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A4E4B]"
          >
            <a href="#eletrica" className="hover:text-[#141615] transition-colors">
              Cama Elétrica
            </a>
            <a href="#manual" className="hover:text-[#141615] transition-colors">
              Cama Manual
            </a>
            <a href="#colchao" className="hover:text-[#141615] transition-colors">
              Colchão Hospitalar
            </a>
            <a href="#movimentos" className="hover:text-[#141615] transition-colors">
              Simulador
            </a>
          </nav>

          <a
            href={buildWhatsAppUrl(
              'Olá! Vim pelo site da VittaLeito e gostaria de atendimento para Cama / Colchão Hospitalar.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#14532D] hover:bg-[#0F3F22] rounded-xl transition-colors whitespace-nowrap"
          >
            <span>Chamar no WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Visual-First Hero Section */}
        <section className="pt-10 pb-16 md:pt-16 md:pb-20">
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Concise Headline + CTA */}
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-medium text-[#14532D] mb-3 tracking-wide uppercase">
                Venda e Locação · Entrega em até 24h
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#141615] tracking-tight leading-[1.06]">
                O conforto do quarto. A segurança do hospital.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#575B57] max-w-xl leading-relaxed">
                Camas Hospitalares Elétricas, Manuais e Colchões Impermeáveis com entrega e montagem rápida na sua casa.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={buildWhatsAppUrl(
                    'Olá! Preciso de ajuda para escolher uma Cama Hospitalar e Colchão.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#14532D] hover:bg-[#0F3F22] text-white text-sm font-medium transition-colors"
                >
                  <span>Falar com Especialista no WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#produtos"
                  className="inline-flex items-center px-6 py-4 rounded-xl bg-[#EAE7E0] hover:bg-[#DFDCD4] text-[#141615] text-sm font-medium transition-colors"
                >
                  Ver os 3 Produtos
                </a>
              </div>
            </div>

            {/* Interactive Hero Showcase Image with Visual Hotspots */}
            <div className="relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden rounded-3xl bg-[#EAE7E0] border border-[#DFDCD4]">
              {!heroImgError ? (
                <img
                  src={HERO_IMAGE}
                  alt="Quarto aconchegante equipado com Cama Hospitalar Elétrica VittaLeito"
                  referrerPolicy="no-referrer"
                  onError={() => setHeroImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-12">
                  <span className="font-display text-2xl">VittaLeito</span>
                </div>
              )}

              {/* Interactive Hotspot Pins on the Bed */}
              {HERO_HOTSPOTS.map((spot, idx) => {
                const isSelected = spot.id === activeHotspot;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveHotspot(spot.id)}
                    style={{ left: spot.x, top: spot.y }}
                    aria-label={spot.title}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-mono-tabular text-xs font-semibold transition-all cursor-pointer shadow-md ${
                      isSelected
                        ? 'bg-[#14532D] text-white scale-110 ring-4 ring-white/80'
                        : 'bg-white/95 text-[#141615] hover:scale-105'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}

              {/* Floating Hotspot Info Card inside Hero Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm rounded-2xl bg-[#141615]/85 backdrop-blur-md p-4 sm:p-5 text-white border border-white/15">
                <div className="text-[11px] font-mono-tabular text-[#86EFAC] mb-1">
                  Toque nos pontos da imagem para explorar
                </div>
                <div className="text-sm sm:text-base font-medium text-white">
                  {selectedHotspot.title}
                </div>
                <p className="text-xs sm:text-sm text-[#D6DBD7] mt-1 leading-snug">
                  {selectedHotspot.detail}
                </p>
              </div>
            </div>

            {/* 3 Quick Visual Product Jump Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {PRODUCTS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-[#E6E4DD] hover:border-[#14532D] transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#F3F1EC]"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-mono-tabular text-[#686C68]">
                      Produto {item.number}
                    </div>
                    <div className="text-sm font-semibold text-[#141615] group-hover:text-[#14532D] transition-colors truncate">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#14532D] font-medium mt-0.5">
                      Ver detalhes →
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Minimal Trust Bar (3 Scannable Pillars) */}
        <section className="border-y border-[#E6E4DD] bg-[#F3F1EC] py-8">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#DFDCD4] flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-[#14532D]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#141615]">
                  Entrega e Montagem em 24h
                </div>
                <div className="text-xs text-[#575B57]">
                  Deixamos pronta para uso no quarto
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#DFDCD4] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#14532D]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#141615]">
                  Certificação ANVISA e INMETRO
                </div>
                <div className="text-xs text-[#575B57]">
                  Garantia total de 24 meses
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#DFDCD4] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#14532D]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#141615]">
                  Atendimento Humano Imediato
                </div>
                <div className="text-xs text-[#575B57]">
                  Orientação rápida pelo WhatsApp
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Visual Product Showcase (The 3 Products) */}
        <ProductShowcase />

        {/* Streamlined Dark Visual Simulator */}
        <ArticulationVisualizer />

        {/* Complete Kit Callout (Cama + Colchão) */}
        <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-6">
          <div className="rounded-3xl bg-[#F3F1EC] border border-[#DFDCD4] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium text-[#14532D] mb-2 uppercase tracking-wide">
                Solução Pronta para Alta Hospitalar
              </p>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#141615] tracking-tight">
                Conjunto Completo: Cama + Colchão Impermeável.
              </h2>
              <p className="mt-3 text-base text-[#575B57] max-w-xl">
                Receba a cama escolhida já com o colchão hospitalar na medida exata. Sem complicação e com orientação completa para a família no ato da entrega.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm font-medium text-[#141615]">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#14532D]" /> Medidas compatíveis
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#14532D]" /> Montagem inclusa
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#14532D]" /> Compra ou Locação
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={buildWhatsAppUrl(
                  'Olá! Quero cotar o *Conjunto Completo (Cama Hospitalar + Colchão Impermeável)* pelo WhatsApp.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#14532D] hover:bg-[#0F3F22] text-white text-sm font-medium transition-colors"
              >
                <span>Solicitar Conjunto no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-[#686C68]">
                Resposta média em menos de 3 minutos.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Clean Minimal Footer */}
      <footer className="bg-[#141615] text-[#9CA39E] py-10 border-t border-[#2A2E2C]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg text-white">VittaLeito</span>
            <span>·</span>
            <span>Camas Elétricas, Manuais e Colchões Hospitalares</span>
          </div>
          <div>
            © {new Date().getFullYear()} VittaLeito · Equipamentos Homologados ANVISA
          </div>
        </div>
      </footer>
    </div>
  );
}
