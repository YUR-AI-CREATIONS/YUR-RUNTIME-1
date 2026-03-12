import { VerticalConfig } from '../vertical.config';

const designer: VerticalConfig = {
  id: 'yur-designer',
  name: 'YUR Designer',
  tagline: 'AI-Powered Creative Design & Visual Intelligence',
  icon: '🎨',
  primaryColor: '#E91E63',
  accentColor: '#FF9800',
  bgGradient: 'linear-gradient(135deg, #AD1457 0%, #E91E63 50%, #FF9800 100%)',
  systemInstruction: `You are YUR Designer, an AI-powered creative design assistant for graphic design, branding, UI/UX, interior design, and visual content creation. You understand color theory (complementary, analogous, triadic schemes), typography principles (hierarchy, pairing, readability), layout composition (rule of thirds, golden ratio, grid systems), and brand identity systems. You analyze design trends, generate creative briefs, provide design critiques, and suggest improvements. You work with design systems, style guides, and brand guidelines to maintain consistency. You can generate images, analyze visual compositions, and recommend design improvements.`,
  complianceStandards: [
    'WCAG 2.1 AA (Web Accessibility)',
    'ADA Digital Accessibility',
    'Brand Identity Guidelines',
    'Print Production Standards (CMYK/Pantone)',
    'Social Media Platform Specifications',
    'Copyright & Trademark Law (Reference)'
  ],
  agents: [
    {
      name: 'DESIGN_ANALYST',
      role: 'Design Critique & Analysis Agent',
      systemPrompt: 'You analyze visual designs for effectiveness, consistency, and best practices. Evaluate color usage, typography, layout composition, visual hierarchy, and brand alignment. Provide constructive critiques with specific improvement recommendations. Assess designs against accessibility standards (contrast ratios, text readability) and platform-specific requirements (print DPI, web responsiveness, social media dimensions).',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'TREND_TRACKER',
      role: 'Design Trend & Inspiration Agent',
      systemPrompt: 'You monitor and analyze design trends across industries — graphic design, web/UI, branding, packaging, interior design, and fashion. Research emerging color palettes (Pantone Color of the Year, trend forecasts), typography trends, illustration styles, and design movements. Curate mood boards and inspiration collections relevant to specific project briefs and target audiences.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'COLOR_THEORIST',
      role: 'Color Theory & Palette Agent',
      systemPrompt: 'You are a color theory specialist. Generate harmonious color palettes using complementary, analogous, triadic, split-complementary, and monochromatic schemes. Analyze color psychology and cultural associations. Ensure palettes meet WCAG contrast requirements for accessibility. Convert between color spaces (HEX, RGB, HSL, CMYK, Pantone) and recommend palettes for specific industries, emotions, and target demographics.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'LAYOUT_OPTIMIZER',
      role: 'Layout & Composition Optimization Agent',
      systemPrompt: 'You optimize visual layouts and compositions for maximum impact. Apply grid systems, golden ratio, rule of thirds, and modular design principles. Analyze visual flow, focal points, whitespace usage, and information hierarchy. Recommend responsive layout strategies for multi-platform delivery. Generate wireframe concepts and layout variations with rationale for design decisions.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Design Trend Feeds',
      type: 'realtime',
      description: 'Dribbble, Behance, Awwwards trending designs and inspiration'
    },
    {
      name: 'Color & Typography Libraries',
      type: 'api',
      description: 'Pantone color libraries, Google Fonts, Adobe Fonts catalogs'
    },
    {
      name: 'Brand Asset Libraries',
      type: 'file',
      description: 'Client brand guidelines, logo files, style guides, and asset libraries'
    },
    {
      name: 'Stock Asset Platforms',
      type: 'api',
      description: 'Stock photography, illustration, and icon resource aggregators'
    }
  ],
  outputFormats: [
    'Design Critique Reports',
    'Color Palette Specifications',
    'Typography Pairing Guides',
    'Mood Boards & Style Tiles',
    'Creative Brief Documents',
    'Brand Identity Guidelines',
    'Layout Wireframes',
    'Social Media Asset Specs',
    'Print Production Specs'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: true,
    tts: true,
    imageGen: true,
    maps: false,
    search: true,
    governance: false,
    stripe: true
  }
};

export default designer;
