import React, { useState } from 'react';
import { ARTICULATION_PRESETS, buildWhatsAppUrl } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

export const ArticulationVisualizer: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(ARTICULATION_PRESETS[0].id);

  const current =
    ARTICULATION_PRESETS.find((item) => item.id === activeId) ||
    ARTICULATION_PRESETS[0];

  const normalizedHeight = (current.heightCm - 42) / 30;
  const bedFrameY = 175 - normalizedHeight * 36;
  const floorY = 212;

  const backPivotX = 195;
  const backLength = 105;
  const backRad = (current.backAngle * Math.PI) / 180;
  const backHeadX = backPivotX - Math.cos(backRad) * backLength;
  const backHeadY = bedFrameY - 8 - Math.sin(backRad) * backLength;

  const thighPivotX = 255;
  const thighLength = 72;
  const thighRad = (current.thighAngle * Math.PI) / 180;
  const kneeX = thighPivotX + Math.cos(thighRad) * thighLength;
  const kneeY = bedFrameY - 8 - Math.sin(thighRad) * thighLength;

  const calfLength = 82;
  const ankleX = kneeX + calfLength;
  const ankleY = Math.min(bedFrameY - 8, kneeY + 14);

  return (
    <section
      id="movimentos"
      className="py-16 md:py-24 bg-[#141615] text-[#FAF9F6]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium text-[#86EFAC] mb-2">
              Simulador Interativo
            </p>
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              Veja os movimentos na prática.
            </h2>
          </div>

          {/* Interactive Position Buttons */}
          <div className="flex flex-wrap gap-2">
            {ARTICULATION_PRESETS.map((preset) => {
              const active = preset.id === current.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setActiveId(preset.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    active
                      ? 'bg-[#15803D] text-white'
                      : 'bg-[#222624] text-[#A3ABA6] hover:text-white'
                  }`}
                >
                  {preset.label} ({preset.angleTag})
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual Diagram Canvas */}
        <div className="rounded-3xl bg-[#1C1F1E] border border-[#2C312E] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <svg
              viewBox="0 0 500 235"
              className="w-full h-auto select-none"
              role="img"
              aria-label={`Posição ${current.label}`}
            >
              <line x1="20" y1={floorY} x2="480" y2={floorY} stroke="#3A403D" strokeWidth="1.5" />

              {/* Lift Legs */}
              <line
                x1="125"
                y1={bedFrameY + 4}
                x2="125"
                y2={floorY - 10}
                stroke="#68706C"
                strokeWidth="4"
                className="transition-all duration-300"
              />
              <line
                x1="385"
                y1={bedFrameY + 4}
                x2="385"
                y2={floorY - 10}
                stroke="#68706C"
                strokeWidth="4"
                className="transition-all duration-300"
              />

              {/* Wheels */}
              <circle cx="125" cy={floorY - 6} r="6" fill="#86EFAC" />
              <circle cx="385" cy={floorY - 6} r="6" fill="#86EFAC" />

              {/* Frame */}
              <rect
                x="70"
                y={bedFrameY}
                width="365"
                height="7"
                rx="3.5"
                fill="#525855"
                className="transition-all duration-300"
              />

              {/* Wood Headboard & Footboard */}
              <rect
                x="62"
                y={bedFrameY - 40}
                width="9"
                height="50"
                rx="3"
                fill="#A68462"
                className="transition-all duration-300"
              />
              <rect
                x="433"
                y={bedFrameY - 32}
                width="9"
                height="42"
                rx="3"
                fill="#A68462"
                className="transition-all duration-300"
              />

              {/* Articulated Mattress */}
              <path
                d={`M ${backHeadX} ${backHeadY} L ${backPivotX} ${bedFrameY - 8} L ${thighPivotX} ${bedFrameY - 8} L ${kneeX} ${kneeY} L ${ankleX} ${ankleY}`}
                fill="none"
                stroke="#22C55E"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300"
              />

              {/* Joint Dots */}
              <circle cx={backPivotX} cy={bedFrameY - 8} r="4.5" fill="#141615" stroke="#FAF9F6" strokeWidth="2" className="transition-all duration-300" />
              <circle cx={thighPivotX} cy={bedFrameY - 8} r="4.5" fill="#141615" stroke="#FAF9F6" strokeWidth="2" className="transition-all duration-300" />
              <circle cx={kneeX} cy={kneeY} r="4" fill="#141615" stroke="#FAF9F6" strokeWidth="2" className="transition-all duration-300" />
            </svg>
          </div>

          {/* Concise Takeaway */}
          <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#2C312E] pt-6 lg:pt-0 lg:pl-8">
            <div>
              <div className="flex items-center gap-4 font-mono-tabular text-xs text-[#86EFAC] mb-3">
                <span>Dorso {current.backAngle}°</span>
                <span>·</span>
                <span>Pernas {current.thighAngle}°</span>
                <span>·</span>
                <span>Altura {current.heightCm} cm</span>
              </div>

              <h3 className="text-2xl font-normal text-white">
                {current.label}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-[#C8CEC9] leading-relaxed">
                {current.shortBenefit}
              </p>
            </div>

            <div className="mt-8">
              <a
                href={buildWhatsAppUrl(
                  `Olá! Gostaria de indicação de cama hospitalar com a posição "${current.label}".`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-sm font-medium transition-colors whitespace-nowrap"
              >
                <span>Tirar Dúvidas no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
