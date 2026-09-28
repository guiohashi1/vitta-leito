import heroHomecareBed from '../assets/images/hero_homecare_bed_1790596867976.jpg';
import camaEletricaImg from '../assets/images/cama_hospitalar_eletrica_1790596880362.jpg';
import camaManualImg from '../assets/images/cama_hospitalar_manual_1790596890105.jpg';
import colchaoHospitalarImg from '../assets/images/colchao_hospitalar_terapeutico_1790596899763.jpg';

export const WHATSAPP_NUMBER = '5511998765432';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const HERO_IMAGE = heroHomecareBed;

export interface ProductVariant {
  id: string;
  label: string;
  shortDesc: string;
  keyStats: {
    value: string;
    label: string;
  }[];
  features: string[];
  whatsappPrompt: string;
}

export interface ProductItem {
  id: 'eletrica' | 'manual' | 'colchao';
  number: string;
  tag: string;
  name: string;
  headline: string;
  image: string;
  imageAlt: string;
  variants: ProductVariant[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'eletrica',
    number: '01',
    tag: 'Automação por Controle Remoto',
    name: 'Cama Hospitalar Elétrica',
    headline: 'Autonomia ao toque de um botão. Zero esforço físico para a família.',
    image: camaEletricaImg,
    imageAlt: 'Cama Hospitalar Elétrica Motorizada com acabamento amadeirado e controle remoto',
    variants: [
      {
        id: 'eletrica-3',
        label: '3 Movimentos (Com Altura)',
        shortDesc: 'Eleva encosto, dobra os joelhos e regula a altura do leito para cuidar sem curvar a coluna.',
        keyStats: [
          { value: '180 kg', label: 'Carga máxima' },
          { value: '42–72 cm', label: 'Altura ajustável' },
          { value: '29 dB', label: 'Motor silencioso' }
        ],
        features: [
          'Controle remoto intuitivo com fio',
          'Grades laterais em ABS com trava rápida',
          'Bateria de emergência integrada (Bivolt)'
        ],
        whatsappPrompt: 'Olá! Quero saber mais sobre a *Cama Hospitalar Elétrica (3 Movimentos com ajuste de altura)*.'
      },
      {
        id: 'eletrica-2',
        label: '2 Movimentos (Cabeceira e Pernas)',
        shortDesc: 'Articulação motorizada de tronco e pernas com altura fixa ergonômica.',
        keyStats: [
          { value: '160 kg', label: 'Carga máxima' },
          { value: '52 cm', label: 'Altura fixa' },
          { value: '0°–75°', label: 'Inclinação dorsal' }
        ],
        features: [
          'Acionamento elétrico suave sem trancos',
          'Cabeceira e peseira com design residencial',
          'Rodízios com freio de segurança duplo'
        ],
        whatsappPrompt: 'Olá! Quero saber mais sobre a *Cama Hospitalar Elétrica (2 Movimentos)*.'
      }
    ]
  },
  {
    id: 'manual',
    number: '02',
    tag: 'Mecânica Leve e Durável',
    name: 'Cama Hospitalar Manual',
    headline: 'Precisão hospitalar com manivelas leves. Funciona sem depender de tomada.',
    image: camaManualImg,
    imageAlt: 'Cama Hospitalar Manual em aço carbono branco com manivelas retráteis cromadas',
    variants: [
      {
        id: 'manual-2',
        label: '2 Manivelas (Cabeceira e Pernas)',
        shortDesc: 'Sistema de rolamento leve que permite elevar o paciente usando apenas uma mão.',
        keyStats: [
          { value: '150 kg', label: 'Carga máxima' },
          { value: '50 cm', label: 'Altura padrão' },
          { value: '100%', label: 'Aço carbono epóxi' }
        ],
        features: [
          'Manivelas retráteis que dobram sob a cama',
          'Estrado ventilado em chapa de aço',
          'Grades laterais rebatíveis de proteção'
        ],
        whatsappPrompt: 'Olá! Quero saber mais sobre a *Cama Hospitalar Manual de 2 Manivelas*.'
      },
      {
        id: 'manual-3',
        label: '3 Manivelas (Inclui Altura)',
        shortDesc: 'Adiciona a terceira manivela para subir e descer o nível da cama até 70 cm.',
        keyStats: [
          { value: '170 kg', label: 'Carga máxima' },
          { value: '45–70 cm', label: 'Altura ajustável' },
          { value: '4 Rodas', label: 'Freio diagonal' }
        ],
        features: [
          'Ajuste completo de altura para banhos e trocas',
          'Cabeceiras removíveis em ABS injetado',
          'Livre de manutenção elétrica'
        ],
        whatsappPrompt: 'Olá! Quero saber mais sobre a *Cama Hospitalar Manual de 3 Manivelas (com altura)*.'
      }
    ]
  },
  {
    id: 'colchao',
    number: '03',
    tag: 'Conforto Ortopédico e Higiene',
    name: 'Colchão Hospitalar',
    headline: '100% impermeável e flexível para acompanhar todas as dobras da cama.',
    image: colchaoHospitalarImg,
    imageAlt: 'Colchão Hospitalar Impermeável azul e espuma piramidal terapêutica',
    variants: [
      {
        id: 'colchao-d33',
        label: 'Impermeável D33 Selado',
        shortDesc: 'Capa em courvin hospitalar com costura selada: higienização completa em 1 minuto.',
        keyStats: [
          { value: 'D33', label: 'Espuma certificada' },
          { value: '130 kg', label: 'Suporte de peso' },
          { value: '188×88', label: 'Medida hospitalar' }
        ],
        features: [
          'Bloqueia líquidos, suor e odores',
          'Permite limpeza direta com álcool 70%',
          'Dobra sem deformar na cama elétrica ou manual'
        ],
        whatsappPrompt: 'Olá! Quero saber mais sobre o *Colchão Hospitalar Impermeável D33*.'
      },
      {
        id: 'colchao-piramidal',
        label: 'Terapêutico Anti-Escaras',
        shortDesc: 'Superfície piramidal (caixa de ovo) que alivia a pressão na pele e ativa a circulação.',
        keyStats: [
          { value: 'Alívio', label: 'Prevenção de escaras' },
          { value: '14 cm', label: 'Altura perfilada' },
          { value: 'Inclusa', label: 'Capa impermeável' }
        ],
        features: [
          'Redistribui o peso nos pontos ósseos sensíveis',
          'Canais de ar que evitam calor nas costas',
          'Ideal para quem passa mais de 12h no leito'
        ],
        whatsappPrompt: 'Olá! Quero saber mais sobre o *Colchão Hospitalar Terapêutico Anti-Escaras*.'
      }
    ]
  }
];

