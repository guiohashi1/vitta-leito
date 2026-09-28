import React, { useState } from 'react';
import { PRODUCTS, ProductItem, buildWhatsAppUrl } from '../data/products';
import { ArrowUpRight, Check } from 'lucide-react';

interface ProductRowProps {
  product: ProductItem;
  index: number;
  modality: 'Compra' | 'Locação';
}

const ProductVisualCard: React.FC<ProductRowProps> = ({ product, index, modality }) => {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id);
  const [imgError, setImgError] = useState(false);

  const variant =
    product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

  const isReversed = index % 2 === 1;
  const whatsappLink = buildWhatsAppUrl(
    `${variant.whatsappPrompt} Modalidade de interesse: *${modality}*.`
  );

  return (
    <div
      id={product.id}
      className="scroll-mt-24 rounded-3xl bg-white border border-[#E6E4DD] p-5 sm:p-8 lg:p-10 shadow-2xs"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isReversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Dominant Product Visual (7 Columns) */}
        <div className="lg:col-span-7">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-[#F3F1EC]">
            {!imgError ? (
              <img
                src={product.image}
                alt={product.imageAlt}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-8 text-center">
                <span className="font-display text-2xl text-[#141615]">
                  {product.name}
                </span>
              </div>
            )}

            {/* Minimal Floating Product Number Overlay */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-[#141615]/80 backdrop-blur-md text-white font-mono-tabular text-xs">
              {product.number} · {product.tag}
            </div>
          </div>

          {/* 3 Visual Key Metrics Strip right below image */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {variant.keyStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-[#FAF9F6] border border-[#EAE8E1] px-4 py-3 text-center sm:text-left"
              >
                <div className="font-mono-tabular text-base sm:text-lg font-semibold text-[#141615]">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-[#686C68] truncate">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean, Scannable Product Details (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="text-xs font-medium text-[#14532D] mb-2">
              Homologado ANVISA · Pronta Entrega
            </div>

            <h3 className="text-3xl sm:text-4xl font-normal text-[#141615] tracking-tight leading-[1.12]">
              {product.name}
            </h3>

            <p className="mt-3 text-base text-[#4A4E4B] leading-relaxed">
              {product.headline}
            </p>

            {/* Interactive Version Selector */}
            <div className="mt-6">
              <span className="block text-xs text-[#686C68] mb-2">
                Escolha a versão:
              </span>
              <div className="grid grid-cols-1 gap-2 p-1.5 rounded-2xl bg-[#F3F1EC]">
                {product.variants.map((v) => {
                  const active = v.id === variant.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariantId(v.id)}
                      className={`px-4 py-2.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-between ${
                        active
                          ? 'bg-white text-[#141615] shadow-xs'
                          : 'text-[#575B57] hover:text-[#141615]'
                      }`}
                    >
                      <span>{v.label}</span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          active ? 'bg-[#14532D]' : 'bg-transparent'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <p className="mt-3 text-xs sm:text-sm text-[#575B57] leading-relaxed">
                {variant.shortDesc}
              </p>
            </div>

            {/* 3 Scannable Highlights */}
            <ul className="mt-6 space-y-2.5 border-t border-[#EAE8E1] pt-5">
              {variant.features.map((feat) => (
                <li
                  key={feat}
                  className="flex items-center gap-2.5 text-sm text-[#141615]"
                >
                  <Check className="w-4 h-4 text-[#14532D] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct WhatsApp Action */}
          <div className="mt-8 pt-5 border-t border-[#EAE8E1]">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#14532D] hover:bg-[#0F3F22] text-white text-sm font-medium transition-colors whitespace-nowrap"
            >
              <span>Consultar {product.name} no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductShowcase: React.FC = () => {
  const [modality, setModality] = useState<'Compra' | 'Locação'>('Compra');

  return (
    <section id="produtos" className="py-16 md:py-24 max-w-[1200px] mx-auto px-6">
      {/* Compact Header + Compra/Locação Switch */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-xs font-medium text-[#14532D] mb-2">
            Nossos 3 Produtos
          </p>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#141615] tracking-tight">
            Escolha o equipamento ideal.
          </h2>
        </div>

        {/* Clean Modality Toggle */}
        <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#EAE7E0] self-start sm:self-auto">
          {(['Compra', 'Locação'] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setModality(item)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                modality === item
                  ? 'bg-white text-[#141615] shadow-xs'
                  : 'text-[#575B57] hover:text-[#141615]'
              }`}
            >
              Para {item}
            </button>
          ))}
        </div>
      </div>

      {/* The 3 Visual Product Cards */}
      <div className="space-y-10">
        {PRODUCTS.map((product, idx) => (
          <ProductVisualCard
            key={product.id}
            product={product}
            index={idx}
            modality={modality}
          />
        ))}
      </div>
    </section>
  );
};