export interface ArticulationPreset {
  id: string;
  label: string;
  angleTag: string;
  backAngle: number;
  thighAngle: number;
  heightCm: number;
  shortBenefit: string;
}

export const ARTICULATION_PRESETS: ArticulationPreset[] = [
  {
    id: 'refeicao',
    label: 'Alimentação & Respiração',
    angleTag: '45°',
    backAngle: 45,
    thighAngle: 18,
    heightCm: 52,
    shortBenefit: 'Evita engasgos e refluxo durante as refeições sem precisar empilhar travesseiros.'
  },
  {
    id: 'sentado',
    label: 'Sentado no Leito',
    angleTag: '75°',
    backAngle: 75,
    thighAngle: 28,
    heightCm: 50,
    shortBenefit: 'Permite conversar com a família, assistir TV e ler com postura firme e confortável.'
  },
  {
    id: 'vascular',
    label: 'Alívio nas Pernas',
    angleTag: '35°',
    backAngle: 15,
    thighAngle: 35,
    heightCm: 52,
    shortBenefit: 'Reduz o inchaço nos pés e melhora a circulação após cirurgias ou longos períodos deitado.'
  },
  {
    id: 'cuidado',
    label: 'Altura para o Cuidador',
    angleTag: '70 cm',
    backAngle: 10,
    thighAngle: 5,
    heightCm: 70,
    shortBenefit: 'Eleva a cama até a cintura de quem cuida, protegendo a coluna nas trocas e curativos.'
  }
];
